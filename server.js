const path = require("path");
const express = require("express");
const { createRequestHandler } = require("@remix-run/express");

const app = express();
const BUILD_DIR = path.join(process.cwd(), "build");

app.use(express.static("public"));
app.use(express.static(BUILD_DIR));

app.all(
  "*",
  createRequestHandler({
    getLoadContext() {
      return {};
    },
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Remix corriendo en http://localhost:${PORT}`);
});
