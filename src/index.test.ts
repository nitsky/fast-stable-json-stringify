const stringify = require('./')

test('object with unsorted keys', () => {
	const obj = { c: 6, b: [4, 5], a: 3, z: null }
	const result = '{"a":3,"b":[4,5],"c":6,"z":null}'
	expect(stringify(obj)).toBe(result)
})

test('object with undefined', () => {
	const obj = { a: 3, z: undefined }
	const result = '{"a":3}'
	expect(stringify(obj)).toBe(result)
})

test('object with null', () => {
	const obj = { a: 3, z: null }
	const result = '{"a":3,"z":null}'
	expect(stringify(obj)).toBe(result)
})

test('object with NaN and Infinity', () => {
	const obj = { a: 3, b: NaN, c: Infinity }
	const result = '{"a":3,"b":null,"c":null}'
	expect(stringify(obj)).toBe(result)
})

test('array with undefined', () => {
	const obj = [1, undefined, 2]
	const result = '[1,null,2]'
	expect(stringify(obj)).toBe(result)
})

test('array with function', () => {
	const obj = [1, () => {}, 2]
	const result = '[1,null,2]'
	expect(stringify(obj)).toBe(result)
})

test('circular reference', () => {
	const obj = {}
	obj['a'] = obj
	expect(() => stringify(obj)).toThrowError()
})
