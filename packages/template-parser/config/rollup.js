/*
 * @Description: rollup 打包工具的基础配置
 * @Author: chenfx
 * @Date: 2020-06-12 19:51:58
 * @LastEditTime: 2020-06-13 20:59:39
 */ 
const typescriptPkg = require('rollup-plugin-typescript2')
const pkg = require('../package.json')
const version = pkg.version
const name = 'purejsTemplateParser'

/**
 * 编译时显示的横幅信息
 */
const banner = 
`/*!
 * ${pkg.name} ${version} (https://github.com/chenfaxiang/template-parser/)
 * Copyright 2020-${(new Date).getFullYear()} chenfaxiang. All Rights Reserved
 */
`

/**
 * 配置带有编译器错误的Typescript汇总插件
 * @param {*} options 
 */
function mergeCompilerPlugin(options) {
  options = options || {
    tsconfigOverride: {
      compilerOptions: {
        module: 'ES2015'
      }
    }
  }

  return typescriptPkg(options)
}

module.exports = {
  name,
  banner,
  mergeCompilerPlugin
}
