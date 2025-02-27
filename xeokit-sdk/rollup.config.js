import {nodeResolve} from '@rollup/plugin-node-resolve';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

export default {
    input: './src/index.js',
    output: [
        {
            file: './dist/xeokit-sdk.es.js',
            format: 'es',
            name: 'bundle'
        },
        {
            file: './dist/xeokit-sdk.cjs.js',
            format: 'cjs',
            name: 'bundle'
        },
        {
            file: './dist/xeokit-sdk.es5.js',
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
        })
    ],
    // 用来指定代码执行环境的参数，解决this执行undefined问题 
    context: 'window',
}