import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: {
      file: 'lib/bundle.js',
      format: 'cjs'
    },
    plugins: [
      typescript(),
      nodeResolve()
    ],
    context: 'window'
  };
  
  