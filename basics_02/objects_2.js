const tinder={}
tinder.name="sandil kushwaha"
tinder.age=22
tinder.theme="dark"
tinder.func=function(){
console.log(`here is all the information ${this.name} ${this.age} ${this.theme}`)}
console.log(tinder.func())

const course={
    nameg:"kushwaha",
     price:"1000",
     time:6
}
console.log(course)
const {nameg:kl}=course
console.log(kl)

function calculatesum(val1,val2,...num1)
{
    return num1;
}
console.log(calculatesum(100,200,900,19909,909839))