'use strict';

class Document {
  /**
   *
   * @param {Object} options
   * @param {String} options.title
   * @param {String} options.type
   * @param {Extension} [extension]
   * @returns {{type: string, title: string}}
   */
  constructor (options, extension) {
    const type = options.type;
    const title = options.title;

    const result = {
      type,
      title
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
