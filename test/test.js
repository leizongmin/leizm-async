/**
 * @leizm/async tests
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

require('source-map-support/register');
const expect = require('chai').expect;
const async = require('../');

function sleep(num) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, num);
  });
}

describe('test @leizm/async #1', function () {

  it('forEach', async function () {
    const items = [];
    const indexes = [];
    await async.forEach([ 1, 3, 5, 7, 9 ], async function (item, index) {
      items.push(item);
      indexes.push(index);
      await sleep(10);
    });
    expect(items).to.eql([ 1, 3, 5, 7, 9 ]);
    expect(indexes).to.eql([ 0, 1, 2, 3, 4 ]);
  });

  it('map', async function () {
    const list = await async.map([ 2, 4, 6, 8, 10 ], async function (item, index) {
      await sleep(10);
      return item + index;
    });
    expect(list).to.eql([ 2, 4 + 1, 6 + 2, 8 + 3, 10 + 4 ]);
  });

  it('reduce', async function () {
    const ret = await async.reduce([ 1, 3, 5, 7, 9 ], async function (a, b) {
      await sleep(10);
      return a + b;
    });
    expect(ret).to.equal(1 + 3 + 5 + 7 + 9);
    expect(ret).to.equal([ 1, 3, 5, 7, 9 ].reduce((a, b) => a + b));
  });

  it('reduceRight', async function () {
    const ret = await async.reduceRight([ 1, 3, 5, 7, 9 ], async function (a, b) {
      await sleep(10);
      return a - b;
    });
    expect(ret).to.equal(9 - 7 - 5 - 3 - 1);
    expect(ret).to.equal([ 1, 3, 5, 7, 9 ].reduceRight((a, b) => a - b));
  });

  it('filter', async function () {
    const list = await async.filter([ 1, 3, 5, 7, 9 ], async function (item) {
      await sleep(10);
      return item > 5;
    });
    expect(list).to.eql([ 7, 9 ]);
  });

  it('every', async function () {
    {
      const ok = await async.every([ 2, 4, 6, 8, 10 ], async function (item) {
        await sleep(10);
        return item % 2 === 0;
      });
      expect(ok).to.be.true;
    }
    {
      const ok = await async.every([ 2, 4, 6, 7, 8 ], async function (item) {
        await sleep(10);
        return item % 2 === 0;
      });
      expect(ok).to.be.false;
    }
  });

  it('some', async function () {
    {
      const ok = await async.some([ 2, 4, 6, 8, 10 ], async function (item) {
        await sleep(10);
        return item % 2 === 0;
      });
      expect(ok).to.be.true;
    }
    {
      const ok = await async.some([ 2, 4, 6, 7, 8 ], async function (item) {
        await sleep(10);
        return item % 2 === 0;
      });
      expect(ok).to.be.true;
    }
    {
      const ok = await async.some([ 1, 3, 5, 7, 9 ], async function (item) {
        await sleep(10);
        return item % 2 === 0;
      });
      expect(ok).to.be.false;
    }
  });

  it('find', async function () {
    const ret = await async.find([ 1, 3, 5, 7, 9 ], async function (item) {
      return item > 5;
    });
    expect(ret).to.equal(7);
  });

  it('findIndex', async function () {
    const ret = await async.findIndex([ 1, 3, 5, 7, 9 ], async function (item) {
      return item > 5;
    });
    expect(ret).to.equal(3);
  });

});

describe('test @leizm/async #2', function () {

  it('forEach', async function () {
    const items = [];
    const indexes = [];
    await async.array([ 1, 3, 5, 7, 9 ]).forEach(async function (item, index) {
      items.push(item);
      indexes.push(index);
      await sleep(10);
    });
    expect(items).to.eql([ 1, 3, 5, 7, 9 ]);
    expect(indexes).to.eql([ 0, 1, 2, 3, 4 ]);
  });

  it('map', async function () {
    const list = await async.array([ 2, 4, 6, 8, 10 ]).map(async function (item, index) {
      await sleep(10);
      return item + index;
    });
    expect(list).to.eql([ 2, 4 + 1, 6 + 2, 8 + 3, 10 + 4 ]);
  });

  it('reduce', async function () {
    const ret = await async.array([ 1, 3, 5, 7, 9 ]).reduce(async function (a, b) {
      await sleep(10);
      return a + b;
    });
    expect(ret).to.equal(1 + 3 + 5 + 7 + 9);
    expect(ret).to.equal([ 1, 3, 5, 7, 9 ].reduce((a, b) => a + b));
  });

  it('reduceRight', async function () {
    const ret = await async.array([ 1, 3, 5, 7, 9 ]).reduceRight(async function (a, b) {
      await sleep(10);
      return a - b;
    });
    expect(ret).to.equal(9 - 7 - 5 - 3 - 1);
    expect(ret).to.equal([ 1, 3, 5, 7, 9 ].reduceRight((a, b) => a - b));
  });

  it('filter', async function () {
    const list = await async.array([ 1, 3, 5, 7, 9 ]).filter(async function (item) {
      await sleep(10);
      return item > 5;
    });
    expect(list).to.eql([ 7, 9 ]);
  });

  it('every', async function () {
    {
      const ok = await async.array([ 2, 4, 6, 8, 10 ]).every(async function (item) {
        await sleep(10);
        return item % 2 === 0;
      });
      expect(ok).to.be.true;
    }
    {
      const ok = await async.array([ 2, 4, 6, 7, 8 ]).every(async function (item) {
        await sleep(10);
        return item % 2 === 0;
      });
      expect(ok).to.be.false;
    }
  });

  it('some', async function () {
    {
      const ok = await async.array([ 2, 4, 6, 8, 10 ]).some(async function (item) {
        await sleep(10);
        return item % 2 === 0;
      });
      expect(ok).to.be.true;
    }
    {
      const ok = await async.array([ 2, 4, 6, 7, 8 ]).some(async function (item) {
        await sleep(10);
        return item % 2 === 0;
      });
      expect(ok).to.be.true;
    }
    {
      const ok = await async.array([ 1, 3, 5, 7, 9 ]).some(async function (item) {
        await sleep(10);
        return item % 2 === 0;
      });
      expect(ok).to.be.false;
    }
  });

  it('find', async function () {
    const ret = await async.array([ 1, 3, 5, 7, 9 ]).find(async function (item) {
      return item > 5;
    });
    expect(ret).to.equal(7);
  });

  it('findIndex', async function () {
    const ret = await async.array([ 1, 3, 5, 7, 9 ]).findIndex(async function (item) {
      return item > 5;
    });
    expect(ret).to.equal(3);
  });

});
