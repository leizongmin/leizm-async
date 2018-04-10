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
export async function forEach(array: any[], callback: ForEachCallback): Promise<void> {
  for (let i = 0; i < array.length; i++) {
    await callback(array[i], i, array);
  }
}

/**
 * map 返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组
 */
export async function map(array: any[], callback: MapCallback): Promise<any[]> {
  const ret = [];
  for (let i = 0; i < array.length; i++) {
    const item = await callback(array[i], i, array);
    ret[i] = item;
  }
  return ret;
}

/**
 * reduce 对累加器和数组的每个值应用一个函数 (从左到右)，以将其减少为单个值
 */
export async function reduce(array: any[], callback: ReduceCallback): Promise<any> {
  let ret = array[0];
  for (let i = 1; i < array.length; i++) {
    ret = await callback(ret, array[i], i, array);
  }
  return ret;
}

/**
 * reduceRight 接受一个函数作为累加器（accumulator），让每个值（从右到左，亦即从尾到头）缩减为一个值。（与 reduce() 的执行方向相反）
 */
export async function reduceRight(array: any[], callback: ReduceCallback): Promise<any> {
  let ret = array[array.length - 1];
  for (let i = array.length - 2; i >= 0; i--) {
    ret = await callback(ret, array[i], i, array);
  }
  return ret;
}

/**
 * filter 遍历数组并返回符合条件的新数组
 */
export async function filter(array: any[], callback: BinaryCallback): Promise<any[]> {
  const ret = [];
  for (let i = 0; i < array.length; i++) {
    const passed = await callback(array[i], i, array);
    if (passed) {
      ret.push(array[i]);
    }
  }
  return ret;
}

/**
 * every 测试数组的所有元素是否都通过了指定函数的测试
 */
export async function every(array: any[], callback: BinaryCallback): Promise<boolean> {
  for (let i = 0; i < array.length; i++) {
    const passed = await callback(array[i], i, array);
    if (!passed) {
      return false;
    }
  }
  return true;
}

/**
 * some 测试数组中的某些元素是否通过了指定函数的测试
 */
export async function some(array: any[], callback: BinaryCallback): Promise<boolean> {
  for (let i = 0; i < array.length; i++) {
    const passed = await callback(array[i], i, array);
    if (passed) {
      return true;
    }
  }
  return false;
}

/**
 * find 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
 */
export async function find(array: any[], callback: BinaryCallback): Promise<any> {
  for (let i = 0; i < array.length; i++) {
    const passed = await callback(array[i], i, array);
    if (passed) {
      return array[i];
    }
  }
}

/**
 * findIndex 返回数组中满足提供的测试函数的第一个元素的索引。否则返回 -1
 */
export async function findIndex(array: any[], callback: BinaryCallback): Promise<number> {
  for (let i = 0; i < array.length; i++) {
    const passed = await callback(array[i], i, array);
    if (passed) {
      return i;
    }
  }
  return -1;
}

export function array(array: any[]): ArrayAsync {
  return new ArrayAsync(array);
}

export class ArrayAsync {

  constructor(protected readonly array: any[]) {}

  /**
   * forEach 对数组的每个元素执行一次提供的函数
   */
  async forEach(callback: ForEachCallback): Promise<void> {
    return forEach(this.array, callback);
  }

  /**
   * map 返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组
   */
  async map(callback: MapCallback): Promise<any[]> {
    return map(this.array, callback);
  }

  /**
   * reduce 对累加器和数组的每个值应用一个函数 (从左到右)，以将其减少为单个值
   */
  async reduce(callback: ReduceCallback): Promise<any> {
    return reduce(this.array, callback);
  }

  /**
   * reduceRight 接受一个函数作为累加器（accumulator），让每个值（从右到左，亦即从尾到头）缩减为一个值。（与 reduce() 的执行方向相反）
   */
  async reduceRight(callback: ReduceCallback): Promise<any> {
    return reduceRight(this.array, callback);
  }

  /**
   * filter 遍历数组并返回符合条件的新数组
   */
  async filter(callback: BinaryCallback): Promise<any[]> {
    return filter(this.array, callback);
  }

  /**
   * every 测试数组的所有元素是否都通过了指定函数的测试
   */
  async every(callback: BinaryCallback): Promise<boolean> {
    return every(this.array, callback);
  }

  /**
   * some 测试数组中的某些元素是否通过了指定函数的测试
   */
  async some(callback: BinaryCallback): Promise<boolean> {
    return some(this.array, callback);
  }

  /**
   * find 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
   */
  async find(callback: BinaryCallback): Promise<any> {
    return find(this.array, callback);
  }

  /**
   * findIndex 返回数组中满足提供的测试函数的第一个元素的索引。否则返回 -1
   */
  async findIndex(callback: BinaryCallback): Promise<number> {
    return findIndex(this.array, callback);
  }

}