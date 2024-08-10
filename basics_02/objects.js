const Jsuser={
    name:"Sandil Kushwaha",
    age:"22",
    height:"6"
    
    }

    Jsuser.greeting=function(){
        console.log("HII  sdfghj ")}
        
    Jsuser.greeting22=function(){
        console.log(`Hii sandil ${this.name},${this.height}`)}
console.log(Jsuser.age)
console.log(Jsuser.greeting())
console.log(Jsuser.greeting22())