import {nodeResolve} from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

export default {
    input: './src/index.js',
    output: [
        {
            file: './dist/xeokit-sdk.min.es.js',
            format: 'es',
            name: 'bundle'
        },
        {
            file: './dist/xeokit-sdk.min.cjs.js',
            format: 'cjs',
            name: 'bundle'
        },
        {
            file: './dist/xeokit-sdk.min.es5.js',
            format: 'es',
            name: 'bundle',
            plugins: [
                getBabelOutputPlugin({ 
                    presets: ['@babel/preset-env']
                })
            ]
        }
    ],
    plugins: [
        nodeResolve({
            browser: true,
            preferBuiltins: false
        }),
        terser()
    ],
    // 用来指定代码执行环境的参数，解决this执行undefined问题 
    context: 'window',
}