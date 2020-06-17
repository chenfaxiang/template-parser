/*
 * @Description: 进行单元测试
 * @Author: chenfx
 * @Date: 2020-06-12 18:29:37
 * @LastEditTime: 2020-06-17 19:57:08
 */ 
const assert = require("assert");

function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

// js 测试源文件
const purejsTemplateParser = _interopDefault(require("../src/index.ts"));
const t = purejsTemplateParser;

describe("templateParser", () => {
  describe("#templateParser()", () => {
    it("templateParser is a function", () => {
      assert.strictEqual(typeof t(""), "function");
    });

    it("简单的html dom结构", () => {
      var tpl1 = "<div>123</div>";
      assert.strictEqual(t(tpl1, {}), tpl1);
    });
  });
});