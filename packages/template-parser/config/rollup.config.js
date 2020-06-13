/*
 * @Description: rollup 打包工具的配置文件
 * @Author: chenfx
 * @Date: 2020-06-12 19:47:32
 * @LastEditTime: 2020-06-13 21:00:58
 */ 
const common = require('./rollup')

module.exports = {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "umd", // cjs
    name: common.name, // umd 格式必须有 name，打包后的自执行文件中导出的方法名就是该名字
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
