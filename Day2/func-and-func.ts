// type  callback function

const printToFile = (text:string, callback:()=>void) =>{
    // console.log(text)
    callback()
} 

// example with map

type mutateFunction = (v:number)=> number
const printNumber = (numbers:number[], mutate:mutateFunction) => {
    numbers.map(mutate)
}
// console.log(printNumber([1,2,4,6], (v)=>v*4))

// type function with closure

type creatAdder = (num: number) => number
const createAdder = ( val : number ):creatAdder => {
    return (num:number)=> num * val
}
const addOne = createAdder(2)
console.log(addOne(60))