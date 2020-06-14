import { IPurejsTemplateParser } from './entity/index'

export default function purejsTemplateParser(html, options) {
  const reg = /<%=([^%>]+)?%>/g,
    reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g
  let code = 'var r=[];\n',
    cursor = 0

  /**
   * 处理模板中的变量，将变量进行截取求值
   * @param line 当前需要处理的字符
   * @param js 是否是需要直接在 new Function 执行的 js
   */
  const add = function (line, js) {
    js ? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
      (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '')
    return add
  }

  let match
  while (match = reg.exec(html)) {
    add(html.slice(cursor, match.index), false)(match[1], true)
    cursor = match.index + match[0].length
  }
  add(html.substr(cursor), false)
  code += 'return r.join("");'

  return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
}
