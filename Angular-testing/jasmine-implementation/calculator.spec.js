
//describe method accept two parameters first one is title and second one is anonymus function where you will write your test suit
describe('calculator.js', function () {
    describe('Calculator', function () {
        let calculator;
        let calculator1
        //Title should be meaningfull so that you can understand for what this particular spec has been written
        //toBe matcher :it will compare the expected value and actual value using ====
        beforeEach(function () {
            calculator = new Calculator()
            calculator1 = new Calculator()
        })
        it('should intialize the total', function () {
            expect(calculator.total).toBe(0) // passed
            expect(calculator.total).toBeFalsy()//passed

            // let person1 = {name:'Niteesh'}
            // let person2 = {name:'Niteesh'}
            // expect(person1).toBe(person2) //failed bcz object is reference type and for both person1 and 2 refrence will be different
            //  expect(person1).toBe(person1) // passed

        })

        //toEqual matcher : Mainly it will be used for object. Deep Equality comparison : if keys have same value and type, same as value --) same value same type then toEqual will return true 


        it('should divide number to the total', function () {


            expect(calculator).toBeTruthy()
            expect(calculator1).toBeTruthy()

            // expect(calculator1).toBe(calculator2) //failed
            expect(calculator).toEqual(calculator1) //passed

        })

        //toBeTruthy & toBeFalsy matcher : The value which are true or false in boolean contxet is called truthy or falsy value
        //only 7 value in javascript are falsy :false, 0, '':empty string, null,undefined , NaN

        //not matcher 
        it('should have unique calculator object', function () {
            expect(calculator).not.toBe(calculator1) // now this matcher will behave opposite way
        })


        //toBeUndefined

        it('should have common methods', function () {
            expect(calculator.add).not.toBeUndefined()
        })

        describe('add()', function () {

            xit('should add number to the total', function () {
                //  expect(5+5).toBe(10)
                //we have to write this spec for calculator so first lets cerate instance of calculator
                calculator.add(5)
                //here toBe() is a matcher
                expect(calculator.total).toBe(5)

            })
        })

        describe('substract()', function () {

            it('should substract number from the total', function () {
                calculator.total = 30
                calculator.substract(5)
                expect(calculator.total).toBe(25)
            })
        })


        describe('multiply()', function () {
            it('should multply number to the total', function () {
                calculator.total = 10
                calculator.multiply(5)
                expect(calculator.total).toBe(50)

            })
        })


        describe('divide()', function () {
            it('should divide number to the total', function () {

                calculator.total = 50
                calculator.divide(5)
                expect(calculator.total).toBe(10)
            })
        })



        //toBeNull

        it('can run overwrite total value', function () {
            calculator.total = null
            expect(calculator.total).toBeNull()
        })

        //toContainMatcher

        it('should contain specific content', function () {
            let arr = [1, 2, 3, 4];
            expect(arr).toContain(3)

        })

        //to test whether function is throwing error properly or not

        //toThrow matcher

        it('should throw error when divided by zero', function () {
            calculator.total = 10;
            expect(function () { calculator.divide(0) }).toThrow();

        })

        //custom -matcher 


        it('should be an instance ', function () {
            jasmine.addMatchers(customMatcher)
            expect(calculator).toBeCalculator()

        })
    })





})