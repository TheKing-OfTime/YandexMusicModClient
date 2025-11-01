export declare function retry<T>(task: () => Promise<T>, retryCount: number, interval: number, backoff?: number, attempt?: number, shouldRetry?: (e: any) => boolean): Promise<T>;
