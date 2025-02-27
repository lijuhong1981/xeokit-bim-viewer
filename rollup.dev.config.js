import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: './index.js',
    output: [{
        file: './dist/xeokit-bim-viewer.es.js',
        format: 'es',
        name: 'bundle'
    },
    {
        file: './dist/xeokit-bim-viewer.umd.js',
        format: 'umd',
        name: 'bundle'
    }],
    plugins: [
        nodeResolve(),
    ]
}