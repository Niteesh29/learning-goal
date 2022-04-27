describe('first test', () => {
    let testVariable: any

    beforeEach(() => {
        testVariable = {}
    })

    it('should return true if a is true', () => {
        //arange 
        testVariable.a = false

        //act
        testVariable.a = true

        //assert

        expect(testVariable.a).toBe(true)
    })
})