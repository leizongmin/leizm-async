/**
 * @leizm/async
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */
export interface ForEachCallback {
    (item: any, index: number, array: any[]): Promise<void>;
}
export interface MapCallback {
    (item: any, index: number, array: any[]): Promise<any>;
}
export interface ReduceCallback {
    (previousValue: any, currentValue: any, index: number, array: any[]): Promise<any>;
}
export interface BinaryCallback {
    (item: any, index: number, array: any[]): Promise<boolean>;
}
/**
 * forEach 对数组的每个元素执行一次提供的函数
 */
export declare function forEach(array: any[], callback: ForEachCallback): Promise<void>;
/**
 * map 返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组
 */
export declare function map(array: any[], callback: MapCallback): Promise<any[]>;
/**
 * reduce 对累加器和数组的每个值应用一个函数 (从左到右)，以将其减少为单个值
 */
export declare function reduce(array: any[], callback: ReduceCallback): Promise<any>;
/**
 * reduceRight 接受一个函数作为累加器（accumulator），让每个值（从右到左，亦即从尾到头）缩减为一个值。（与 reduce() 的执行方向相反）
 */
export declare function reduceRight(array: any[], callback: ReduceCallback): Promise<any>;
/**
 * filter 遍历数组并返回符合条件的新数组
 */
export declare function filter(array: any[], callback: BinaryCallback): Promise<any[]>;
/**
 * every 测试数组的所有元素是否都通过了指定函数的测试
 */
export declare function every(array: any[], callback: BinaryCallback): Promise<boolean>;
/**
 * some 测试数组中的某些元素是否通过了指定函数的测试
 */
export declare function some(array: any[], callback: BinaryCallback): Promise<boolean>;
/**
 * find 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
 */
export declare function find(array: any[], callback: BinaryCallback): Promise<any>;
/**
 * findIndex 返回数组中满足提供的测试函数的第一个元素的索引。否则返回 -1
 */
export declare function findIndex(array: any[], callback: BinaryCallback): Promise<number>;
export declare function array(array: any[]): ArrayAsync;
export declare class ArrayAsync {
    protected readonly array: any[];
    constructor(array: any[]);
    /**
     * forEach 对数组的每个元素执行一次提供的函数
     */
    forEach(callback: ForEachCallback): Promise<void>;
    /**
     * map 返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组
     */
    map(callback: MapCallback): Promise<any[]>;
    /**
     * reduce 对累加器和数组的每个值应用一个函数 (从左到右)，以将其减少为单个值
     */
    reduce(callback: ReduceCallback): Promise<any>;
    /**
     * reduceRight 接受一个函数作为累加器（accumulator），让每个值（从右到左，亦即从尾到头）缩减为一个值。（与 reduce() 的执行方向相反）
     */
    reduceRight(callback: ReduceCallback): Promise<any>;
    /**
     * filter 遍历数组并返回符合条件的新数组
     */
    filter(callback: BinaryCallback): Promise<any[]>;
    /**
     * every 测试数组的所有元素是否都通过了指定函数的测试
     */
    every(callback: BinaryCallback): Promise<boolean>;
    /**
     * some 测试数组中的某些元素是否通过了指定函数的测试
     */
    some(callback: BinaryCallback): Promise<boolean>;
    /**
     * find 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
     */
    find(callback: BinaryCallback): Promise<any>;
    /**
     * findIndex 返回数组中满足提供的测试函数的第一个元素的索引。否则返回 -1
     */
    findIndex(callback: BinaryCallback): Promise<number>;
}
