const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()

const sampleData = require('./sample.json')

const packages = {
	'JSON.stringify': JSON.stringify,
	'fast-json-stable-stringify': require('fast-json-stable-stringify'),
	'fast-stable-json-stringify': require('./dist'),
	'fast-stable-stringify': require('fast-stable-stringify'),
	'faster-stable-stringify': require('faster-stable-stringify'),
	'fastest-stable-stringify': require('fastest-stable-stringify'),
	'json-stable-stringify': require('json-stable-stringify'),
}

for (const packageName in packages) {
	let stringify = packages[packageName]
	suite.add(packageName, function() {
		stringify(sampleData)
	})
}

suite
	.on('cycle', event => console.log(String(event.target)))
	.run({ async: true })
