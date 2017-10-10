'use strict';

const statusCodes = require('./lib/statuscodes');
const url = require('url');

class Document {
  /**
   *
   * @param {Object} options
   * @param {String} [options.title]
   * @param {String} [options.type]
   * @param {String} [options.detail]
   * @param {String} [options.instance]
   * @param {Number} [options.status]
   * @param {Extension} [extension]
   * @returns {{type: string, title: string}}
   */
  constructor (options, extension) {
    const detail = options.detail;
    const instance = options.instance;
    let type = options.type;
    let title = options.title;
    const status = options.status;

    if (status && !type) {
      type = 'about:blank';
    }

    if (status && type === 'about:blank') {
      title = statusCodes[status];
    }

    if (instance) {
      url.parse(instance);
    }

    if (type) {
      url.parse(type);
    }

    const result = {
      type,
      title,
      detail,
      instance,
      status
    };

    if (extension) {
      for (const propertyName in extension.extensionProperties) {
        if (extension.extensionProperties.hasOwnProperty(propertyName)) {
          result[propertyName] = extension.extensionProperties[propertyName];
        }
      }
    }

    return result;
  }
}

class Extension {
  /**
   *
   * @param {Object} extension
   */
  constructor (extension) {
    this.extensionProperties = extension;
  }
}

const BadRequestProblem = function () {
  return new Document({ status: 400 });
};

const UnauthorizedProblem = function () {
  return new Document({ status: 401 });
};

const ForbiddenProblem = function () {
  return new Document({ status: 403 });
};

const NotFoundProblem = function () {
  return new Document({ status: 404 });
};

const InternalServerErrorProblem = function () {
  return new Document({ status: 500 });
};

module.exports = {
  Document,
  Extension,
  StatusCodeProblems: {
    BadRequestProblem,
    UnauthorizedProblem,
    ForbiddenProblem,
    NotFoundProblem,
    InternalServerErrorProblem
  }
};
