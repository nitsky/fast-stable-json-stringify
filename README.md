# fast-stable-json-stringify

This package exports a function that behaves just like `JSON.stringify` except that it sorts the keys in objects so that the output is deterministic. There are many other packages that implement this function, but this package is faster than any other I have found. If you know one that is faster, please open an issue!

## Example

```js
const fastStableJSONStringify = require('fast-stable-json-stringify')
const objA = { a: 1, b: 2 }
const objB = { b: 2, a: 1 }
expect(JSON.stringify(objA)).toEqual(JSON.stringify(objB)) // FAIL!
expect(fastStableJSONStringify(objA)).toEqual(fastStableJSONStringify(objB)) // SUCCESS
```

## Benchmarks

The results below were run on a Mac Mini (Late 2018) 3.0 GHz 6-Core Intel i5 with 8GB RAM.

```
JSON.stringify x 60,420 ops/sec ±0.36% (94 runs sampled)
fast-json-stable-stringify x 8,686 ops/sec ±0.55% (93 runs sampled)
fast-stable-json-stringify x 19,286 ops/sec ±0.38% (93 runs sampled)
fast-stable-stringify x 14,331 ops/sec ±0.22% (92 runs sampled)
faster-stable-stringify x 12,160 ops/sec ±0.31% (96 runs sampled)
fastest-stable-stringify x 14,471 ops/sec ±0.26% (95 runs sampled)
json-stable-stringify x 6,534 ops/sec ±0.33% (93 runs sampled)
```
