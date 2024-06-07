
/* IMPORT */

import {Exception, FN} from '../types';
import RetryfyQueue from './retryify_queue';

/* RETRYIFY */

const retryifyAsync = <T extends FN> ( fn: T, isRetriableError: FN<[Exception], boolean | void> ): FN<[number], T> => {

  return function ( timestamp: number ) {

    return function attempt () {

      return RetryfyQueue.schedule ().then ( cleanup => {

        return fn.apply ( undefined, arguments ).then ( result => {

          cleanup ();

          return result;

        }, error => {

          cleanup ();

          if ( Date.now () >= timestamp ) throw error;

          if ( isRetriableError ( error ) ) {

            const delay = Math.round ( 100 + ( 400 * Math.random () ) ),
                  delayPromise = new Promise ( resolve => setTimeout ( resolve, delay ) );

            return delayPromise.then ( () => attempt.apply ( undefined, arguments ) );

          }

          throw error;

        });

      });

    } as T;

  };

};

const retryifySync = <T extends FN> ( fn: T, isRetriableError: FN<[Exception], boolean | void> ): FN<[number], T> => {

  return function ( timestamp: number ) {

    return function attempt () {

      try {

        return fn.apply ( undefined, arguments );

      } catch ( error ) {

        if ( Date.now () > timestamp ) throw error;

        if ( isRetriableError ( error ) ) return attempt.apply ( undefined, arguments );

        throw error;

      }

    } as T;

  };

};

/* EXPORT */

export {retryifyAsync, retryifySync};
