const fs = require('fs');

const copyIndexHtmlEsbuildPlugin = {
    name: 'copy-static-files',
    setup(build) {
        build.onEnd(async (result) => {
            let fileToCopy = await fs.promises.readFile('index.html', 'utf8');
            await fs.promises.writeFile(
                `${build.initialOptions.outdir}/index.html`,
                fileToCopy.replace(/\.\/dist\/app.js/g, 'app.js')
            );
            console.log(`copied index.html file to ${build.initialOptions.outdir}`);
        });
    },
}

module.exports = copyIndexHtmlEsbuildPlugin