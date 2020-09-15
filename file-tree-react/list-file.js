const fs = require('fs');
const path = require('path');

const [, , lsFolder] = process.argv;

const ls = (parent, fileName) => {
  const filePath = path.resolve(parent, fileName);
  const stat = fs.statSync(filePath);

  if (!stat.isDirectory()) {
    return {
      name: fileName,
    };
  }

  const children = fs.readdirSync(filePath);
  return {
    name: fileName,
    files: children
      .slice(0, 5) // otherwise too many
      .map((child) => ls(filePath, child)),
  };
};

const data = ls(path.resolve('.'), lsFolder);
console.log(JSON.stringify(data, null, 2));
