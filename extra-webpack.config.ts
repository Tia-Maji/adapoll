import {Configuration} from 'webpack';

export default {
  experiments: {
    topLevelAwait: true,
    asyncWebAssembly: true,
    layers: true
  },
} as Configuration;
