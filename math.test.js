const Shawn = require('./math')
test('Shawn.add should add two numbers together', () => {
    expect(Shawn.add(5,6)).toBe(11)
    expect(Shawn.add(-20,10)).toBe(-10)
    expect(Shawn.add(20,-5)).toBe(15)
})
test('Shawn.round should round to the nearest whole number.', () => {
    expect(Shawn.round(-.25)).toBe(0)
    expect(Shawn.round(.25)).toBe(0)
    expect(Shawn.round(-1)).toBe(-1)
    expect(Shawn.round(-1.48)).toBe(-1)
    expect(Shawn.round(-1.50)).toBe(-2)
    expect(Shawn.round(-1.5)).toBe(-2)
    expect(Shawn.round(-1.51)).toBe(-2)
    expect(Shawn.round(-1.6)).toBe(-2)
    expect(Shawn.round(1)).toBe(1)
    expect(Shawn.round(1.49)).toBe(1)
    expect(Shawn.round(1.50)).toBe(2)
    expect(Shawn.round(1.5)).toBe(2)
    expect(Shawn.round(1.51)).toBe(2)
    expect(Shawn.round(1.6)).toBe(2)  
})
test('Shawn.floor should round down to the lower number even in negatives', () => {
    expect(Shawn.floor(5.5)).toBe(5)
    expect(Shawn.floor(5.99)).toBe(5)
    expect(Shawn.floor(-5.5)).toBe(-6)
    expect(Shawn.floor(-5.99)).toBe(-6)
    expect(Shawn.floor(-5)).toBe(-5)
    expect(Shawn.floor(5)).toBe(5)


    
})
test('Shawn.ciel should round up to the higher number even in negatives', () => {
    expect(Shawn.ceil(5.5)).toBe(6)
    expect(Shawn.ceil(5.99)).toBe(6)
    expect(Shawn.ceil(-5.5)).toBe(-5)
    expect(Shawn.ceil(-5.99)).toBe(-5)
    expect(Shawn.ceil(-5)).toBe(-5)
    expect(Shawn.ceil(5)).toBe(5)


    
})


test('Shawn.abs Provides Absolute Values', () => {
    expect(Shawn.abs(1)).toBe(1)
    expect(Shawn.abs(5)).toBe(5)
    expect(Shawn.abs(-1)).toBe(1)
    expect(Shawn.abs(-5)).toBe(5)
    expect(Shawn.abs(-.25)).toBe(.25)
    expect(Shawn.abs(.25)).toBe(.25)
    
    
})
test('Shawn.mod replicates the mod operator', () => {
    expect(Shawn.mod(2,1)).toBe(0)
    expect(Shawn.mod(2,2)).toBe(0)
    expect(Shawn.mod(3,2)).toBe(1)
    expect(Shawn.mod(2,3)).toBe(2)
    expect(Shawn.mod(0,1)).toBe(0)
    expect(Shawn.mod(1,0)).toBe(NaN)
    expect(Shawn.mod(2,500)).toBe(2)
    expect(Shawn.mod(-1,2)).toBe(-1)
    expect(Shawn.mod(-52,21)).toBe(-10)
    expect(Shawn.mod(-52,-21)).toBe(-10)
    expect(Shawn.mod(52,-21)).toBe(10)
    
})
test('Shawn.factorial provides the factorial sequence', () => {
    expect(Shawn.factorial(0)).toBe(1)
    expect(Shawn.factorial(1)).toBe(1)
    expect(Shawn.factorial(2)).toBe(2)
    expect(Shawn.factorial(3)).toBe(6)
    expect(Shawn.factorial(4)).toBe(24)
    
    
})