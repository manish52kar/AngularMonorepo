module.exports = {
  name: 'core-login',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/core-login',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
