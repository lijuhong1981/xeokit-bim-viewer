import {nodeResolve} from '@rollup/plugin-node-resolve';

export default {
    input: './src/index.js',
    output: [
        {
            file: './dist/xeokit-sdk.es.js',
            format: 'es',
            name: 'bundle'
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