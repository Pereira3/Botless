const { glob } = require("glob");
const { promisify } = require("util");
const ProGlob = promisify(glob);

async function loadFiles(dirName){
    const Files = await ProGlob(`${process.cwd().replace(/\\/g, "/")}/${dirName}/**/*.js`);
    Files.forEach((file) => delete require.cache[require.resolve(file)]);
    return Files;
}

module.exports = {loadFiles}