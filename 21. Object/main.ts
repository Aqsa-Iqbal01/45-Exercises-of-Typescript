//Q.21)Write a program that creates objects containing these items.

// Datatype of person object
interface person{
    age : number,
    name : string,
    nationality : string,
    student : boolean
}

// Person object

let Person :person = {
    age : 23 ,
    name : 'Aqsa',
    nationality : 'Pakistan',
    student : true
}

// Print person
console.log(Person);

// Datatype of car object
interface car {
    maker : string,
    color: string,
    automatic : boolean
}
// Car object

let car = {
    maker : 'Toyota',
    color : 'Black',
    automatic : true
}
// Print car
console.log(car);