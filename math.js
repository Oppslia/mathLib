class Shawn{
    static #isNum(num){
        return typeof num === 'number' && isFinite(num) && [0,-0].includes(num%1)
    }
    static #isInRange(value, min, max) {
        return value > min && value < max
    }
    static floor(num){
        if(Shawn.#isNum(num)){
            return num
        }
        if (num<0){
            return ((num | 0) - 1)
        }
        return num | 0
    }
    static ceil(num){
        if(Shawn.#isNum(num)){
            return num
        }
        if (num<0){
            return ((num | 0))
        }
        return ((num | 0) + 1)
    }
    static round(num){
        if(Shawn.#isNum(num)){
            return num
        }
        if (Shawn.#isInRange(parseFloat(num), 0, .50) || Shawn.#isInRange(parseFloat(num), -.50, 0)){
            return 0
        }
        let decimalPart = num % 1
            if(num < 0){
                console.log(decimalPart)
                if(decimalPart <= -.50){ // -1.48 = 2
                    return ((num | 0) - 1)  // if decimal part is >.5 and num is Negative (-2.51 becomes -3(-2-(1))
                }
                return(num | 0)
            }
            if (decimalPart >= .50){
                return ((num | 0) + 1)
            }
            return(num | 0)

    }  
    static add(a,b){return (a+b)}
    static subtract(a,b){return (a-b)}
    static multiply(a,b){return (a*b)}
    static power(a,b){return (a^b)}
    static abs(a){
        if (a<0){
            console.log(a)
            return (a * -1)
        }
        return a
     }
    static mod(a,b){//return a%b
        if (b === 0){
            return NaN
        }
        return (a - (parseInt((a/b))*b))

       
    }
    static factorial(num){
        if(num === 0 || num === 1){
            return 1
        }
        let result = 1
        for(let i = 2; i <= num; i++){
            result *= i
        }
        return result

    }























}


module.exports = Shawn;

//console.log (-1.66 | 0)
//console.log(Shawn.round(-1.5))
//Shawn.abs(-1)
// console.log(Math.floor(-1.49))

// console.log(Shawn.floor(-1.2))
// console.log(Math.floor(-1.2))
// console.log(Shawn.floor(1.2))
// console.log(Math.floor(1.2))
console.log(Shawn.ceil(-1.2))
console.log(Math.ceil(-1.2))
console.log(Shawn.ceil(1.2))
console.log(Math.ceil(1.2))