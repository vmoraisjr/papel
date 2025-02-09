const fs = require("fs");
const path = require("path");

// criar uma pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Erro: ", error);
//   }
//   console.log("Pasta criada com sucesso");
// });

// criar arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso");

    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "\n new row...",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log("append com sucesso");
      }
    );

    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf-8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log(data);
      }
    );
  }
);

// adicionar a arquivo

// ler arquivo
