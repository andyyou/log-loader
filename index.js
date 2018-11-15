const loaderUtils = require('loader-utils');

module.exports = function (content, map, meta) {
  const options = loaderUtils.getOptions(this);
  const beforeMessage = options['beforeMessage'] ? `\n>>>>>${options['beforeMessage']}>>>>>\n` : '\n>>>>>>>>>>\n';
  const afterMessage = options['afterMessage'] ? `\n>>>>>${options['afterMessage']}>>>>>\n` : '\n>>>>>>>>>>\n';

  console.log(beforeMessage, content, afterMessage);

  this.callback(null, content, map, meta);
  return;
};
