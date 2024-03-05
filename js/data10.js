
const fs =require("fs")
const allData =require("./allData")

const addPerson = (id , fname , lname , age ,city ) =>{

    const allData=loadData()
    const duplicatedData = allData.filter((obj)=>{
         return obj.id === id
    })
    // console.log(duplicatedData)
        if(duplicatedData.length==0){
            allData.push({
                id:id,
                fname:fname,
                lname:lname,
                age :age ,
                city :city , 
                
    
            })
    
            saveAllData(allData)
        }
        else{
            console.log("error duplicated data ")
        }
        
 
}  


///////////////////////////////////////////////////////////

const loadData =()=>{
   try{
    const DataJson=fs.readFileSync("data.json").toString()
    return JSON.parse(DataJson)
   }
   catch {
    return []
   }
}

//////////////////////////////////////////////////////

const saveAllData = (allData)=>{
    const AllDatajson = JSON.stringify(allData)
    fs.writeFileSync("data.json" , AllDatajson)
}


/////////////////////////////////////////
// to delete item by id 
const deleteData =(id)=> {
    const allData = loadData()

    const dataTokeep = allData.filter((obj)=>{
        return obj.id !==id 
        ///ya3ne redle kel yale lid taba3on matab2 lid yale ana bade e7zefon 
      
    })
    console.log(dataTokeep)

    saveAllData(dataTokeep)
    console.log("you have deleted the item" )
}

const readData = (id) => {
   const allData =loadData()

   const itemNeeded =allData.find((obj)=>{

    return obj.id == id
   
   } )
   console.log(itemNeeded)
   if(itemNeeded){
    console.log(itemNeeded.fname)
   }else{
    console.log("item needeed is not present")
   }

}

const listData =(id)=>{
    const allData=loadData()

    allData.forEach((obj)=>{
        console.log(obj.fname ,obj.lname)

    })
      
  
}




module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
}