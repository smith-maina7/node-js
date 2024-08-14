const fs = require("fs");
// reading files

fs.readFile("./Docs/blog2.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

fs.writeFile(
  "./Docs/blog1.txt",
  "We changed the blog to something new.",
  (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log("File was successfully written");
  }
);
fs.readFile("./Docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
