module.exports = {
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	moduleNameMapper: {
		'~(.*)$': '<rootDir>/src/$1',
	},
	modulePaths: ['./src/'],
	testRegex: '^.+\\.test\\.tsx?$',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
}
