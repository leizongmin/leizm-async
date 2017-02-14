# lei-async
基于 async function 的数组相关操作异步库

## 安装

```bash
$ npm install lei-async --save
```

## 使用方法

```javascript
(async function () {

  // forEach
  {
    await async.forEach([ 1, 3, 5, 7, 9 ], async function (item, index) {
      console.log(item, index);
    });
  }

  // map
  {
    const list = await async.map([ 2, 4, 6, 8, 10 ], async function (item, index) {
      return item + index;
    });
    console.log(list);
  }

  // reduce
  {
    const ret = await async.reduce([ 1, 3, 5, 7, 9 ], async function (a, b) {
      return a + b;
    });
    console.log(ret);
  }

  // reduceRight
  {
    const ret = await async.reduceRight([ 1, 3, 5, 7, 9 ], async function (a, b) {
      return a - b;
    });
    console.log(ret);
  }

  // filter
  {
    const list = await async.filter([ 1, 3, 5, 7, 9 ], async function (item) {
      return item > 5;
    });
    console.log(list);
  }

  // every
  {
    const ok = await async.every([ 2, 4, 6, 8, 10 ], async function (item) {
      return item % 2 === 0;
    });
    console.log(ok);
  }

  // some
  {
    const ok = await async.some([ 2, 4, 6, 8, 10 ], async function (item) {
      return item % 2 === 0;
    });
    console.log(ok);
  }

  // find
  {
    const ret = await async.find([ 1, 3, 5, 7, 9 ], async function (item) {
      return item > 5;
    });
    console.log(ret);
  }

  // findIndex
  {
    const ret = await async.findIndex([ 1, 3, 5, 7, 9 ], async function (item) {
      return item > 5;
    });
    console.log(ret);
  }

})();
```


## License

```
MIT License

Copyright (c) 2017 Zongmin Lei <leizongmin@gmail.om>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
