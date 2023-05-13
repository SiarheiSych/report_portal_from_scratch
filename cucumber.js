let common = [
  'test/features/test.feature',
  '--require-module ts-node/register',
  '--require test/**/*cucumber.ts',
  '--format progress-bar',
  '--publish-quiet'
].join(' ');

module.exports = {
  default: common
};
