
/* IMPORT */

import {IS_USER_ROOT} from '../consts';
import {Exception} from '../types';

/* FS HANDLERS */

const Handlers = {

  isChangeErrorOk: ( error: Exception ): boolean => { //URL: https://github.com/isaacs/node-graceful-fs/blob/master/polyfills.js#L315-L342

    const {code} = error;

    if ( code === 'ENOSYS' ) return true;

    if ( !IS_USER_ROOT && ( code === 'EINVAL' || code === 'EPERM' ) ) return true;

    return false;

  },

  isRetriableError: ( error: Exception ): boolean => {

    const {code} = error;

    if ( code === 'EMFILE' || code === 'ENFILE' || code === 'EAGAIN' || code === 'EBUSY' || code === 'EACCESS' || code === 'EACCS' || code === 'EPERM' ) return true;

    return false;

  },

  onChangeError: ( error: Exception ): void => {

    if ( Handlers.isChangeErrorOk ( error ) ) return;

    throw error;

  }

};

/* EXPORT */

export default Handlers;
