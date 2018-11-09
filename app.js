const fs = require("fs");
const path = require("path");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");

const buildpath = path.resolve(__dirname, "build");

const serveFile = (app, filename) => {
  app.get("/" + filename, (req, res) => {
    res.sendFile(filename, {
      root: buildpath
    });
  });
};

function start(port) {
  const app = express();
  app.disable("x-powered-by");
  app.use(compression());
  app.use(morgan("dev"));
  app.use(
    "/static",
    express.static("build/static", {
      fallthrough: false,
      maxAge: 31536000000
    })
  );
  serveFile(app, "manifest.json");
  serveFile(app, "logo.ico");
  app.get("*", (req, res) => {
    res.sendFile("index.html", {
      root: buildpath
    });
  });

  app.listen(port);
}

start(3030);
