const chai = require('chai')
const assert = require('chai').assert
const expect = require('chai').expect
// Cool import - destructuring
const { fletch, age, isCool, obj, array, add, multiply } = require('../index')


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

describe('add function', function(){
    it('should be a function', function(){
        expect(add).to.be.a('function')
    })

    it('should return 4', function(){
        let myFavNum = add(1,7)
        expect(add(2,2)).to.equal(4)
        expect(myFavNum).to.equal(8)
    })

    it('should return a number as type', function(){
        expect(add(2,2)).to.be.a('number')
    })
})

describe('Test array', function(){
    it('should return array as type', function(){
        expect(array).to.be.a('array')
    })

    it('should have 4 different elements', function(){
        let result = 0
        for(let i = 0; i < array.length; i++){
            let ele = array[i]
            if(typeof ele === 'boolean'){
                result += 1;
            } else if(typeof ele === 'string'){
                result += 1;
            } else if(typeof ele === 'number'){
                result += 1;
            } else if(typeof ele === 'object'){
                result += 1;
            }
        }
        expect(result).to.equal(4)
    })
})

// Start TDD (test driven development)

// write a function multply that returns a multiplied num
describe('Multiply', function(){
    it('should be a function', function(){
        expect(multiply).to.be.a('function')
    })

    it('should multiply a num', function(){
        expect(multiply(2,4)).to.equal(8)
    })

    it('should return a num', function(){
        expect(multiply(2,4)).to.a('number')
    })
})