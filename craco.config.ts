import path from 'path';

export default {
    webpack: {
      alias: {
        '@src': path.resolve(__dirname, 'src'),
      },
    },
}
