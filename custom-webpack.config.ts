import * as webpack from 'webpack';
import { CustomWebpackBrowserSchema, TargetOptions } from '@angular-builders/custom-webpack';

export default (
  config: webpack.Configuration,
  options: CustomWebpackBrowserSchema,
  targetOptions: TargetOptions
) => {
  return config;
  // return {
  //   experiments: {
  //     asyncWebAssembly: true,
  //     topLevelAwait: true,
  //     layers: true // optional, with some bundlers/frameworks it doesn't work without
  //   },
  //   ...config
  // };
}
