'use strict';

const statusCodes = require('./lib/statuscodes');

class Document {
  /**
   *
   * @param {Object} options
   * @param {String} [options.title]
   * @param {String} [options.type]
   * @param {Number} [options.status]
   * @param {Extension} [extension]
   * @returns {{type: string, title: string}}
   */
  constructor (options, extension) {
    let type = options.type;
    let title = options.title;
    const status = options.status;

    if (status && !type) {
      type = 'about:blank';
    }

    if (status && type === 'about:blank') {
      title = statusCodes[status];
    }

    const result = {
      type,
      title,
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

module.exports = {
  Document,
  Extension
};
