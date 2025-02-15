import { Options } from 'tsup';

const defaultOptions: Options = {
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: true,
  treeshake: true,
  // for the type maps to work, we use tsc's declaration-only command
  dts: false,
  clean: true,
  target: 'ES6',
};
export default defaultOptions;
