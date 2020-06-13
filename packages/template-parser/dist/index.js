/*!
 * purejs-template-parser 0.0.4 (https://github.com/chenfaxiang/template-parser/)
 * Copyright 2020-2020 chenfaxiang. All Rights Reserved
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.purejsTemplateParser = factory());
}(this, (function () { 'use strict';

  function purejsTemplateParser() {
      console.log('foo');
  }

  return purejsTemplateParser;

})));
