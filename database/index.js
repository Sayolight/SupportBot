const db = require('better-sqlite3')('sayo_support.sqlite');

const schemaList = require('./schema')
const functionList = require('./functions')

for (const schema in schemaList) {
	schemaList[schema](db)
}

module.exports = Object.assign({Database: db}, functionList)
