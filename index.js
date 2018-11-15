module.exports = function (content, map, meta) {
  const options = this.loaders[this.loaderIndex].options;
  const startMessage = options['startMessage'] ? `\n>>>>>${options['startMessage']}>>>>>\n` : '\n>>>>>>>>>>\n';
  const endMessage = options['endMessage'] ? `\n>>>>>${options['endMessage']}>>>>>\n` : '\n>>>>>>>>>>\n';

  console.log(startMessage, content, endMessage);

  this.callback(null, content, map, meta);
  return;
};
