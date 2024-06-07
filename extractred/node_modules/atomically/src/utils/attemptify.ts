
/* IMPORT */

import {NOOP} from '../consts';
import {Exception, FN} from '../types';

/* ATTEMPTIFY */

//TODO: Maybe publish this as a standalone package
//FIXME: The type castings here aren't exactly correct

const attemptifyAsync = <T extends FN> ( fn: T, onError: FN<[Exception]> = NOOP ): T => {

  return function () {

    return fn.apply ( undefined, arguments ).catch ( onError );

  } as T;

};

const attemptifySync = <T extends FN> ( fn: T, onError: FN<[Exception]> = NOOP ): T => {

  return function () {

    try {

      return fn.apply ( undefined, arguments );

    } catch ( error ) {

      return onError ( error );

    }

  } as T;

};

/* EXPORT */

export {attemptifyAsync, attemptifySync};
