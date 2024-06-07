
/* IMPORT */

import {LIMIT_FILES_DESCRIPTORS} from '../consts';

/* RETRYIFY QUEUE */

const RetryfyQueue = {

  interval: 25,
  intervalId: <NodeJS.Timeout | undefined> undefined,
  limit: LIMIT_FILES_DESCRIPTORS,
  queueActive: new Set<Function> (),
  queueWaiting: new Set<Function> (),

  init: (): void => {

    if ( RetryfyQueue.intervalId ) return;

    RetryfyQueue.intervalId = setInterval ( RetryfyQueue.tick, RetryfyQueue.interval );

  },

  reset: (): void => {

    if ( !RetryfyQueue.intervalId ) return;

    clearInterval ( RetryfyQueue.intervalId );

    delete RetryfyQueue.intervalId;

  },

  add: ( fn: Function ): void => {

    RetryfyQueue.queueWaiting.add ( fn );

    if ( RetryfyQueue.queueActive.size < ( RetryfyQueue.limit / 2 ) ) { // Active queue not under preassure, executing immediately

      RetryfyQueue.tick ();

    } else {

      RetryfyQueue.init ();

    }

  },

  remove: ( fn: Function ): void => {

    RetryfyQueue.queueWaiting.delete ( fn );

    RetryfyQueue.queueActive.delete ( fn );

  },

  schedule: (): Promise<Function> => {

    return new Promise ( resolve => {

      const cleanup = () => RetryfyQueue.remove ( resolver );

      const resolver = () => resolve ( cleanup );

      RetryfyQueue.add ( resolver );

    });

  },

  tick: (): void => {

    if ( RetryfyQueue.queueActive.size >= RetryfyQueue.limit ) return;

    if ( !RetryfyQueue.queueWaiting.size ) return RetryfyQueue.reset ();

    for ( const fn of RetryfyQueue.queueWaiting ) {

      if ( RetryfyQueue.queueActive.size >= RetryfyQueue.limit ) break;

      RetryfyQueue.queueWaiting.delete ( fn );
      RetryfyQueue.queueActive.add ( fn );

      fn ();

    }

  }

};

/* EXPORT */

export default RetryfyQueue;
