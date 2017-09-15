'use strict';

const assert = require('assert');
const Problem = require('../');

describe('When creating a Problem Document with type and title', () => {
  it('should contain title', done => {
    const type = 'http://tempuri.org/my-problem';
    const title = 'something went wrong';
    const doc = new Problem.Document({ type, title });

    assert.equal(doc.title, title);
    assert.equal(doc.type, type);

    return done();
  });
});

describe('When creating a Problem Document with an Extension', () => {
  it('should contain extension', done => {
    const type = 'http://tempuri.org/my-problem';
    const title = `something went wrong`;
    const extensionName = 'invalid-params';
    const extensionValue = 'test';
    const extension = new Problem.Extension({ 'invalid-params': extensionValue });
    const doc = new Problem.Document({ type, title }, extension);

    assert.equal(doc[extensionName], extensionValue);

    return done();
  });
});
