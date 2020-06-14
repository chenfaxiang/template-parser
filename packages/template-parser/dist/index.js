/*!
 * purejs-template-parser 0.0.6 (https://github.com/chenfaxiang/template-parser/)
 * Copyright 2020-2020 chenfaxiang. All Rights Reserved
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.purejsTemplateParser = factory());
}(this, (function () { 'use strict';

  function purejsTemplateParser(html, options) {
      var reg = /<%=([^%>]+)?%>/g, reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g;
      var code = 'var r=[];\n', cursor = 0;
      var add = function (line, js) {
          js ? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
              (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
          return add;
      };
      var match;
      while (match = reg.exec(html)) {
          add(html.slice(cursor, match.index), false)(match[1], true);
          cursor = match.index + match[0].length;
      }
      add(html.substr(cursor), false);
      code += 'return r.join("");';
      return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
  }

  return purejsTemplateParser;

})));
