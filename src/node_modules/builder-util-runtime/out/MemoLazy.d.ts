export declare class MemoLazy<S, V> {
    private selector;
    private creator;
    private selected;
    private _value;
    constructor(selector: () => S, creator: (selected: S) => Promise<V>);
    get hasValue(): boolean;
    get value(): Promise<V>;
    set value(value: Promise<V>);
}
