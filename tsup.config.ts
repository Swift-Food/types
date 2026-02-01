import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'enums/index': 'src/enums/index.ts',
    'responses/index': 'src/responses/index.ts',
    'requests/index': 'src/requests/index.ts',
    'common/index': 'src/common/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,
});
