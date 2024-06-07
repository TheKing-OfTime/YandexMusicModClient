
/* TYPES */

type Callback = ( error: Exception | void ) => any;

type Data = Buffer | string | undefined;

type Disposer = () => void;

type Exception = NodeJS.ErrnoException;

type FN<Arguments extends any[] = any[], Return = any> = ( ...args: Arguments ) => Return;

type Path = string;

type ReadOptions = {
  encoding?: string | null,
  mode?: string | number | false,
  timeout?: number
};

type WriteOptions = {
  chown?: { gid: number, uid: number } | false,
  encoding?: string | null,
  fsync?: boolean,
  fsyncWait?: boolean,
  mode?: string | number | false,
  schedule?: ( filePath: string ) => Promise<Disposer>,
  timeout?: number,
  tmpCreate?: ( filePath: string ) => string,
  tmpCreated?: ( filePath: string ) => any,
  tmpPurge?: boolean
};

/* EXPORT */

export {Callback, Data, Disposer, Exception, FN, Path, ReadOptions, WriteOptions};
