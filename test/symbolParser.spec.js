var assert = require('chai').assert;
const symbolParser = require('../src/parser/symbolParser');

let testString = [
    '/台北市_city/中正區_country/市民大道_street',
    'firstname=Shawn&lastname=Lin&Age=25',
    '/1-5_week/0830-1000_startwork/1800-1930_endwork'
]

let resultShouldBe = [
    {city: '台北市', country: '中正區', street: '市民大道'},
    {firstname: 'Shawn', lastname: 'Lin', Age: "25"},
    {week: '1-5', startwork: '0830-1000', endwork: '1800-1930'}
]

describe('symbol parser', () => {
    it('case 1: return expected obj.', () => {
        assert.deepEqual(symbolParser(testString[0], '/', '_'), resultShouldBe[0], 'case 1: doesn\'t return expected obj.')
    })
    it('case 2: return expected obj.', () => {
        assert.deepEqual(symbolParser(testString[1], '&', '=', true), resultShouldBe[1], 'case 2: doesn\'t return expected obj.')
    })
    it('case 3: return expected obj.', () => {
        assert.deepEqual(symbolParser(testString[2], '/', '_'), resultShouldBe[2], 'case 3: doesn\'t return expected obj.')
    })
})