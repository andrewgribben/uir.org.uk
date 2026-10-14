import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve("dist");
const host = "127.0.0.1";
const port = Number.parseInt(process.env.PORT || "8080", 10);

const types = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".jpg", "image/jpeg"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"]
]);

function resolvePath(urlPath) {
  const requestPath = decodeURIComponent(new URL(urlPath, "http://localhost").pathname);
  const filePath = resolve(root, `.${normalize(requestPath)}`);
  if (!filePath.startsWith(root)) return null;
  if (existsSync(filePath) && statSync(filePath).isDirectory()) return join(filePath, "index.html");
  return filePath;
}

createServer((request, response) => {
  const filePath = resolvePath(request.url || "/");
  if (!filePath || !existsSync(filePath) || !statSync(filePath).isFile()) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, { "content-type": types.get(extname(filePath)) || "application/octet-stream" });
  createReadStream(filePath).pipe(response);
}).listen(port, host, () => {
  console.log(`Serving ${root} at http://${host}:${port}`);
});
