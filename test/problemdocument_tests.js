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

describe('When creating a Problem Document with status member', () => {
  it('should contain status member', done => {
    const status = 400;
    const doc = new Problem.Document({ status });

    assert.equal(doc.status, status);

    return done();
  });
});

describe('When creating a Problem Document with detail member', () => {
  it('should contain detail member', done => {
    const detail = 'Your current balance is 30, but that costs 50.';
    const doc = new Problem.Document({ detail });

    assert.equal(doc.detail, detail);

    return done();
  });
});

describe('When creating a Problem Document only with status member', () => {
  it('should contain status member', done => {
    const status = 400;
    const doc = new Problem.Document({ status });

    assert.equal(doc.status, status);

    return done();
  });

  it(`should have type 'about:blank'`, done => {
    const status = 400;
    const doc = new Problem.Document({ status });

    assert.equal(doc.type, 'about:blank');

    return done();
  });

  it(`should have title of status code per HTTP spec (e.g. 400 - Bad Request`, done => {
    const status = 400;
    const doc = new Problem.Document({ status });

    assert.equal(doc.title, 'Bad Request');

    return done();
  });
});
