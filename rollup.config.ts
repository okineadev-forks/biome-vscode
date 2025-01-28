import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";

export default defineConfig([
	{
		input: "src/index.ts",
		output: {
			dir: "out",
			format: "cjs",
		},
		plugins: [
			json(),
			commonjs(),
			nodeResolve(),
			esbuild({
				target: "node16",
				minify: true,
			}),
		],
		external: ["vscode", "node:events"],
	},
]);
