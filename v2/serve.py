"""Serve the working page for version 2 and write ticked items back to the Markdown file.

Usage: python v2/serve.py [port]

The page shows v2/arbeitsstand.md. Ticking an item on the page changes "- [ ]" to "- [x]" in
that one line of that one file. The server listens on 127.0.0.1 only.
"""

import json
import re
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DOC = ROOT / "arbeitsstand.md"
ITEM = re.compile(r"^- \[( |x)\] (.*)$")
MAX_BODY = 4096


def toggle(line_no: int, text: str, checked: bool) -> str | None:
    """Set the state of one task item and return an error message, or None on success."""
    raw = DOC.read_bytes().decode("utf-8")
    newline = "\r\n" if "\r\n" in raw else "\n"
    lines = raw.split(newline)
    if not 0 <= line_no < len(lines):
        return "Die Zeile gibt es nicht mehr."
    match = ITEM.match(lines[line_no])
    # The text is compared so that a page showing an older state cannot tick another item.
    if not match or match.group(2) != text:
        return "Der Text wurde inzwischen geändert."
    lines[line_no] = "- [%s] %s" % ("x" if checked else " ", match.group(2))
    DOC.write_bytes(newline.join(lines).encode("utf-8"))
    return None


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def reply(self, status: int, payload: dict) -> None:
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        if self.path != "/api/toggle":
            self.reply(404, {"error": "Unbekannte Adresse."})
            return
        # Trust boundary: only the page served from this server may write, so a request
        # from another site opened in the same browser is refused.
        host = self.headers.get("Host", "")
        origin = self.headers.get("Origin")
        if origin is not None and origin != "http://" + host:
            self.reply(403, {"error": "Anfrage von einer anderen Seite."})
            return
        if self.headers.get("Content-Type", "").split(";")[0] != "application/json":
            self.reply(415, {"error": "Erwartet wird JSON."})
            return
        length = int(self.headers.get("Content-Length") or 0)
        if not 0 < length <= MAX_BODY:
            self.reply(413, {"error": "Anfrage zu groß."})
            return
        try:
            data = json.loads(self.rfile.read(length))
            line_no, text, checked = data["line"], data["text"], data["checked"]
        except (ValueError, KeyError, TypeError):
            self.reply(400, {"error": "Anfrage nicht lesbar."})
            return
        if type(line_no) is not int or type(text) is not str or type(checked) is not bool:
            self.reply(400, {"error": "Anfrage nicht lesbar."})
            return
        error = toggle(line_no, text, checked)
        if error:
            self.reply(409, {"error": error})
        else:
            self.reply(200, {"ok": True})


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 18841
    server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print("http://127.0.0.1:%d/" % port, flush=True)
    server.serve_forever()
