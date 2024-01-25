#!/usr/bin/env node

import { build } from 'esbuild';
// import { sassPlugin } from 'esbuild-sass-plugin';
import { join } from 'path';
// import postcss from 'postcss';
// import autoprefixer from 'autoprefixer';

build({
  entryPoints: ["./main.js"],
  bundle: true,
  outdir: "./dist",
  absWorkingDir: join(process.cwd()),
  metafile: true,
  minify: true
})
.then(() => {console.log("Build complete"); process.exit()})
.catch(() => process.exit(1));
