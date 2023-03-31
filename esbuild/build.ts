import * as esbuild from "esbuild";
import copyIndexHtmlEsbuildPlugin from "./copy-index-html.esbuild.plugin";

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