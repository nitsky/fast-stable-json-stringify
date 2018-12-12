const stringifyVisit = (
	object: any,
	visited: Set<object>,
): string | undefined => {
	const type = typeof object
	switch (type) {
		case 'string':
			return '"' + object + '"'
		case 'number':
			return JSON.stringify(object)
		case 'object':
			if (visited.has(object)) {
				throw TypeError(
					'Attempted to convert object to JSON with circular reference',
				)
			}
			visited.add(object)
			const objectString = Object.prototype.toString.call(object)
			if (objectString === '[object Object]') {
				const values = Object.keys(object)
					.sort()
					.map(key => {
						const value = stringifyVisit(object[key], visited)
						return value !== undefined ? `"${key}":${value}` : undefined
					})
					.filter(x => x !== undefined)
					.join(',')
				return '{' + values + '}'
			} else if (objectString === '[object Array]') {
				const values = object
					.map((value: any) => stringifyVisit(value, visited))
					.map((value: any) => (value === undefined ? 'null' : value))
					.join(',')
				return '[' + values + ']'
			} else {
				return JSON.stringify(object)
			}
		case 'boolean':
			return object ? 'true' : 'false'
		case 'undefined':
			return undefined
		case 'function':
			return undefined
		case 'symbol':
			return JSON.stringify(object)
	}
}

const fastStableJSONStringify = (object: any): string | undefined =>
	stringifyVisit(object, new Set<object>())

module.exports = fastStableJSONStringify
