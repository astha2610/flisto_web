const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PORT = process.env.PORT || 8000;
const MIME_TYPES = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

// URL routing rules
const routes = {
  "/": "index.html",
  "/privacy-policy": "privacy-policy.html",
};

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return MIME_TYPES[ext] || "application/octet-stream";
}

function serveFile(filePath, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 - File Not Found</h1>");
      return;
    }

    res.writeHead(200, { "Content-Type": getMimeType(filePath) });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

  // Handle routing
  if (routes[pathname]) {
    pathname = "/" + routes[pathname];
  }

  // Remove leading slash and resolve path
  const filePath = path.join(
    __dirname,
    pathname === "/" ? "index.html" : pathname.slice(1)
  );

  // Security: prevent directory traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { "Content-Type": "text/html" });
    res.end("<h1>403 - Forbidden</h1>");
    return;
  }

  // Check if file exists
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 - File Not Found</h1>");
      return;
    }

    serveFile(filePath, res);
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/`);
  console.log(`📄 Landing page: http://localhost:${PORT}/`);
  console.log(`📋 Privacy policy: http://localhost:${PORT}/privacy-policy`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`❌ Port ${PORT} is already in use.`);
    console.log(`💡 Try: lsof -ti:${PORT} | xargs kill -9`);
    console.log(
      `💡 Or use a different port by setting PORT environment variable`
    );
    process.exit(1);
  } else {
    throw err;
  }
});
