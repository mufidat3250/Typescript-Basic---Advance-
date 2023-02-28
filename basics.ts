let userName: string = "Jack";
let haslogin: boolean = true;

userName += "Adamu";

// define type for regex
let myRegex: RegExp = /foo/;

//type defination for number
let myNumber: number = 30;

// type defination for array

const names: string[] = userName.split("");

//generic type for array
const myValue: Array<number> = [1, 2, 3];

//with interface you type once and use everywere 
interface Iperson {
  firstName: string;
  lastName: string;
}
//type defination for object

const person: Iperson = {
  firstName: "Mufidat",
  lastName: "Abiola",
};

// utitlty type to infer object map

const ids:Record<number, string> = {
    10:'a',
    20:'b',
    30:'c'
}
 ids[50] = 'd'

 //types with conditionals
 if(ids[50] ==='y'){

 }
 //type with for loop should always be left infered

 //types with foreach(infered)
 [1,3,4,5].forEach((v)=> console.log(v))

 //types with map (infered)
 const out:string[] = [4,5,6].map((v)=> `${v} *10`)
 