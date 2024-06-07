
/* LANG */

const Lang = {

  isFunction: ( x: any ): x is Function => {

    return typeof x === 'function';

  },

  isString: ( x: any ): x is string => {

    return typeof x === 'string';

  },

  isUndefined: ( x: any ): x is undefined => {

    return typeof x === 'undefined';

  }

};

/* EXPORT */

export default Lang;
