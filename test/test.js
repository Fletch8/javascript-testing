const chai = require('chai')
const assert = require('chai').assert
// Cool import - destructuring
const { fletch, age, isCool, obj, array } = require('../index')


// Describe what the is/doing
describe('Test fletch varible', function(){
    it('should return a string as a type', function(){
        assert.typeOf(fletch, 'string');
    })

    it('should return Fletch as a result', function(){
        assert.equal(fletch, 'fletch');
    })

    it('should have length of 6', function(){
        assert.lengthOf(fletch, 6)
    })
})

describe('Test age varible', function(){
    it('should return a number as a type', function(){
        assert.typeOf(age, 'number');
    })

    it('should return 21 as the value', function(){
        assert.equal(age, 21);
    })

    // it('should have length of 6', function(){
    //     assert.lengthOf(fletch, 6)
    // })
})

describe('Test isCool varible', function(){
    it('should return a boolean as a type', function(){
        assert.typeOf(isCool, 'boolean');
    })

    it('should return true as the value', function(){
        assert.equal(isCool, true);
    })

    // it('should have length of 6', function(){
    //     assert.lengthOf(fletch, 6)
    // })
})

describe('Test obj Object', function(){
    it('should return a object as a type', function(){
        assert.typeOf(obj, 'object');
    })

    // it('should return 21 as the value', function(){
    //     assert.equal(age, 21);
    // })

    // it('should have length of 6', function(){
    //     assert.lengthOf(fletch, 6)
    // })
})