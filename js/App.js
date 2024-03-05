const fs = require("fs")

fs.writeFileSync("data1.txt", "islam mohamaed")    

// console.log(fs.readFileSync("data1.txt").toString())

fs.appendFileSync("data1.txt", " , bashar yahya")

// console.log(fs.readFileSync("data1.txt").toString())


///////////////////////////////////////////////////////////////

const x = require("./allData")
// const firstName = require("./allData")


// console.log(x.fName)
// console.log(x.age)
////////////////////////////////////////////////////////////////////


const validator =require ("validator")

// const yargs = require("yargs")   t3araf mara tenye


// console.log(validator.isEmail("bashar@gmail.com"))
//////////////////////////////////////////////////////////////////////

// console.log(process.argv)

// const command = process.argv[2]
// if(command==="add"){
// console.log("you have added an item ")
// }else{
//     console.log("yo do another thing")
// }


// const yargs = require("yargs") 
// // console.log(yargs.argv)

// yargs.command ({

//     command : "add" ,
//     describe :"to add an item",
//     handler:()=>{
//         console.log("you have add an item ")
//     }

// })

// console.log(yargs.argv)


////////////////////////////////////////////////////////
// builder

const data10=require("./data10")

const yargs = require("yargs") 
// console.log(yargs.argv)

yargs.command ({

    command : "add" ,
    describe :"to add an item",
    builder: {
        fname:{
            describe:"this is first name",
            demandOption:true,
            type:"string"
        } ,
        lname:{
            describe:"this is first name",
            demandOption:false,
            type:"string"
        }

        } ,
   
    handler:(x)=>{
       data10.addPerson(x.id ,x.fname,x.lname,x.age,x.city)

    }

})

yargs.command ({

    command : "delete" ,
    describe :"to delete an item",
    handler:(x)=>{
        data10.deleteData(x.id)
    }

})  

yargs.command({
    command: "read" ,
    describe:"to read data",
    builder :{
        id: {
            describe : "this is id desc in read command ",
            demandOption : true ,
            type :"string"

        }
    },
    handler:(x)=> {
        data10.readData(x.id)

    }
})

yargs.command({
    command: "list" ,
    describe:"to list data",
    
    handler:()=> {
        data10.listData()

    }
})







yargs.parse()

/////////////////////////////////////

// const person1 = {
//     fname : "islam",
//     lname : "mohamed"
// }

// console.log(person1)
// console.log(person1.lname)



// const person1json = JSON.stringify(person1)
// console.log(person1json)


// const person1obj = JSON.parse(person1json)
// console.log(person1obj)

// fs.writeFileSync("data10.js" , person1json)
