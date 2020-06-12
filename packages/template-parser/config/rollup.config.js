/*
 * @Description: rollup 打包工具的配置文件
 * @Author: chenfx
 * @Date: 2020-06-12 19:47:32
 * @LastEditTime: 2020-06-12 20:06:57
 */ 
const common = require('./rollup')

module.exports = {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
    banner: common.banner,
  },
  plugins: [
    common.mergeCompilerPlugin({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          module: "ES2015",
        },
        useTsconfigDeclarationDir: true,
      },
    }),
  ],
};
