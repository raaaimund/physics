import * as fs from "fs";

const copyFile = async (source, target, {searchValue, replaceValue}) => {
    let fileToCopy = await fs.promises.readFile(source, 'utf8');
    await fs.promises.writeFile(
        target,
        fileToCopy.replace(searchValue, replaceValue)
    );
    console.log(`copied ${source} file to ${target}, replaced ${searchValue} with ${replaceValue}.`);
}

const copyIndexHtmlEsbuildPlugin = {
    name: 'copy-static-files',
    setup(build) {
        build.onEnd(async (result) => {
            const fileName = 'index.html';
            await copyFile(fileName, `${build.initialOptions.outdir}/${fileName}`, {
                searchValue: /\.\/dist\/src\/app.js/g,
                replaceValue: '\.\/src\/app.js'
            });
        });
    },
}

export default copyIndexHtmlEsbuildPlugin;