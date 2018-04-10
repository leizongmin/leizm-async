"use strict";
/**
 * @leizm/async
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * forEach 对数组的每个元素执行一次提供的函数
 */
async function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        await callback(array[i], i, array);
    }
}
exports.forEach = forEach;
/**
 * map 返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组
 */
async function map(array, callback) {
    const ret = [];
    for (let i = 0; i < array.length; i++) {
        const item = await callback(array[i], i, array);
        ret[i] = item;
    }
    return ret;
}
exports.map = map;
/**
 * reduce 对累加器和数组的每个值应用一个函数 (从左到右)，以将其减少为单个值
 */
async function reduce(array, callback) {
    let ret = array[0];
    for (let i = 1; i < array.length; i++) {
        ret = await callback(ret, array[i], i, array);
    }
    return ret;
}
exports.reduce = reduce;
/**
 * reduceRight 接受一个函数作为累加器（accumulator），让每个值（从右到左，亦即从尾到头）缩减为一个值。（与 reduce() 的执行方向相反）
 */
async function reduceRight(array, callback) {
    let ret = array[array.length - 1];
    for (let i = array.length - 2; i >= 0; i--) {
        ret = await callback(ret, array[i], i, array);
    }
    return ret;
}
exports.reduceRight = reduceRight;
/**
 * filter 遍历数组并返回符合条件的新数组
 */
async function filter(array, callback) {
    const ret = [];
    for (let i = 0; i < array.length; i++) {
        const passed = await callback(array[i], i, array);
        if (passed) {
            ret.push(array[i]);
        }
    }
    return ret;
}
exports.filter = filter;
/**
 * every 测试数组的所有元素是否都通过了指定函数的测试
 */
async function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const passed = await callback(array[i], i, array);
        if (!passed) {
            return false;
        }
    }
    return true;
}
exports.every = every;
/**
 * some 测试数组中的某些元素是否通过了指定函数的测试
 */
async function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const passed = await callback(array[i], i, array);
        if (passed) {
            return true;
        }
    }
    return false;
}
exports.some = some;
/**
 * find 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
 */
async function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const passed = await callback(array[i], i, array);
        if (passed) {
            return array[i];
        }
    }
}
exports.find = find;
/**
 * findIndex 返回数组中满足提供的测试函数的第一个元素的索引。否则返回 -1
 */
async function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const passed = await callback(array[i], i, array);
        if (passed) {
            return i;
        }
    }
    return -1;
}
exports.findIndex = findIndex;
function array(array) {
    return new ArrayAsync(array);
}
exports.array = array;
class ArrayAsync {
    constructor(array) {
        this.array = array;
    }
    /**
     * forEach 对数组的每个元素执行一次提供的函数
     */
    async forEach(callback) {
        return forEach(this.array, callback);
    }
    /**
     * map 返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组
     */
    async map(callback) {
        return map(this.array, callback);
    }
    /**
     * reduce 对累加器和数组的每个值应用一个函数 (从左到右)，以将其减少为单个值
     */
    async reduce(callback) {
        return reduce(this.array, callback);
    }
    /**
     * reduceRight 接受一个函数作为累加器（accumulator），让每个值（从右到左，亦即从尾到头）缩减为一个值。（与 reduce() 的执行方向相反）
     */
    async reduceRight(callback) {
        return reduceRight(this.array, callback);
    }
    /**
     * filter 遍历数组并返回符合条件的新数组
     */
    async filter(callback) {
        return filter(this.array, callback);
    }
    /**
     * every 测试数组的所有元素是否都通过了指定函数的测试
     */
    async every(callback) {
        return every(this.array, callback);
    }
    /**
     * some 测试数组中的某些元素是否通过了指定函数的测试
     */
    async some(callback) {
        return some(this.array, callback);
    }
    /**
     * find 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
     */
    async find(callback) {
        return find(this.array, callback);
    }
    /**
     * findIndex 返回数组中满足提供的测试函数的第一个元素的索引。否则返回 -1
     */
    async findIndex(callback) {
        return findIndex(this.array, callback);
    }
}
exports.ArrayAsync = ArrayAsync;
//# sourceMappingURL=index.js.map