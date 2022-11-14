(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MetalitixLogger"] = factory();
	else
		root["MetalitixLogger"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/platform/platform.js":
/*!*******************************************!*\
  !*** ./node_modules/platform/platform.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Platform.js v1.3.6
 * Copyright 2014-2020 Benjamin Tan
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license
 */
;(function() {
  'use strict';

  /** Used to determine if values are of the language type `Object`. */
  var objectTypes = {
    'function': true,
    'object': true
  };

  /** Used as a reference to the global object. */
  var root = (objectTypes[typeof window] && window) || this;

  /** Backup possible global object. */
  var oldRoot = root;

  /** Detect free variable `exports`. */
  var freeExports = objectTypes[typeof exports] && exports;

  /** Detect free variable `module`. */
  var freeModule = objectTypes["object"] && module && !module.nodeType && module;

  /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */
  var freeGlobal = freeExports && freeModule && typeof __webpack_require__.g == 'object' && __webpack_require__.g;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }

  /**
   * Used as the maximum length of an array-like object.
   * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   */
  var maxSafeInteger = Math.pow(2, 53) - 1;

  /** Regular expression to detect Opera. */
  var reOpera = /\bOpera/;

  /** Possible global object. */
  var thisBinding = this;

  /** Used for native method references. */
  var objectProto = Object.prototype;

  /** Used to check for own properties of an object. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to resolve the internal `[[Class]]` of values. */
  var toString = objectProto.toString;

  /*--------------------------------------------------------------------------*/

  /**
   * Capitalizes a string value.
   *
   * @private
   * @param {string} string The string to capitalize.
   * @returns {string} The capitalized string.
   */
  function capitalize(string) {
    string = String(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * A utility function to clean up the OS name.
   *
   * @private
   * @param {string} os The OS name to clean up.
   * @param {string} [pattern] A `RegExp` pattern matching the OS name.
   * @param {string} [label] A label for the OS.
   */
  function cleanupOS(os, pattern, label) {
    // Platform tokens are defined at:
    // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    var data = {
      '10.0': '10',
      '6.4':  '10 Technical Preview',
      '6.3':  '8.1',
      '6.2':  '8',
      '6.1':  'Server 2008 R2 / 7',
      '6.0':  'Server 2008 / Vista',
      '5.2':  'Server 2003 / XP 64-bit',
      '5.1':  'XP',
      '5.01': '2000 SP1',
      '5.0':  '2000',
      '4.0':  'NT',
      '4.90': 'ME'
    };
    // Detect Windows version from platform tokens.
    if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) &&
        (data = data[/[\d.]+$/.exec(os)])) {
      os = 'Windows ' + data;
    }
    // Correct character case and cleanup string.
    os = String(os);

    if (pattern && label) {
      os = os.replace(RegExp(pattern, 'i'), label);
    }

    os = format(
      os.replace(/ ce$/i, ' CE')
        .replace(/\bhpw/i, 'web')
        .replace(/\bMacintosh\b/, 'Mac OS')
        .replace(/_PowerPC\b/i, ' OS')
        .replace(/\b(OS X) [^ \d]+/i, '$1')
        .replace(/\bMac (OS X)\b/, '$1')
        .replace(/\/(\d)/, ' $1')
        .replace(/_/g, '.')
        .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
        .replace(/\bx86\.64\b/gi, 'x86_64')
        .replace(/\b(Windows Phone) OS\b/, '$1')
        .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
        .split(' on ')[0]
    );

    return os;
  }

  /**
   * An iteration utility for arrays and objects.
   *
   * @private
   * @param {Array|Object} object The object to iterate over.
   * @param {Function} callback The function called per iteration.
   */
  function each(object, callback) {
    var index = -1,
        length = object ? object.length : 0;

    if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
      while (++index < length) {
        callback(object[index], index, object);
      }
    } else {
      forOwn(object, callback);
    }
  }

  /**
   * Trim and conditionally capitalize string values.
   *
   * @private
   * @param {string} string The string to format.
   * @returns {string} The formatted string.
   */
  function format(string) {
    string = trim(string);
    return /^(?:webOS|i(?:OS|P))/.test(string)
      ? string
      : capitalize(string);
  }

  /**
   * Iterates over an object's own properties, executing the `callback` for each.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} callback The function executed per own property.
   */
  function forOwn(object, callback) {
    for (var key in object) {
      if (hasOwnProperty.call(object, key)) {
        callback(object[key], key, object);
      }
    }
  }

  /**
   * Gets the internal `[[Class]]` of a value.
   *
   * @private
   * @param {*} value The value.
   * @returns {string} The `[[Class]]`.
   */
  function getClassOf(value) {
    return value == null
      ? capitalize(value)
      : toString.call(value).slice(8, -1);
  }

  /**
   * Host objects can return type values that are different from their actual
   * data type. The objects we are concerned with usually return non-primitive
   * types of "object", "function", or "unknown".
   *
   * @private
   * @param {*} object The owner of the property.
   * @param {string} property The property to check.
   * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
   */
  function isHostType(object, property) {
    var type = object != null ? typeof object[property] : 'number';
    return !/^(?:boolean|number|string|undefined)$/.test(type) &&
      (type == 'object' ? !!object[property] : true);
  }

  /**
   * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
   *
   * @private
   * @param {string} string The string to qualify.
   * @returns {string} The qualified string.
   */
  function qualify(string) {
    return String(string).replace(/([ -])(?!$)/g, '$1?');
  }

  /**
   * A bare-bones `Array#reduce` like utility function.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function called per iteration.
   * @returns {*} The accumulated result.
   */
  function reduce(array, callback) {
    var accumulator = null;
    each(array, function(value, index) {
      accumulator = callback(accumulator, value, index, array);
    });
    return accumulator;
  }

  /**
   * Removes leading and trailing whitespace from a string.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} The trimmed string.
   */
  function trim(string) {
    return String(string).replace(/^ +| +$/g, '');
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a new platform object.
   *
   * @memberOf platform
   * @param {Object|string} [ua=navigator.userAgent] The user agent string or
   *  context object.
   * @returns {Object} A platform object.
   */
  function parse(ua) {

    /** The environment context object. */
    var context = root;

    /** Used to flag when a custom context is provided. */
    var isCustomContext = ua && typeof ua == 'object' && getClassOf(ua) != 'String';

    // Juggle arguments.
    if (isCustomContext) {
      context = ua;
      ua = null;
    }

    /** Browser navigator object. */
    var nav = context.navigator || {};

    /** Browser user agent string. */
    var userAgent = nav.userAgent || '';

    ua || (ua = userAgent);

    /** Used to flag when `thisBinding` is the [ModuleScope]. */
    var isModuleScope = isCustomContext || thisBinding == oldRoot;

    /** Used to detect if browser is like Chrome. */
    var likeChrome = isCustomContext
      ? !!nav.likeChrome
      : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());

    /** Internal `[[Class]]` value shortcuts. */
    var objectClass = 'Object',
        airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
        enviroClass = isCustomContext ? objectClass : 'Environment',
        javaClass = (isCustomContext && context.java) ? 'JavaPackage' : getClassOf(context.java),
        phantomClass = isCustomContext ? objectClass : 'RuntimeObject';

    /** Detect Java environments. */
    var java = /\bJava/.test(javaClass) && context.java;

    /** Detect Rhino. */
    var rhino = java && getClassOf(context.environment) == enviroClass;

    /** A character to represent alpha. */
    var alpha = java ? 'a' : '\u03b1';

    /** A character to represent beta. */
    var beta = java ? 'b' : '\u03b2';

    /** Browser document object. */
    var doc = context.document || {};

    /**
     * Detect Opera browser (Presto-based).
     * http://www.howtocreate.co.uk/operaStuff/operaObject.html
     * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
     */
    var opera = context.operamini || context.opera;

    /** Opera `[[Class]]`. */
    var operaClass = reOpera.test(operaClass = (isCustomContext && opera) ? opera['[[Class]]'] : getClassOf(opera))
      ? operaClass
      : (opera = null);

    /*------------------------------------------------------------------------*/

    /** Temporary variable used over the script's lifetime. */
    var data;

    /** The CPU architecture. */
    var arch = ua;

    /** Platform description array. */
    var description = [];

    /** Platform alpha/beta indicator. */
    var prerelease = null;

    /** A flag to indicate that environment features should be used to resolve the platform. */
    var useFeatures = ua == userAgent;

    /** The browser/environment version. */
    var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();

    /** A flag to indicate if the OS ends with "/ Version" */
    var isSpecialCasedOS;

    /* Detectable layout engines (order is important). */
    var layout = getLayout([
      { 'label': 'EdgeHTML', 'pattern': 'Edge' },
      'Trident',
      { 'label': 'WebKit', 'pattern': 'AppleWebKit' },
      'iCab',
      'Presto',
      'NetFront',
      'Tasman',
      'KHTML',
      'Gecko'
    ]);

    /* Detectable browser names (order is important). */
    var name = getName([
      'Adobe AIR',
      'Arora',
      'Avant Browser',
      'Breach',
      'Camino',
      'Electron',
      'Epiphany',
      'Fennec',
      'Flock',
      'Galeon',
      'GreenBrowser',
      'iCab',
      'Iceweasel',
      'K-Meleon',
      'Konqueror',
      'Lunascape',
      'Maxthon',
      { 'label': 'Microsoft Edge', 'pattern': '(?:Edge|Edg|EdgA|EdgiOS)' },
      'Midori',
      'Nook Browser',
      'PaleMoon',
      'PhantomJS',
      'Raven',
      'Rekonq',
      'RockMelt',
      { 'label': 'Samsung Internet', 'pattern': 'SamsungBrowser' },
      'SeaMonkey',
      { 'label': 'Silk', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Sleipnir',
      'SlimBrowser',
      { 'label': 'SRWare Iron', 'pattern': 'Iron' },
      'Sunrise',
      'Swiftfox',
      'Vivaldi',
      'Waterfox',
      'WebPositive',
      { 'label': 'Yandex Browser', 'pattern': 'YaBrowser' },
      { 'label': 'UC Browser', 'pattern': 'UCBrowser' },
      'Opera Mini',
      { 'label': 'Opera Mini', 'pattern': 'OPiOS' },
      'Opera',
      { 'label': 'Opera', 'pattern': 'OPR' },
      'Chromium',
      'Chrome',
      { 'label': 'Chrome', 'pattern': '(?:HeadlessChrome)' },
      { 'label': 'Chrome Mobile', 'pattern': '(?:CriOS|CrMo)' },
      { 'label': 'Firefox', 'pattern': '(?:Firefox|Minefield)' },
      { 'label': 'Firefox for iOS', 'pattern': 'FxiOS' },
      { 'label': 'IE', 'pattern': 'IEMobile' },
      { 'label': 'IE', 'pattern': 'MSIE' },
      'Safari'
    ]);

    /* Detectable products (order is important). */
    var product = getProduct([
      { 'label': 'BlackBerry', 'pattern': 'BB10' },
      'BlackBerry',
      { 'label': 'Galaxy S', 'pattern': 'GT-I9000' },
      { 'label': 'Galaxy S2', 'pattern': 'GT-I9100' },
      { 'label': 'Galaxy S3', 'pattern': 'GT-I9300' },
      { 'label': 'Galaxy S4', 'pattern': 'GT-I9500' },
      { 'label': 'Galaxy S5', 'pattern': 'SM-G900' },
      { 'label': 'Galaxy S6', 'pattern': 'SM-G920' },
      { 'label': 'Galaxy S6 Edge', 'pattern': 'SM-G925' },
      { 'label': 'Galaxy S7', 'pattern': 'SM-G930' },
      { 'label': 'Galaxy S7 Edge', 'pattern': 'SM-G935' },
      'Google TV',
      'Lumia',
      'iPad',
      'iPod',
      'iPhone',
      'Kindle',
      { 'label': 'Kindle Fire', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Nexus',
      'Nook',
      'PlayBook',
      'PlayStation Vita',
      'PlayStation',
      'TouchPad',
      'Transformer',
      { 'label': 'Wii U', 'pattern': 'WiiU' },
      'Wii',
      'Xbox One',
      { 'label': 'Xbox 360', 'pattern': 'Xbox' },
      'Xoom'
    ]);

    /* Detectable manufacturers. */
    var manufacturer = getManufacturer({
      'Apple': { 'iPad': 1, 'iPhone': 1, 'iPod': 1 },
      'Alcatel': {},
      'Archos': {},
      'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
      'Asus': { 'Transformer': 1 },
      'Barnes & Noble': { 'Nook': 1 },
      'BlackBerry': { 'PlayBook': 1 },
      'Google': { 'Google TV': 1, 'Nexus': 1 },
      'HP': { 'TouchPad': 1 },
      'HTC': {},
      'Huawei': {},
      'Lenovo': {},
      'LG': {},
      'Microsoft': { 'Xbox': 1, 'Xbox One': 1 },
      'Motorola': { 'Xoom': 1 },
      'Nintendo': { 'Wii U': 1,  'Wii': 1 },
      'Nokia': { 'Lumia': 1 },
      'Oppo': {},
      'Samsung': { 'Galaxy S': 1, 'Galaxy S2': 1, 'Galaxy S3': 1, 'Galaxy S4': 1 },
      'Sony': { 'PlayStation': 1, 'PlayStation Vita': 1 },
      'Xiaomi': { 'Mi': 1, 'Redmi': 1 }
    });

    /* Detectable operating systems (order is important). */
    var os = getOS([
      'Windows Phone',
      'KaiOS',
      'Android',
      'CentOS',
      { 'label': 'Chrome OS', 'pattern': 'CrOS' },
      'Debian',
      { 'label': 'DragonFly BSD', 'pattern': 'DragonFly' },
      'Fedora',
      'FreeBSD',
      'Gentoo',
      'Haiku',
      'Kubuntu',
      'Linux Mint',
      'OpenBSD',
      'Red Hat',
      'SuSE',
      'Ubuntu',
      'Xubuntu',
      'Cygwin',
      'Symbian OS',
      'hpwOS',
      'webOS ',
      'webOS',
      'Tablet OS',
      'Tizen',
      'Linux',
      'Mac OS X',
      'Macintosh',
      'Mac',
      'Windows 98;',
      'Windows '
    ]);

    /*------------------------------------------------------------------------*/

    /**
     * Picks the layout engine from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected layout engine.
     */
    function getLayout(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the manufacturer from an array of guesses.
     *
     * @private
     * @param {Array} guesses An object of guesses.
     * @returns {null|string} The detected manufacturer.
     */
    function getManufacturer(guesses) {
      return reduce(guesses, function(result, value, key) {
        // Lookup the manufacturer by product or scan the UA for the manufacturer.
        return result || (
          value[product] ||
          value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] ||
          RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)
        ) && key;
      });
    }

    /**
     * Picks the browser name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected browser name.
     */
    function getName(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the OS name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected OS name.
     */
    function getOS(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua)
            )) {
          result = cleanupOS(result, pattern, guess.label || guess);
        }
        return result;
      });
    }

    /**
     * Picks the product name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected product name.
     */
    function getProduct(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + ' *\\w+-[\\w]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua)
            )) {
          // Split by forward slash and append product version if needed.
          if ((result = String((guess.label && !RegExp(pattern, 'i').test(guess.label)) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
            result[0] += ' ' + result[1];
          }
          // Correct character case and cleanup string.
          guess = guess.label || guess;
          result = format(result[0]
            .replace(RegExp(pattern, 'i'), guess)
            .replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ')
            .replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
        }
        return result;
      });
    }

    /**
     * Resolves the version using an array of UA patterns.
     *
     * @private
     * @param {Array} patterns An array of UA patterns.
     * @returns {null|string} The detected version.
     */
    function getVersion(patterns) {
      return reduce(patterns, function(result, pattern) {
        return result || (RegExp(pattern +
          '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
      });
    }

    /**
     * Returns `platform.description` when the platform object is coerced to a string.
     *
     * @name toString
     * @memberOf platform
     * @returns {string} Returns `platform.description` if available, else an empty string.
     */
    function toStringPlatform() {
      return this.description || '';
    }

    /*------------------------------------------------------------------------*/

    // Convert layout to an array so we can add extra details.
    layout && (layout = [layout]);

    // Detect Android products.
    // Browsers on Android devices typically provide their product IDS after "Android;"
    // up to "Build" or ") AppleWebKit".
    // Example:
    // "Mozilla/5.0 (Linux; Android 8.1.0; Moto G (5) Plus) AppleWebKit/537.36
    // (KHTML, like Gecko) Chrome/70.0.3538.80 Mobile Safari/537.36"
    if (/\bAndroid\b/.test(os) && !product &&
        (data = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(ua))) {
      product = trim(data[1])
        // Replace any language codes (eg. "en-US").
        .replace(/^[a-z]{2}-[a-z]{2};\s*/i, '')
        || null;
    }
    // Detect product names that contain their manufacturer's name.
    if (manufacturer && !product) {
      product = getProduct([manufacturer]);
    } else if (manufacturer && product) {
      product = product
        .replace(RegExp('^(' + qualify(manufacturer) + ')[-_.\\s]', 'i'), manufacturer + ' ')
        .replace(RegExp('^(' + qualify(manufacturer) + ')[-_.]?(\\w)', 'i'), manufacturer + ' $2');
    }
    // Clean up Google TV.
    if ((data = /\bGoogle TV\b/.exec(product))) {
      product = data[0];
    }
    // Detect simulators.
    if (/\bSimulator\b/i.test(ua)) {
      product = (product ? product + ' ' : '') + 'Simulator';
    }
    // Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.
    if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
      description.push('running in Turbo/Uncompressed mode');
    }
    // Detect IE Mobile 11.
    if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
      data = parse(ua.replace(/like iPhone OS/, ''));
      manufacturer = data.manufacturer;
      product = data.product;
    }
    // Detect iOS.
    else if (/^iP/.test(product)) {
      name || (name = 'Safari');
      os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua))
        ? ' ' + data[1].replace(/_/g, '.')
        : '');
    }
    // Detect Kubuntu.
    else if (name == 'Konqueror' && /^Linux\b/i.test(os)) {
      os = 'Kubuntu';
    }
    // Detect Android browsers.
    else if ((manufacturer && manufacturer != 'Google' &&
        ((/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua)) || /\bVita\b/.test(product))) ||
        (/\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua))) {
      name = 'Android Browser';
      os = /\bAndroid\b/.test(os) ? os : 'Android';
    }
    // Detect Silk desktop/accelerated modes.
    else if (name == 'Silk') {
      if (!/\bMobi/i.test(ua)) {
        os = 'Android';
        description.unshift('desktop mode');
      }
      if (/Accelerated *= *true/i.test(ua)) {
        description.unshift('accelerated');
      }
    }
    // Detect UC Browser speed mode.
    else if (name == 'UC Browser' && /\bUCWEB\b/.test(ua)) {
      description.push('speed mode');
    }
    // Detect PaleMoon identifying as Firefox.
    else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
      description.push('identifying as Firefox ' + data[1]);
    }
    // Detect Firefox OS and products running Firefox.
    else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
      os || (os = 'Firefox OS');
      product || (product = data[1]);
    }
    // Detect false positives for Firefox/Safari.
    else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
      // Escape the `/` for Firefox 1.
      if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
        // Clear name of false positives.
        name = null;
      }
      // Reassign a generic name.
      if ((data = product || manufacturer || os) &&
          (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
        name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
      }
    }
    // Add Chrome version to description for Electron.
    else if (name == 'Electron' && (data = (/\bChrome\/([\d.]+)\b/.exec(ua) || 0)[1])) {
      description.push('Chromium ' + data);
    }
    // Detect non-Opera (Presto-based) versions (order is important).
    if (!version) {
      version = getVersion([
        '(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)',
        'Version',
        qualify(name),
        '(?:Firefox|Minefield|NetFront)'
      ]);
    }
    // Detect stubborn layout engines.
    if ((data =
          layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' ||
          /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') ||
          /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' ||
          !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') ||
          layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront'
        )) {
      layout = [data];
    }
    // Detect Windows Phone 7 desktop mode.
    if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
      name += ' Mobile';
      os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
      description.unshift('desktop mode');
    }
    // Detect Windows Phone 8.x desktop mode.
    else if (/\bWPDesktop\b/i.test(ua)) {
      name = 'IE Mobile';
      os = 'Windows Phone 8.x';
      description.unshift('desktop mode');
      version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
    }
    // Detect IE 11 identifying as other browsers.
    else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
      if (name) {
        description.push('identifying as ' + name + (version ? ' ' + version : ''));
      }
      name = 'IE';
      version = data[1];
    }
    // Leverage environment features.
    if (useFeatures) {
      // Detect server-side environments.
      // Rhino has a global function while others have a global object.
      if (isHostType(context, 'global')) {
        if (java) {
          data = java.lang.System;
          arch = data.getProperty('os.arch');
          os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
        }
        if (rhino) {
          try {
            version = context.require('ringo/engine').version.join('.');
            name = 'RingoJS';
          } catch(e) {
            if ((data = context.system) && data.global.system == context.system) {
              name = 'Narwhal';
              os || (os = data[0].os || null);
            }
          }
          if (!name) {
            name = 'Rhino';
          }
        }
        else if (
          typeof context.process == 'object' && !context.process.browser &&
          (data = context.process)
        ) {
          if (typeof data.versions == 'object') {
            if (typeof data.versions.electron == 'string') {
              description.push('Node ' + data.versions.node);
              name = 'Electron';
              version = data.versions.electron;
            } else if (typeof data.versions.nw == 'string') {
              description.push('Chromium ' + version, 'Node ' + data.versions.node);
              name = 'NW.js';
              version = data.versions.nw;
            }
          }
          if (!name) {
            name = 'Node.js';
            arch = data.arch;
            os = data.platform;
            version = /[\d.]+/.exec(data.version);
            version = version ? version[0] : null;
          }
        }
      }
      // Detect Adobe AIR.
      else if (getClassOf((data = context.runtime)) == airRuntimeClass) {
        name = 'Adobe AIR';
        os = data.flash.system.Capabilities.os;
      }
      // Detect PhantomJS.
      else if (getClassOf((data = context.phantom)) == phantomClass) {
        name = 'PhantomJS';
        version = (data = data.version || null) && (data.major + '.' + data.minor + '.' + data.patch);
      }
      // Detect IE compatibility modes.
      else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
        // We're in compatibility mode when the Trident version + 4 doesn't
        // equal the document mode.
        version = [version, doc.documentMode];
        if ((data = +data[1] + 4) != version[1]) {
          description.push('IE ' + version[1] + ' mode');
          layout && (layout[1] = '');
          version[1] = data;
        }
        version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
      }
      // Detect IE 11 masking as other browsers.
      else if (typeof doc.documentMode == 'number' && /^(?:Chrome|Firefox)\b/.test(name)) {
        description.push('masking as ' + name + ' ' + version);
        name = 'IE';
        version = '11.0';
        layout = ['Trident'];
        os = 'Windows';
      }
      os = os && format(os);
    }
    // Detect prerelease phases.
    if (version && (data =
          /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
          /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) ||
          /\bMinefield\b/i.test(ua) && 'a'
        )) {
      prerelease = /b/i.test(data) ? 'beta' : 'alpha';
      version = version.replace(RegExp(data + '\\+?$'), '') +
        (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
    }
    // Detect Firefox Mobile.
    if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS|KaiOS)\b/.test(os)) {
      name = 'Firefox Mobile';
    }
    // Obscure Maxthon's unreliable version.
    else if (name == 'Maxthon' && version) {
      version = version.replace(/\.[\d.]+/, '.x');
    }
    // Detect Xbox 360 and Xbox One.
    else if (/\bXbox\b/i.test(product)) {
      if (product == 'Xbox 360') {
        os = null;
      }
      if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
        description.unshift('mobile mode');
      }
    }
    // Add mobile postfix.
    else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) &&
        (os == 'Windows CE' || /Mobi/i.test(ua))) {
      name += ' Mobile';
    }
    // Detect IE platform preview.
    else if (name == 'IE' && useFeatures) {
      try {
        if (context.external === null) {
          description.unshift('platform preview');
        }
      } catch(e) {
        description.unshift('embedded');
      }
    }
    // Detect BlackBerry OS version.
    // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
    else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data =
          (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] ||
          version
        )) {
      data = [data, /BB10/.test(ua)];
      os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
      version = null;
    }
    // Detect Opera identifying/masking itself as another browser.
    // http://www.opera.com/support/kb/view/843/
    else if (this != forOwn && product != 'Wii' && (
          (useFeatures && opera) ||
          (/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
          (name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os)) ||
          (name == 'IE' && (
            (os && !/^Win/.test(os) && version > 5.5) ||
            /\bWindows XP\b/.test(os) && version > 8 ||
            version == 8 && !/\bTrident\b/.test(ua)
          ))
        ) && !reOpera.test((data = parse.call(forOwn, ua.replace(reOpera, '') + ';'))) && data.name) {
      // When "identifying", the UA contains both Opera and the other browser's name.
      data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
      if (reOpera.test(name)) {
        if (/\bIE\b/.test(data) && os == 'Mac OS') {
          os = null;
        }
        data = 'identify' + data;
      }
      // When "masking", the UA contains only the other browser's name.
      else {
        data = 'mask' + data;
        if (operaClass) {
          name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
        } else {
          name = 'Opera';
        }
        if (/\bIE\b/.test(data)) {
          os = null;
        }
        if (!useFeatures) {
          version = null;
        }
      }
      layout = ['Presto'];
      description.push(data);
    }
    // Detect WebKit Nightly and approximate Chrome/Safari versions.
    if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
      // Correct build number for numeric comparison.
      // (e.g. "532.5" becomes "532.05")
      data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
      // Nightly builds are postfixed with a "+".
      if (name == 'Safari' && data[1].slice(-1) == '+') {
        name = 'WebKit Nightly';
        prerelease = 'alpha';
        version = data[1].slice(0, -1);
      }
      // Clear incorrect browser versions.
      else if (version == data[1] ||
          version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
        version = null;
      }
      // Use the full Chrome version when available.
      data[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(ua) || 0)[1];
      // Detect Blink layout engine.
      if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
        layout = ['Blink'];
      }
      // Detect JavaScriptCore.
      // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
      if (!useFeatures || (!likeChrome && !data[1])) {
        layout && (layout[1] = 'like Safari');
        data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : data < 602 ? 9 : data < 604 ? 10 : data < 606 ? 11 : data < 608 ? 12 : '12');
      } else {
        layout && (layout[1] = 'like Chrome');
        data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
      }
      // Add the postfix of ".x" or "+" for approximate versions.
      layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+'));
      // Obscure version for some Safari 1-2 releases.
      if (name == 'Safari' && (!version || parseInt(version) > 45)) {
        version = data;
      } else if (name == 'Chrome' && /\bHeadlessChrome/i.test(ua)) {
        description.unshift('headless');
      }
    }
    // Detect Opera desktop modes.
    if (name == 'Opera' &&  (data = /\bzbov|zvav$/.exec(os))) {
      name += ' ';
      description.unshift('desktop mode');
      if (data == 'zvav') {
        name += 'Mini';
        version = null;
      } else {
        name += 'Mobile';
      }
      os = os.replace(RegExp(' *' + data + '$'), '');
    }
    // Detect Chrome desktop mode.
    else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
      description.unshift('desktop mode');
      name = 'Chrome Mobile';
      version = null;

      if (/\bOS X\b/.test(os)) {
        manufacturer = 'Apple';
        os = 'iOS 4.3+';
      } else {
        os = null;
      }
    }
    // Newer versions of SRWare Iron uses the Chrome tag to indicate its version number.
    else if (/\bSRWare Iron\b/.test(name) && !version) {
      version = getVersion('Chrome');
    }
    // Strip incorrect OS versions.
    if (version && version.indexOf((data = /[\d.]+$/.exec(os))) == 0 &&
        ua.indexOf('/' + data + '-') > -1) {
      os = trim(os.replace(data, ''));
    }
    // Ensure OS does not include the browser name.
    if (os && os.indexOf(name) != -1 && !RegExp(name + ' OS').test(os)) {
      os = os.replace(RegExp(' *' + qualify(name) + ' *'), '');
    }
    // Add layout engine.
    if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (
        /Browser|Lunascape|Maxthon/.test(name) ||
        name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) ||
        /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(name) && layout[1])) {
      // Don't add layout details to description if they are falsey.
      (data = layout[layout.length - 1]) && description.push(data);
    }
    // Combine contextual information.
    if (description.length) {
      description = ['(' + description.join('; ') + ')'];
    }
    // Append manufacturer to description.
    if (manufacturer && product && product.indexOf(manufacturer) < 0) {
      description.push('on ' + manufacturer);
    }
    // Append product to description.
    if (product) {
      description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
    }
    // Parse the OS into an object.
    if (os) {
      data = / ([\d.+]+)$/.exec(os);
      isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
      os = {
        'architecture': 32,
        'family': (data && !isSpecialCasedOS) ? os.replace(data[0], '') : os,
        'version': data ? data[1] : null,
        'toString': function() {
          var version = this.version;
          return this.family + ((version && !isSpecialCasedOS) ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
        }
      };
    }
    // Add browser/OS architecture.
    if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
      if (os) {
        os.architecture = 64;
        os.family = os.family.replace(RegExp(' *' + data), '');
      }
      if (
          name && (/\bWOW64\b/i.test(ua) ||
          (useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua)))
      ) {
        description.unshift('32-bit');
      }
    }
    // Chrome 39 and above on OS X is always 64-bit.
    else if (
        os && /^OS X/.test(os.family) &&
        name == 'Chrome' && parseFloat(version) >= 39
    ) {
      os.architecture = 64;
    }

    ua || (ua = null);

    /*------------------------------------------------------------------------*/

    /**
     * The platform object.
     *
     * @name platform
     * @type Object
     */
    var platform = {};

    /**
     * The platform description.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.description = ua;

    /**
     * The name of the browser's layout engine.
     *
     * The list of common layout engines include:
     * "Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.layout = layout && layout[0];

    /**
     * The name of the product's manufacturer.
     *
     * The list of manufacturers include:
     * "Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
     * "Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
     * "Nokia", "Samsung" and "Sony"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.manufacturer = manufacturer;

    /**
     * The name of the browser/environment.
     *
     * The list of common browser names include:
     * "Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
     * "Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
     * "Opera Mini" and "Opera"
     *
     * Mobile versions of some browsers have "Mobile" appended to their name:
     * eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.name = name;

    /**
     * The alpha/beta release indicator.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.prerelease = prerelease;

    /**
     * The name of the product hosting the browser.
     *
     * The list of common products include:
     *
     * "BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
     * "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.product = product;

    /**
     * The browser's user agent string.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.ua = ua;

    /**
     * The browser/environment version.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.version = name && version;

    /**
     * The name of the operating system.
     *
     * @memberOf platform
     * @type Object
     */
    platform.os = os || {

      /**
       * The CPU architecture the OS is built for.
       *
       * @memberOf platform.os
       * @type number|null
       */
      'architecture': null,

      /**
       * The family of the OS.
       *
       * Common values include:
       * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
       * "Windows XP", "OS X", "Linux", "Ubuntu", "Debian", "Fedora", "Red Hat",
       * "SuSE", "Android", "iOS" and "Windows Phone"
       *
       * @memberOf platform.os
       * @type string|null
       */
      'family': null,

      /**
       * The version of the OS.
       *
       * @memberOf platform.os
       * @type string|null
       */
      'version': null,

      /**
       * Returns the OS string.
       *
       * @memberOf platform.os
       * @returns {string} The OS string.
       */
      'toString': function() { return 'null'; }
    };

    platform.parse = parse;
    platform.toString = toStringPlatform;

    if (platform.version) {
      description.unshift(version);
    }
    if (platform.name) {
      description.unshift(name);
    }
    if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
      description.push(product ? '(' + os + ')' : 'on ' + os);
    }
    if (description.length) {
      platform.description = description.join(' ');
    }
    return platform;
  }

  /*--------------------------------------------------------------------------*/

  // Export platform.
  var platform = parse();

  // Some AMD build optimizers, like r.js, check for condition patterns like the following:
  if (true) {
    // Expose platform on the global object to prevent errors when platform is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    root.platform = platform;

    // Define as an anonymous module so platform can be aliased through path mapping.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return platform;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else {}
}.call(this));


/***/ }),

/***/ "./node_modules/three/src/math/MathUtils.js":
/*!**************************************************!*\
  !*** ./node_modules/three/src/math/MathUtils.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEG2RAD": () => (/* binding */ DEG2RAD),
/* harmony export */   "RAD2DEG": () => (/* binding */ RAD2DEG),
/* harmony export */   "ceilPowerOfTwo": () => (/* binding */ ceilPowerOfTwo),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "damp": () => (/* binding */ damp),
/* harmony export */   "degToRad": () => (/* binding */ degToRad),
/* harmony export */   "euclideanModulo": () => (/* binding */ euclideanModulo),
/* harmony export */   "floorPowerOfTwo": () => (/* binding */ floorPowerOfTwo),
/* harmony export */   "generateUUID": () => (/* binding */ generateUUID),
/* harmony export */   "inverseLerp": () => (/* binding */ inverseLerp),
/* harmony export */   "isPowerOfTwo": () => (/* binding */ isPowerOfTwo),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "mapLinear": () => (/* binding */ mapLinear),
/* harmony export */   "pingpong": () => (/* binding */ pingpong),
/* harmony export */   "radToDeg": () => (/* binding */ radToDeg),
/* harmony export */   "randFloat": () => (/* binding */ randFloat),
/* harmony export */   "randFloatSpread": () => (/* binding */ randFloatSpread),
/* harmony export */   "randInt": () => (/* binding */ randInt),
/* harmony export */   "seededRandom": () => (/* binding */ seededRandom),
/* harmony export */   "setQuaternionFromProperEuler": () => (/* binding */ setQuaternionFromProperEuler),
/* harmony export */   "smootherstep": () => (/* binding */ smootherstep),
/* harmony export */   "smoothstep": () => (/* binding */ smoothstep)
/* harmony export */ });
const _lut = [];

for ( let i = 0; i < 256; i ++ ) {

	_lut[ i ] = ( i < 16 ? '0' : '' ) + ( i ).toString( 16 );

}

let _seed = 1234567;


const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;

// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
function generateUUID() {

	const d0 = Math.random() * 0xffffffff | 0;
	const d1 = Math.random() * 0xffffffff | 0;
	const d2 = Math.random() * 0xffffffff | 0;
	const d3 = Math.random() * 0xffffffff | 0;
	const uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
			_lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
			_lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
			_lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];

	// .toUpperCase() here flattens concatenated strings to save heap memory space.
	return uuid.toUpperCase();

}

function clamp( value, min, max ) {

	return Math.max( min, Math.min( max, value ) );

}

// compute euclidian modulo of m % n
// https://en.wikipedia.org/wiki/Modulo_operation
function euclideanModulo( n, m ) {

	return ( ( n % m ) + m ) % m;

}

// Linear mapping from range <a1, a2> to range <b1, b2>
function mapLinear( x, a1, a2, b1, b2 ) {

	return b1 + ( x - a1 ) * ( b2 - b1 ) / ( a2 - a1 );

}

// https://www.gamedev.net/tutorials/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/
function inverseLerp( x, y, value ) {

	if ( x !== y ) {

		return ( value - x ) / ( y - x );

	} else {

		return 0;

	}

}

// https://en.wikipedia.org/wiki/Linear_interpolation
function lerp( x, y, t ) {

	return ( 1 - t ) * x + t * y;

}

// http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/
function damp( x, y, lambda, dt ) {

	return lerp( x, y, 1 - Math.exp( - lambda * dt ) );

}

// https://www.desmos.com/calculator/vcsjnyz7x4
function pingpong( x, length = 1 ) {

	return length - Math.abs( euclideanModulo( x, length * 2 ) - length );

}

// http://en.wikipedia.org/wiki/Smoothstep
function smoothstep( x, min, max ) {

	if ( x <= min ) return 0;
	if ( x >= max ) return 1;

	x = ( x - min ) / ( max - min );

	return x * x * ( 3 - 2 * x );

}

function smootherstep( x, min, max ) {

	if ( x <= min ) return 0;
	if ( x >= max ) return 1;

	x = ( x - min ) / ( max - min );

	return x * x * x * ( x * ( x * 6 - 15 ) + 10 );

}

// Random integer from <low, high> interval
function randInt( low, high ) {

	return low + Math.floor( Math.random() * ( high - low + 1 ) );

}

// Random float from <low, high> interval
function randFloat( low, high ) {

	return low + Math.random() * ( high - low );

}

// Random float from <-range/2, range/2> interval
function randFloatSpread( range ) {

	return range * ( 0.5 - Math.random() );

}

// Deterministic pseudo-random float in the interval [ 0, 1 ]
function seededRandom( s ) {

	if ( s !== undefined ) _seed = s % 2147483647;

	// Park-Miller algorithm

	_seed = _seed * 16807 % 2147483647;

	return ( _seed - 1 ) / 2147483646;

}

function degToRad( degrees ) {

	return degrees * DEG2RAD;

}

function radToDeg( radians ) {

	return radians * RAD2DEG;

}

function isPowerOfTwo( value ) {

	return ( value & ( value - 1 ) ) === 0 && value !== 0;

}

function ceilPowerOfTwo( value ) {

	return Math.pow( 2, Math.ceil( Math.log( value ) / Math.LN2 ) );

}

function floorPowerOfTwo( value ) {

	return Math.pow( 2, Math.floor( Math.log( value ) / Math.LN2 ) );

}

function setQuaternionFromProperEuler( q, a, b, c, order ) {

	// Intrinsic Proper Euler Angles - see https://en.wikipedia.org/wiki/Euler_angles

	// rotations are applied to the axes in the order specified by 'order'
	// rotation by angle 'a' is applied first, then by angle 'b', then by angle 'c'
	// angles are in radians

	const cos = Math.cos;
	const sin = Math.sin;

	const c2 = cos( b / 2 );
	const s2 = sin( b / 2 );

	const c13 = cos( ( a + c ) / 2 );
	const s13 = sin( ( a + c ) / 2 );

	const c1_3 = cos( ( a - c ) / 2 );
	const s1_3 = sin( ( a - c ) / 2 );

	const c3_1 = cos( ( c - a ) / 2 );
	const s3_1 = sin( ( c - a ) / 2 );

	switch ( order ) {

		case 'XYX':
			q.set( c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13 );
			break;

		case 'YZY':
			q.set( s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13 );
			break;

		case 'ZXZ':
			q.set( s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13 );
			break;

		case 'XZX':
			q.set( c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13 );
			break;

		case 'YXY':
			q.set( s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13 );
			break;

		case 'ZYZ':
			q.set( s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13 );
			break;

		default:
			console.warn( 'THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' + order );

	}

}







/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_ORIGIN": () => (/* binding */ API_ORIGIN),
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "API_VERSION": () => (/* binding */ API_VERSION),
/* harmony export */   "DEFAULT_INTERVAL_VALUE": () => (/* binding */ DEFAULT_INTERVAL_VALUE),
/* harmony export */   "MAXIMUM_BATCH_RECORDS_LENGTH": () => (/* binding */ MAXIMUM_BATCH_RECORDS_LENGTH),
/* harmony export */   "MAXIMUM_BATCH_SENDING_INTERVAL": () => (/* binding */ MAXIMUM_BATCH_SENDING_INTERVAL),
/* harmony export */   "MAXIMUM_SESSION_KEEPALIVE_TIME": () => (/* binding */ MAXIMUM_SESSION_KEEPALIVE_TIME),
/* harmony export */   "MAX_INTERVAL_VALUE": () => (/* binding */ MAX_INTERVAL_VALUE),
/* harmony export */   "MIN_INTERVAL_VALUE": () => (/* binding */ MIN_INTERVAL_VALUE),
/* harmony export */   "isProduction": () => (/* binding */ isProduction),
/* harmony export */   "isStaging": () => (/* binding */ isStaging)
/* harmony export */ });
const isProduction = "development" === 'production';
const isStaging = "development" === 'staging';
const API_ORIGIN = isProduction
    ? 'https://app.metalitix.com'
    : isStaging
        ? 'https://metalitix-staging.aircards.io'
        : 'https://metalitix-dev.aircards.io';
const API_VERSION = 'v1';
const API_URL = `${API_ORIGIN}/api/${API_VERSION}`;
const MIN_INTERVAL_VALUE = 100;
const MAX_INTERVAL_VALUE = 1000;
const DEFAULT_INTERVAL_VALUE = 500;
const MAXIMUM_BATCH_RECORDS_LENGTH = 100;
/** Wait maximum 3 minutes if limit of MAXIMUM_BATCH_RECORDS_LENGTH was not reached */
const MAXIMUM_BATCH_SENDING_INTERVAL = 3 * 60 * 1000;
/** Maximum server keepalive time since last successful pull data to the server */
const MAXIMUM_SESSION_KEEPALIVE_TIME = 5 * 60 * 1000;


/***/ }),

/***/ "./src/lib/mtx-engagement-survey.ts":
/*!******************************************!*\
  !*** ./src/lib/mtx-engagement-survey.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addSurvey": () => (/* binding */ addSurvey)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./src/services/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const template = `<style>
  .mtx-survey {
    position: fixed;
    z-index: 2000;
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);
    padding: 10px 33px 7px;
    border-radius: 5px;
    border: 2px solid #888;
    transition: transform 0.3s ease-in-out;
  }
  
  .mtx-survey--open {
    transform: translate(-50%, 35px);
  }
  
  .mtx-survey--close {
    opacity: 0;
    transition: transform 0.3s cubic-bezier(.84,-0.23,.41,.78), opacity 0.3s ease-in-out;
    transform: translate(-50%, 0) scale(0.6);
  }
  
  .mtx-survey--white {
    background: #fff;
    color: #292929;
  }
  
  .mtx-survey--black {
    background: #2d2d2d;
    color: #fff;
  }
  
  .mtx-survey-title {
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin: 0 0 5px;
    text-align: center;
  }
  
  .mtx-survey-items {
    text-align: center;
    margin-bottom: 7px;
  }
  
  .mtx-survey-item {
    transition: opacity 0.3s ease-in-out;
    cursor: pointer;
  }
  
  .mtx-survey-submit-holder {
    text-align: center;
  }
  
  .mtx-survey-submit-button {
    background: #FFFFFF;
    border: 0;
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    padding: 7px 27px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .mtx-survey-submit-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .mtx-survey--white .mtx-survey-submit-button {
    background: #292929;
    color: #fff;
  }
  
  .mtx-survey--black .mtx-survey-submit-button {
    background: #fff;
    color: #2f2f2f;
  }
</style>
<h4 class="mtx-survey-title">How would you rate your experience?</h4>
<div class="mtx-survey-items">
  <svg width="265" height="39" viewBox="0 0 265 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g class="mtx-survey-item" data-value="1">
      <path d="M19.2562 37.805C29.2646 37.805 37.3965 29.6731 37.3965 19.6647C37.3965 9.65626 29.2646 1.52441 19.2562 1.52441C9.24777 1.52441 1.11594 9.65626 1.11594 19.6647C1.11594 29.6731 9.24777 37.805 19.2562 37.805Z" fill="#E64355"/>
      <path d="M19.2564 2.64125C9.87348 2.64125 2.23313 10.2816 2.23313 19.6645C2.23313 29.0474 9.87348 36.6878 19.2564 36.6878C28.6393 36.6878 36.2796 29.0474 36.2796 19.6645C36.2796 10.2816 28.6393 2.64125 19.2564 2.64125ZM19.2564 0.407227C29.8903 0.407227 38.5137 9.03056 38.5137 19.6645C38.5137 30.2985 29.8903 38.9218 19.2564 38.9218C8.62242 38.9218 -0.000896454 30.2985 -0.000896454 19.6645C-0.000896454 9.03056 8.62242 0.407227 19.2564 0.407227Z" fill="#FBD2D8"/>
      <path d="M23.6645 16.6417C22.7597 16.6417 22.0262 15.5414 22.0262 14.1842C22.0262 12.827 22.7597 11.7268 23.6645 11.7268C24.5693 11.7268 25.3027 12.827 25.3027 14.1842C25.3027 15.5414 24.5693 16.6417 23.6645 16.6417Z" fill="white"/>
      <path d="M15.1 16.6417C14.1952 16.6417 13.4617 15.5414 13.4617 14.1842C13.4617 12.827 14.1952 11.7268 15.1 11.7268C16.0048 11.7268 16.7383 12.827 16.7383 14.1842C16.7383 15.5414 16.0048 16.6417 15.1 16.6417Z" fill="white"/>
      <path d="M9.96176 28.2436C9.96176 28.2436 11.7639 21.5713 19.0021 21.5713C25.734 21.5713 28.5488 28.2436 28.5488 28.2436" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
    </g>
   
    <g class="mtx-survey-item" data-value="2">
      <path d="M75.7699 37.8047C85.7783 37.8047 93.9102 29.6729 93.9102 19.6644C93.9102 9.65602 85.7783 1.52417 75.7699 1.52417C65.7615 1.52417 57.6296 9.65602 57.6296 19.6644C57.6296 29.6729 65.7615 37.8047 75.7699 37.8047Z" fill="#F5A720"/>
      <path d="M75.7701 2.64125C66.3872 2.64125 58.7468 10.2816 58.7468 19.6645C58.7468 29.0474 66.3872 36.6878 75.7701 36.6878C85.153 36.6878 92.7933 29.0474 92.7933 19.6645C92.7933 10.2816 85.153 2.64125 75.7701 2.64125ZM75.7701 0.407227C86.404 0.407227 95.0273 9.03056 95.0273 19.6645C95.0273 30.2985 86.404 38.9218 75.7701 38.9218C65.1361 38.9218 56.5128 30.2985 56.5128 19.6645C56.5128 9.03056 65.1361 0.407227 75.7701 0.407227Z" fill="#FFE6BE"/>
      <path d="M80.0609 16.6413C79.1561 16.6413 78.4227 15.5411 78.4227 14.1839C78.4227 12.8267 79.1561 11.7264 80.0609 11.7264C80.9657 11.7264 81.6992 12.8267 81.6992 14.1839C81.6992 15.5411 80.9657 16.6413 80.0609 16.6413Z" fill="white"/>
      <path d="M71.4848 16.6413C70.58 16.6413 69.8465 15.5411 69.8465 14.1839C69.8465 12.8267 70.58 11.7264 71.4848 11.7264C72.3896 11.7264 73.123 12.8267 73.123 14.1839C73.123 15.5411 72.3896 16.6413 71.4848 16.6413Z" fill="white"/>
      <path d="M67.7444 27.484C67.7444 27.484 69.4124 23.6266 76.0996 23.6266C81.1038 23.6266 83.8145 27.484 83.8145 27.484" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
    </g>
   
    <g class="mtx-survey-item" data-value="3">
      <path d="M132.284 37.805C142.292 37.805 150.424 29.6731 150.424 19.6647C150.424 9.65626 142.292 1.52441 132.284 1.52441C122.275 1.52441 114.143 9.65626 114.143 19.6647C114.143 29.6731 122.275 37.805 132.284 37.805Z" fill="#D4C828"/>
      <path d="M132.284 2.64125C122.901 2.64125 115.26 10.2816 115.26 19.6645C115.26 29.0474 122.901 36.6878 132.284 36.6878C141.667 36.6878 149.307 29.0474 149.307 19.6645C149.307 10.2816 141.667 2.64125 132.284 2.64125ZM132.284 0.407227C142.918 0.407227 151.541 9.03056 151.541 19.6645C151.541 30.2985 142.918 38.9218 132.284 38.9218C121.65 38.9218 113.026 30.2985 113.026 19.6645C113.026 9.03056 121.65 0.407227 132.284 0.407227Z" fill="#F9F297"/>
      <path d="M136.551 17.49C135.646 17.49 134.913 16.3898 134.913 15.0326C134.913 13.6754 135.646 12.5752 136.551 12.5752C137.456 12.5752 138.189 13.6754 138.189 15.0326C138.189 16.3898 137.456 17.49 136.551 17.49Z" fill="white"/>
      <path d="M127.989 17.49C127.084 17.49 126.35 16.3898 126.35 15.0326C126.35 13.6754 127.084 12.5752 127.989 12.5752C128.893 12.5752 129.627 13.6754 129.627 15.0326C129.627 16.3898 128.893 17.49 127.989 17.49Z" fill="white"/>
      <path d="M138.416 25.5475H131.967C126.963 25.5475 126.054 25.5475 126.054 25.5475" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
    </g>
    
    <g class="mtx-survey-item" data-value="4">
      <path d="M188.797 37.805C198.806 37.805 206.938 29.6731 206.938 19.6647C206.938 9.65626 198.806 1.52441 188.797 1.52441C178.789 1.52441 170.657 9.65626 170.657 19.6647C170.657 29.6731 178.789 37.805 188.797 37.805Z" fill="#A5CE3A"/>
      <path d="M188.797 2.64125C179.415 2.64125 171.774 10.2816 171.774 19.6645C171.774 29.0474 179.415 36.6878 188.797 36.6878C198.18 36.6878 205.821 29.0474 205.821 19.6645C205.821 10.2816 198.18 2.64125 188.797 2.64125ZM188.797 0.407227C199.431 0.407227 208.055 9.03056 208.055 19.6645C208.055 30.2985 199.431 38.9218 188.797 38.9218C178.163 38.9218 169.54 30.2985 169.54 19.6645C169.54 9.03056 178.163 0.407227 188.797 0.407227Z" fill="#D7E48A"/>
      <path d="M193.09 17.4898C192.185 17.4898 191.452 16.3896 191.452 15.0324C191.452 13.6752 192.185 12.575 193.09 12.575C193.995 12.575 194.729 13.6752 194.729 15.0324C194.729 16.3896 193.995 17.4898 193.09 17.4898Z" fill="white"/>
      <path d="M184.512 17.4898C183.607 17.4898 182.874 16.3896 182.874 15.0324C182.874 13.6752 183.607 12.575 184.512 12.575C185.417 12.575 186.15 13.6752 186.15 15.0324C186.15 16.3896 185.417 17.4898 184.512 17.4898Z" fill="white"/>
      <path d="M196.828 24.4751C196.828 24.4751 195.16 28.3325 188.473 28.3325C183.469 28.3325 180.758 24.4751 180.758 24.4751" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
    </g>
    
    <g class="mtx-survey-item" data-value="5">
      <path d="M245.311 37.8048C255.319 37.8048 263.451 29.673 263.451 19.6646C263.451 9.65614 255.319 1.52429 245.311 1.52429C235.302 1.52429 227.171 9.65614 227.171 19.6646C227.171 29.673 235.302 37.8048 245.311 37.8048Z" fill="#84C441"/>
      <path d="M245.311 2.64101C235.928 2.64101 228.288 10.2814 228.288 19.6643C228.288 29.0472 235.928 36.6875 245.311 36.6875C254.694 36.6875 262.334 29.0472 262.334 19.6643C262.334 10.2814 254.694 2.64101 245.311 2.64101ZM245.311 0.406982C255.945 0.406982 264.568 9.03031 264.568 19.6643C264.568 30.2982 255.945 38.9216 245.311 38.9216C234.677 38.9216 226.054 30.2982 226.054 19.6643C226.054 9.03031 234.677 0.406982 245.311 0.406982Z" fill="#C9DF86"/>
      <path d="M249.717 17.4898C248.812 17.4898 248.079 16.3896 248.079 15.0324C248.079 13.6752 248.812 12.575 249.717 12.575C250.622 12.575 251.355 13.6752 251.355 15.0324C251.355 16.3896 250.622 17.4898 249.717 17.4898Z" fill="white"/>
      <path d="M241.153 17.4898C240.248 17.4898 239.514 16.3896 239.514 15.0324C239.514 13.6752 240.248 12.575 241.153 12.575C242.058 12.575 242.791 13.6752 242.791 15.0324C242.791 16.3896 242.058 17.4898 241.153 17.4898Z" fill="white"/>
      <path d="M254.602 22.4196C254.602 22.4196 252.799 29.0918 245.561 29.0918C238.829 29.0918 236.014 22.4196 236.014 22.4196" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
    </g>
  </svg>
</div>
<div class="mtx-survey-submit-holder">
  <button type="button" class="mtx-survey-submit-button" disabled>Submit</button>
</div>`;
const SURVEY_SUCCESSFULLY_LOGGED = 'mtx-survey-successfully-logged';
const getSurveyLogs = () => {
    const result = localStorage.getItem(SURVEY_SUCCESSFULLY_LOGGED);
    if (result === null) {
        return {};
    }
    return JSON.parse(result);
};
const getIsSurveyLogged = (appkey) => {
    const logs = getSurveyLogs();
    return logs[appkey] !== undefined;
};
const setSurveyLogged = (appkey, rating) => {
    const logs = getSurveyLogs();
    logs[appkey] = rating;
    return localStorage.setItem(SURVEY_SUCCESSFULLY_LOGGED, JSON.stringify(logs));
};
let surveyHolder = document.createElement('div');
const hideSurvey = (holder) => {
    holder.classList.add('mtx-survey--close');
    setTimeout(() => document.body.contains(holder) && document.body.removeChild(holder), 350);
};
const addSurvey = ({ appkey, sessionId, force = false, theme = 'white' }) => {
    hideSurvey(surveyHolder);
    const isLogged = getIsSurveyLogged(appkey);
    /** Don't show the survey twice in automatic mode */
    if (isLogged && !force) {
        return;
    }
    surveyHolder = document.createElement('div');
    surveyHolder.setAttribute('class', `mtx-survey mtx-survey--${theme}`);
    surveyHolder.innerHTML = template;
    let rating = null;
    document.body.appendChild(surveyHolder);
    setTimeout(() => surveyHolder.classList.add('mtx-survey--open'), 0);
    const items = [...surveyHolder.querySelectorAll('.mtx-survey-item')];
    const submitButton = surveyHolder.querySelector('.mtx-survey-submit-button');
    const setActiveItem = (item) => {
        items.forEach(itemScore => {
            if (item !== itemScore) {
                itemScore.setAttribute('style', 'opacity: 0.6');
            }
            else {
                itemScore.setAttribute('style', 'opacity: 1');
            }
        });
    };
    const handleItemClick = (item) => {
        item.addEventListener('click', () => {
            rating = Number(item.getAttribute('data-value'));
            submitButton === null || submitButton === void 0 ? void 0 : submitButton.removeAttribute('disabled');
            setActiveItem(item);
        });
    };
    items.forEach(handleItemClick);
    submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        if (rating === null) {
            return;
        }
        hideSurvey(surveyHolder);
        try {
            yield (0,_services__WEBPACK_IMPORTED_MODULE_0__.sendMetricSurveysData)({
                appkey,
                sessionId,
                rating,
            });
            setSurveyLogged(appkey, rating);
        }
        catch (e) {
            console.log(e);
        }
    }));
};


/***/ }),

/***/ "./src/lib/mtx-poll-base.ts":
/*!**********************************!*\
  !*** ./src/lib/mtx-poll-base.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MetalitixLoggerBase)
/* harmony export */ });
/* harmony import */ var three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/src/math/MathUtils */ "./node_modules/three/src/math/MathUtils.js");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! platform */ "./node_modules/platform/platform.js");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./src/services/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./src/types/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _mtx_engagement_survey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mtx-engagement-survey */ "./src/lib/mtx-engagement-survey.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class MetalitixLoggerBase {
    constructor(appKey, options = {}) {
        this.interval = _constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_INTERVAL_VALUE;
        this.customData = {};
        this.object3D = null;
        this.setPollInterval = (pollInterval) => {
            this.interval = Math.min(_constants__WEBPACK_IMPORTED_MODULE_2__.MAX_INTERVAL_VALUE, Math.max(_constants__WEBPACK_IMPORTED_MODULE_2__.MIN_INTERVAL_VALUE, pollInterval));
        };
        this.updateFPS = () => {
            this.frames++;
            let time = Date.now();
            if (time >= this.prevFPSTime + 1000) {
                this.currentFPS = (this.frames * 1000) / (time - this.prevFPSTime);
                this.prevFPSTime = time;
                this.frames = 0;
            }
        };
        this.loopFPS = () => {
            this.loopFPSRequestId = requestAnimationFrame(() => {
                this.updateFPS();
                this.loopFPS();
            });
        };
        this.stopFPSLoop = () => {
            cancelAnimationFrame(this.loopFPSRequestId);
        };
        this.setCustomField = (key, value) => {
            this.customData[key] = value;
        };
        this.removeCustomField = (key) => {
            delete this.customData[key];
        };
        this.getRecord = (eventType, sessionId, { userEvent, userMeta, camera, data }) => {
            const resultData = Object.assign({}, this.customData, data);
            const base = {
                object: 'xr.analytics.record',
                appkey: this.appKey,
                apiver: this.apiVersion,
                sessionId,
                timestamp: Date.now(),
                metrics: {
                    fps: Math.round(this.currentFPS),
                },
                data: resultData,
                userMeta,
            };
            if (eventType === _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.EventTypes.SessionStart) {
                console.assert(camera !== undefined, '"camera" is required for session start!');
                return Object.assign({}, base, { eventType, camera });
            }
            if (eventType === _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.EventTypes.SessionUpdate) {
                return Object.assign({}, base, { eventType, camera });
            }
            if (eventType === _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.EventTypes.SessionEnd) {
                return Object.assign({}, base, { eventType, camera });
            }
            if (eventType === _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.EventTypes.UserPosition) {
                return Object.assign({}, base, { eventType });
            }
            if (eventType === _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.EventTypes.UserInteraction) {
                console.assert(userEvent !== undefined, '"userEvent" is required for user interaction!');
                return Object.assign({}, base, { eventType, userEvent });
            }
            throw new Error('Unknown eventType: ' + eventType);
        };
        this.addRecord = (eventType, { userEvent, userMeta, camera, data }) => {
            if (this.sessionId === null) {
                return;
            }
            const record = this.getRecord(eventType, this.sessionId, { userEvent, userMeta, camera, data });
            this.pollRecords.push(record);
        };
        this.sendPosition = (sendAll = false) => __awaiter(this, void 0, void 0, function* () {
            this.pollInProgress = true;
            try {
                const items = this.pollRecords.slice(0, _constants__WEBPACK_IMPORTED_MODULE_2__.MAXIMUM_BATCH_RECORDS_LENGTH);
                const batchRecordsData = {
                    object: 'xr.analytics.batch.records',
                    appkey: this.appKey,
                    apiver: this.apiVersion,
                    items,
                };
                yield (0,_services__WEBPACK_IMPORTED_MODULE_1__.sendXRAnalyticsData)(batchRecordsData);
                this.pollRecords = this.pollRecords.slice(_constants__WEBPACK_IMPORTED_MODULE_2__.MAXIMUM_BATCH_RECORDS_LENGTH);
                if (this.pollRecords.length > 0 && sendAll) {
                    yield this.sendPosition(true);
                }
                this.lastPollTimestamp = Date.now();
            }
            catch (error) {
                console.log('Something went wrong', error);
                this.forceStopLoop();
            }
            finally {
                this.pollInProgress = false;
            }
        });
        this.getUserMeta = () => {
            var _a, _b;
            return Object.assign({}, this.userMeta, {
                userAgent: window.navigator.userAgent,
                pagePath: location.pathname,
                pageQuery: location.search,
                systemInfo: {
                    deviceName: (platform__WEBPACK_IMPORTED_MODULE_0___default().product),
                    deviceType: _utils__WEBPACK_IMPORTED_MODULE_4__.deviceType,
                    operatingSystemName: (_a = (platform__WEBPACK_IMPORTED_MODULE_0___default().os)) === null || _a === void 0 ? void 0 : _a.family,
                    operatingSystemVersion: (_b = (platform__WEBPACK_IMPORTED_MODULE_0___default().os)) === null || _b === void 0 ? void 0 : _b.version,
                },
            });
        };
        this.addSessionStart = () => {
            const data = this.getPositionData(this.object3D);
            const camera = this.getCameraData(this.object3D);
            const userMeta = this.getUserMeta();
            this.previousCameraData = camera || null;
            if (data === undefined) {
                return;
            }
            this.addRecord(_types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.EventTypes.SessionStart, { data, camera, userMeta });
        };
        this.addSessionEnd = () => {
            const data = this.getPositionData(this.object3D);
            const userMeta = this.getUserMeta();
            let camera = this.getCameraData(this.object3D);
            if (data === undefined) {
                return;
            }
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.deepEqual)(camera, this.previousCameraData)) {
                /** Don't send the camera object if it was not changed */
                camera = undefined;
            }
            this.addRecord(_types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.EventTypes.SessionEnd, { data, userMeta, camera });
        };
        this.addUserPosition = () => {
            const data = this.getPositionData(this.object3D);
            const userMeta = this.getUserMeta();
            if (data === undefined) {
                return;
            }
            this.addRecord(_types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.EventTypes.UserPosition, { data, userMeta });
        };
        this.addSessionUpdate = (camera) => {
            const data = this.getPositionData(this.object3D);
            const userMeta = this.getUserMeta();
            if (data === undefined) {
                return;
            }
            this.addRecord(_types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.EventTypes.SessionUpdate, { data, camera, userMeta });
        };
        this.sddNextUserPositionAndUpdateCameraIfNeeded = () => {
            const camera = this.getCameraData(this.object3D);
            if (camera === undefined || (0,_utils__WEBPACK_IMPORTED_MODULE_4__.deepEqual)(camera, this.previousCameraData)) {
                this.addUserPosition();
            }
            else {
                this.addSessionUpdate(camera);
                this.previousCameraData = camera;
            }
        };
        this.sendPositionLoop = (start = false) => {
            /** Don't push position twice on session start */
            if (!start) {
                this.sddNextUserPositionAndUpdateCameraIfNeeded();
            }
            if (!this.pollInProgress &&
                this.pollRecords.length > 0 &&
                (this.pollRecords.length >= _constants__WEBPACK_IMPORTED_MODULE_2__.MAXIMUM_BATCH_RECORDS_LENGTH ||
                    Date.now() - this.lastPollTimestamp >= _constants__WEBPACK_IMPORTED_MODULE_2__.MAXIMUM_BATCH_SENDING_INTERVAL)) {
                this.sendPosition();
            }
            /** Stop polling data if session was ended and there is nothing to send */
            if (this.sessionId === null && this.pollRecords.length === 0) {
                return;
            }
            this.nextPoll = window.setTimeout(() => this.sendPositionLoop(), this.interval);
        };
        this.forceStopLoop = () => clearTimeout(this.nextPoll);
        this.clearSessionPollRecords = () => {
            this.pollRecords = [];
        };
        this.handleVisibilityChange = () => __awaiter(this, void 0, void 0, function* () {
            /**
             *  If user close or switch the browser tab - we need to pause the session
             *  Then if user came back to the browser - we need to try to resume the session if it's possible or start new one
             **/
            return document.visibilityState === 'hidden' ? this.pauseSession() : yield this.resumeSession();
        });
        this.startSession = (object3D) => {
            this.object3D = object3D;
            const sessionId = (0,three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_6__.generateUUID)();
            this.sessionId = sessionId;
            this.addSessionStart();
            this.sendPositionLoop(true);
            document.addEventListener('visibilitychange', this.handleVisibilityChange);
            this.loopFPS();
            if (this.showSurveyAutomatically) {
                this.surveyTimer = window.setTimeout(() => (0,_mtx_engagement_survey__WEBPACK_IMPORTED_MODULE_5__.addSurvey)({ appkey: this.appKey, sessionId, theme: this.surveyTheme }), this.autoSurveyShowInMs);
            }
        };
        this.pauseSession = () => {
            /** If the session was paused we need to send all our data and stop collecting new items */
            this.forceStopLoop();
            return this.sendPosition(true);
        };
        this.resumeSession = () => __awaiter(this, void 0, void 0, function* () {
            if (this.lastPollTimestamp < 0 || Date.now() - this.lastPollTimestamp <= _constants__WEBPACK_IMPORTED_MODULE_2__.MAXIMUM_SESSION_KEEPALIVE_TIME) {
                /** If the session was resumed on time - we need to continue collect current session data */
                this.forceStopLoop(); // in case if session was not paused
                this.sendPositionLoop();
            }
            else if (this.object3D !== null) {
                /** If the session was resumed when server already has closed the session - we need to start new session */
                const object3D = this.object3D;
                yield this.endSession();
                this.startSession(object3D);
            }
        });
        this.endSession = () => __awaiter(this, void 0, void 0, function* () {
            if (this.sessionId === null) {
                /** The session was already ended */
                return;
            }
            this.addSessionEnd();
            this.object3D = null;
            this.sessionId = null;
            this.previousCameraData = null;
            this.forceStopLoop();
            this.stopFPSLoop();
            yield this.sendPosition(true);
            this.clearSessionPollRecords();
            this.lastPollTimestamp = -1;
            document.removeEventListener('visibilitychange', this.handleVisibilityChange);
        });
        this.updateUserMeta = (userMeta) => {
            if (userMeta === undefined) {
                return;
            }
            this.userMeta = userMeta;
            this.addSessionUpdate();
        };
        this.sendUserEvent = (eventName, eventType, target, points, params) => {
            const data = this.getPositionData(this.object3D);
            const userEvent = {
                object: 'user.event',
                eventName,
                eventType,
                target,
                points,
                params,
            };
            const userMeta = this.getUserMeta();
            if (data === undefined) {
                return;
            }
            this.addRecord(_types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.EventTypes.UserInteraction, { data, userMeta, userEvent });
        };
        this.logCustomEvent = (eventName, params) => {
            this.sendUserEvent(eventName, 'custom', undefined, undefined, params);
        };
        this.logKeyDownEvent = (x, y, params) => {
            this.sendUserEvent('key_down', _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.UserInteractionTypes.KeyDown, {
                state: _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.PointStates.Pressed,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logKeyPressEvent = (x, y, params) => {
            this.sendUserEvent('key_press', _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.UserInteractionTypes.KeyPress, {
                state: _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.PointStates.Stationary,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logKeyUpEvent = (x, y, params) => {
            this.sendUserEvent('key_up', _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.UserInteractionTypes.KeyUp, {
                state: _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.PointStates.Released,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logMouseEnterEvent = (x, y, params) => {
            this.sendUserEvent('mouse_enter', _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.UserInteractionTypes.MouseEnter, {
                state: _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.PointStates.Stationary,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logMouseLeaveEvent = (x, y, params) => {
            this.sendUserEvent('mouse_leave', _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.UserInteractionTypes.MouseLeave, {
                state: _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.PointStates.Stationary,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logMouseOverEvent = (x, y, params) => {
            this.sendUserEvent('mouse_over', _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.UserInteractionTypes.MouseOver, {
                state: _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.PointStates.Stationary,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logMouseOutEvent = (x, y, params) => {
            this.sendUserEvent('mouse_out', _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.UserInteractionTypes.MouseOut, {
                state: _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.PointStates.Stationary,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logMouseDownEvent = (x, y, params) => {
            this.sendUserEvent('mouse_down', _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.UserInteractionTypes.MouseDown, {
                state: _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.PointStates.Pressed,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logMouseUpEvent = (x, y, params) => {
            this.sendUserEvent('mouse_up', _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.UserInteractionTypes.MouseUp, {
                state: _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.PointStates.Released,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logMouseMoveEvent = (x, y, params) => {
            this.sendUserEvent('mouse_move', _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.UserInteractionTypes.MouseMove, {
                state: _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.PointStates.Updated,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logMousePressEvent = (x, y, params) => {
            this.sendUserEvent('mouse_press', _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.UserInteractionTypes.MousePress, {
                state: _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.PointStates.Stationary,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logTouchTapEvent = (x, y, params) => {
            this.sendUserEvent('touch_tap', _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.UserInteractionTypes.TouchTap, {
                state: _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.PointStates.Stationary,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logTouchStartEvent = (x, y, params) => {
            this.sendUserEvent('touch_start', _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.UserInteractionTypes.TouchStart, {
                state: _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.PointStates.Pressed,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logTouchMoveEvent = (x, y, params) => {
            this.sendUserEvent('touch_move', _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.UserInteractionTypes.TouchMove, {
                state: _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.PointStates.Updated,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logTouchEndEvent = (x, y, params) => {
            this.sendUserEvent('touch_end', _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.UserInteractionTypes.TouchEnd, {
                state: _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.PointStates.Released,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logZoomStartEvent = (x, y, params) => {
            this.sendUserEvent('zoom_start', _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.UserInteractionTypes.ZoomStart, {
                state: _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.PointStates.Pressed,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logZoomUpdateEvent = (x, y, params) => {
            this.sendUserEvent('zoom_update', _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.UserInteractionTypes.ZoomUpdate, {
                state: _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.PointStates.Updated,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logZoomEndEvent = (x, y, params) => {
            this.sendUserEvent('zoom_end', _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.UserInteractionTypes.ZoomEnd, {
                state: _types__WEBPACK_IMPORTED_MODULE_3__.XRAnalytics.PointStates.Released,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.showSurvey = (surveyTheme) => {
            clearTimeout(this.surveyTimer);
            if (this.sessionId === null) {
                return;
            }
            (0,_mtx_engagement_survey__WEBPACK_IMPORTED_MODULE_5__.addSurvey)({ appkey: this.appKey, sessionId: this.sessionId, theme: surveyTheme !== null && surveyTheme !== void 0 ? surveyTheme : this.surveyTheme, force: true });
        };
        const { pollInterval = _constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_INTERVAL_VALUE, apiVersion = 'v2', userMeta = {}, showSurvey = false, surveyTheme, } = options;
        this.appKey = appKey;
        this.apiVersion = apiVersion;
        this.userMeta = userMeta;
        this.setPollInterval(pollInterval);
        this.sessionId = null;
        this.previousCameraData = null;
        this.pollRecords = [];
        this.lastPollTimestamp = -1;
        this.pollInProgress = false;
        this.nextPoll = -1;
        this.pollInProgress = false;
        this.showSurveyAutomatically = showSurvey;
        this.surveyTheme = surveyTheme;
        /** Show survey automatically in range between 30 seconds and 3 minutes */
        this.autoSurveyShowInMs = (30 + 150 * Math.random()) * 1000;
        this.surveyTimer = -1;
        this.prevFPSTime = Date.now();
        this.frames = 0;
        this.currentFPS = 0;
        this.loopFPSRequestId = -1;
    }
}


/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendMetricSurveysData": () => (/* binding */ sendMetricSurveysData),
/* harmony export */   "sendXRAnalyticsData": () => (/* binding */ sendXRAnalyticsData)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function sendXRAnalyticsData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('poll', data);
        return fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL}/xr-analytics`, {
            method: 'POST',
            keepalive: true,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
    });
}
function sendMetricSurveysData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('survey data', data);
        return fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.API_ORIGIN}/api/v1/metric-surveys`, {
            method: 'POST',
            keepalive: true,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
    });
}


/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XRAnalytics": () => (/* binding */ XRAnalytics)
/* harmony export */ });
var XRAnalytics;
(function (XRAnalytics) {
    let PointStates;
    (function (PointStates) {
        PointStates["Pressed"] = "state.pressed";
        PointStates["Updated"] = "state.updated";
        PointStates["Released"] = "state.released";
        PointStates["Stationary"] = "state.stationary";
    })(PointStates = XRAnalytics.PointStates || (XRAnalytics.PointStates = {}));
    XRAnalytics.KnownPointStates = Object.values(PointStates);
    let UserInteractionTypes;
    (function (UserInteractionTypes) {
        UserInteractionTypes["KeyDown"] = "user.interaction.key_down";
        UserInteractionTypes["KeyPress"] = "user.interaction.key_press";
        UserInteractionTypes["KeyUp"] = "user.interaction.key_down";
        UserInteractionTypes["MouseEnter"] = "user.interaction.mouse_enter";
        UserInteractionTypes["MouseLeave"] = "user.interaction.mouse_leave";
        UserInteractionTypes["MouseOver"] = "user.interaction.mouse_over";
        UserInteractionTypes["MouseOut"] = "user.interaction.mouse_out";
        UserInteractionTypes["MouseDown"] = "user.interaction.mouse_down";
        UserInteractionTypes["MouseUp"] = "user.interaction.mouse_up";
        UserInteractionTypes["MouseMove"] = "user.interaction.mouse_move";
        UserInteractionTypes["MousePress"] = "user.interaction.mouse_press";
        UserInteractionTypes["TouchTap"] = "user.interaction.touch_tap";
        UserInteractionTypes["TouchStart"] = "user.interaction.touch_start";
        UserInteractionTypes["TouchMove"] = "user.interaction.touch_move";
        UserInteractionTypes["TouchEnd"] = "user.interaction.touch_end";
        UserInteractionTypes["ZoomStart"] = "user.interaction.zoom_start";
        UserInteractionTypes["ZoomUpdate"] = "user.interaction.zoom_update";
        UserInteractionTypes["ZoomEnd"] = "user.interaction.zoom_end";
    })(UserInteractionTypes = XRAnalytics.UserInteractionTypes || (XRAnalytics.UserInteractionTypes = {}));
    XRAnalytics.KnownUserInteractionTypes = Object.values(UserInteractionTypes);
    let EventTypes;
    (function (EventTypes) {
        EventTypes["UserPosition"] = "event.user.position";
        EventTypes["UserInteraction"] = "event.user.interaction";
        EventTypes["SessionStart"] = "event.session.start";
        EventTypes["SessionUpdate"] = "event.session.update";
        EventTypes["SessionEnd"] = "event.session.end";
    })(EventTypes = XRAnalytics.EventTypes || (XRAnalytics.EventTypes = {}));
    XRAnalytics.KnownEventTypes = Object.values(EventTypes);
})(XRAnalytics || (XRAnalytics = {}));


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepEqual": () => (/* binding */ deepEqual),
/* harmony export */   "deviceType": () => (/* binding */ deviceType),
/* harmony export */   "isMobile": () => (/* binding */ isMobile),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isTablet": () => (/* binding */ isTablet),
/* harmony export */   "mergeDeep": () => (/* binding */ mergeDeep),
/* harmony export */   "userAgent": () => (/* binding */ userAgent)
/* harmony export */ });
function deepEqual(x, y) {
    const ok = Object.keys;
    const tx = typeof x;
    const ty = typeof y;
    return x && y && tx === 'object' && tx === ty
        ? ok(x).length === ok(y).length && ok(x).every(key => deepEqual(x[key], y[key]))
        : x === y;
}
function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
function mergeDeep(target, source) {
    let output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in target))
                    Object.assign(output, { [key]: source[key] });
                else
                    output[key] = mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    return output;
}
const userAgent = window.navigator.userAgent;
const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(userAgent);
const isMobile = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(userAgent);
const deviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************************!*\
  !*** ./src/lib/mtx-poll-babylon-js.ts ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MetalitixLogger)
/* harmony export */ });
/* harmony import */ var _mtx_poll_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mtx-poll-base */ "./src/lib/mtx-poll-base.ts");

class MetalitixLogger extends _mtx_poll_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(appKey, options = {}) {
        super(appKey, options);
        this.getPositionData = (scene) => {
            var _a;
            const camera = (_a = scene === null || scene === void 0 ? void 0 : scene.activeCamera) !== null && _a !== void 0 ? _a : null;
            if (camera === null) {
                return undefined;
            }
            const euler = camera.absoluteRotation.toEulerAngles().normalize();
            return {
                position: { x: camera.position.x, y: camera.position.y, z: camera.position.z },
                direction: { x: euler.x, y: euler.y * -1, z: euler.z },
            };
        };
        this.getCameraData = (scene) => {
            var _a;
            const camera = (_a = scene === null || scene === void 0 ? void 0 : scene.activeCamera) !== null && _a !== void 0 ? _a : null;
            if (camera === null) {
                return undefined;
            }
            return {
                fieldOfView: camera.fov,
                aspectRatio: camera.viewport.width / camera.viewport.height,
                zNearPlane: camera.minZ,
                zFarPlane: camera.maxZ,
            };
        };
    }
}

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=mtx-poll-babylon-js.js.map