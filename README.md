[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![David deps][david-image]][david-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]
[![npm license][license-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/lei-async.svg?style=flat-square
[npm-url]: https://npmjs.org/package/lei-async
[travis-image]: https://img.shields.io/travis/leizongmin/lei-async.svg?style=flat-square
[travis-url]: https://travis-ci.org/leizongmin/lei-async
[coveralls-image]: https://img.shields.io/coveralls/leizongmin/lei-async.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/leizongmin/lei-async?branch=master
[david-image]: https://img.shields.io/david/leizongmin/lei-async.svg?style=flat-square
[david-url]: https://david-dm.org/leizongmin/lei-async
[node-image]: https://img.shields.io/badge/node.js-%3E=_7.0-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/lei-async.svg?style=flat-square
[download-url]: https://npmjs.org/package/lei-async
[license-image]: https://img.shields.io/npm/l/lei-async.svg


# lei-async

[![Greenkeeper badge](https://badges.greenkeeper.io/leizongmin/lei-async.svg)](https://greenkeeper.io/)
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
