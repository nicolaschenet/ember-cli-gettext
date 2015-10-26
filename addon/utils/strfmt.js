export function strfmt(string, hash) {
  if (typeof hash === 'undefined') {
    return string;
  }
  return string.replace(/\{\{\s*([a-zA-Z]+)\s*\}\}/g, function (i, match) {
    return typeof hash[match] !== 'undefined' ? hash[match] : '{{' + match + '}}';
  });
};

export default strfmt;
