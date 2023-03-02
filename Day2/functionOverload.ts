// typescript function overload
interface Coordinate{
    x:number,
    y:number
}
function parseCoordinate (obj:Coordinate):Coordinate;
function parseCoordinate (x:number, y:number):Coordinate;
function parseCoordinate (x:string):Coordinate;
function parseCoordinate (arg1:unknown, arg2?:unknown):Coordinate{

    let cord:Coordinate = {
        x:0,
        y:0
    }
 if(typeof arg1 === 'string'){
           (arg1 as string).split(',').forEach((arg)=> {
            const [key, value] = arg.split(':')
            cord[key as 'x' | 'y'] = parseInt(value)
           })     
      
    } if(typeof arg1 === 'object'){
        return {
            ...cord
        }
    }    
    else{
        return{
            x:arg1 as number,
            y:arg2 as number
        }
    }
}

parseCoordinate({x:0, y:2})
parseCoordinate(0, 0)
parseCoordinate('x:20,y:30')

