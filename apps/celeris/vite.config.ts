import { createViteConfig } from "./viteconfig/config/index";
import { brotliCompress } from 'zlib'
import { promisify } from 'util'
import gzipPlugin from 'rollup-plugin-gzip'

const brotliPromise = promisify(brotliCompress)

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

export default createViteConfig({
	overrides: {
		build: {
			rollupOptions: {
				plugins:[
					gzipPlugin({
						customCompression: content => brotliPromise(Buffer.from(content)),
						fileName: '.br',
					  }),
				],
				output: {
					// https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
					sanitizeFileName(name) {
						const match = DRIVE_LETTER_REGEX.exec(name);
						const driveLetter = match ? match[0] : "";
						// substr 是被淘汰語法，因此要改 slice
						return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "");
					},
					dir:"../../docs"
				},
			},
		},
	},
});
