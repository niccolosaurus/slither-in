const { Dropzone } = require("dropzone");

import "dropzone/dist/dropzone.css";
import "./style.css";

const myDropzone = new Dropzone("#dropzone");

const output = document.querySelector("#output");

myDropzone.on("addedfile", (file) => {
  // Add an info line about the added file for each file.
  output.innerHTML += `<div>File added: ${file.name}</div>`;
});