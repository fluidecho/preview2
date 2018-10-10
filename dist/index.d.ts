export interface Log {
    (arg1: any, arg2?: undefined | any, print?: boolean): void;
}
export declare function preview(caller: string): Log;
