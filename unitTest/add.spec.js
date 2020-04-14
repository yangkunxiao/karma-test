describe("测试 add 函数",function(){
    it('+ 1 = 2',function(){
        expect(add(1)).toBe(2)
    })
    it('+ 2 = 3',function(){
        expect(add(2)).toBe(2)
    })
    it('+ 2 = 3',function(){
        expect(add()).toBe(undefined)
    })

})