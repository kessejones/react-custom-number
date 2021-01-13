import packageJson from './package.json';
import typescript from "rollup-plugin-typescript2";

const external = [
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.peerDependencies || {}),
];

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const input = "src/index.ts";

const plugins = [
    typescript({
        typescript: require("typescript"),
    }),
];


export default [
    {
        input,
        output: {
            file: packageJson.module,
            format: "esm",
            sourcemap: true,
        },
        plugins,
        external,
        extensions
    },
    {
        input,
        output: {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true,
        },
        plugins,
        external,
        extensions
    },
];
