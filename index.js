const fs = require("fs");
const path = require("path");

class Bookmator {

  static compile(data) {
    if(typeof data !== "object") {
      console.log("data", data);
      throw new Error("Parameter 1 <data> must be an object");
    }
    const { files = [] } = data;
    if(!Array.isArray(files)) {
      console.log("data.files", files);
      throw new Error("Parameter 1 <data.files> must be an array");
    }
    files.forEach(file => {
      if(typeof file !== "string") {
        console.log("file", file);
        throw new Error("Items in parameter 1 <files> must be strings");
      }
      const filepath = path.resolve(file);
      const contents = this.getBookContents(filepath);
      fs.writeFileSync(filepath, contents, "utf8");
    });
  }

  static getBookContents(files) {
    let contents = "";
    let directory = undefined;
    [].concat(files)
      .map(file => {
        return path.resolve(file);
      })
      .filter(file => {
        return typeof file === "string" && file.toLowerCase().endsWith(".md");
      })
      .forEach(file => {
        directory = path.dirname(file);
        const directoryExtension = file.replace(/\.[^\.]+$/g, "");
        const existsExtension = fs.existsSync(directoryExtension);
        if(existsExtension) {
          const isExtension = fs.lstatSync(directoryExtension).isDirectory();
          let extensionContents = "";
          if(isExtension) {
            const extensions = fs.readdirSync(directoryExtension).map(file => {
              return path.resolve(directoryExtension, file);
            });
            extensionContents += this.getBookContents(extensions);
          }
          fs.writeFileSync(file, extensionContents, "utf8");
          contents += extensionContents;
        } else {
          contents += fs.readFileSync(file).toString();
        }
        return;
      });
    return contents;
  }

}

module.exports = Bookmator;
