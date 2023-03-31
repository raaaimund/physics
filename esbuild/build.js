const esbuild = require("esbuild");
const copyIndexHtmlEsbuildPlugin = require("./copy-index-html.esbuild.plugin.js");

async function build() {
    await esbuild.build({
        entryPoints: ['src/app.ts', 'style.css'],
        bundle: true,
        minify: true,
        sourcemap: true,
        outdir: 'dist',
        plugins: [copyIndexHtmlEsbuildPlugin],
    });
}

(async () => await build())();