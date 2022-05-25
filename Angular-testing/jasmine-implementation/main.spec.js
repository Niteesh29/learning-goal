describe('main.js', function () {
    describe('calculate()', function () {
        xit('validate expression if the number is invalid', function () {
        })
        xit('calls add')
        xit('calls sustract')
        xit('calls multiply')
        xit('calls divide')
        xit('validate operation')
        xit('calls update result')
    })
    describe('updateResult()', function () {
        afterAll(function () {
            const element = document.getElementById('result')
            document.body.removeChild(element)
        })
        it('add result to the dom element', function () {
            const element = document.createElement('div')
            element.setAttribute('id', 'result');
            document.body.appendChild(element)
            updateResult('5')

            expect(element.innerText).toBe('5')
        })

    })
})