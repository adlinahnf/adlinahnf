let data1 = true
let data2 = "1.25"
console.log(data1, typeof data1)
console.log(data2, typeof data2)

let data3 = data1.toString() + data2
console.log(data3, typeof data3)

// Array
let data = ["one",2,true]
console.log(data[2], typeof data[2])

//object
let user ={
    name: "adlina",
    faculty: "fkekk",
    phone: "147207",
    email: "adlinahnf@gmail.com"
}
//console.log( user.faculty)

user ={
    name: "adlina",
    faculty: "fkekk",
    phone: {
        office: "147207",
        mobile: "123456" } ,
    email: "adlinahnf@gmail.com"
}
console.log( user.phone.office)


























