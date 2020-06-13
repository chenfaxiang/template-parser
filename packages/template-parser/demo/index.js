// 先在页面上导入 require 后再使用
// requirejs.config({
//   baseUrl: "../",
// });

require(["../dist/index"], function (purejsTemplateParser) {
  purejsTemplateParser()
});