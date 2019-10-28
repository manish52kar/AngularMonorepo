module.exports = {
  name: 'login-box',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/login-box',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
