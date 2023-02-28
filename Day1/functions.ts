//type declarations for function

function addNumbers (a:number , b:number):number{
    return a + b
}

// default parameter for function

function addStrings (str1:string, str2:string=''):string{
    return `${str1} second name is ${str2}`
}

const format = (str1 : string, str2 : string | number) => `${str1} is ${str2}`

const printFormat = (title:string, param:string):void => console.log(format(title, param)) 

// type function that return a promise 
const fetchData =(url:string):Promise<string>=> Promise.resolve(`${url}`)

//checking type at runtime 

const getName =(user:{firstName:string, lastName:string})=> `${user?.firstName ?? 'first'} last name is ${user?.lastName ?? 'last'}`



export default addNumbers
export  {addStrings, format, printFormat, fetchData, getName}

