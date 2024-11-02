// conversion to number
let score =223
let x="234abc"
let b = null
let z = undefined 
let boolean = true
let name ="khaja"
  let valueInNumber = Number(score)
  let valueInNumber1 = Number(x)
  let valueInNumber2 = Number(b)
  let valueInNumber3 = Number(z)
  let valueInNumber4 = Number(boolean)
  let valueInNumber5 = Number(name)

 console.log(typeof valueInNumber);
  console.log(typeof valueInNumber1);
  console.log(typeof valueInNumber2);
  console.log(typeof valueInNumber3);
  console.log(typeof valueInNumber4);
  console.log(typeof valueInNumber5);


  console.log(valueInNumber);
  console.table([valueInNumber,valueInNumber1,valueInNumber2,valueInNumber3 ,valueInNumber4 ,valueInNumber5])
 // conversion to booealn

 let isLoggedIn =1
 let isLoggedIn1 = ""
 let isLoggedIn2= " khaja"

 let booeanIsLoggedIn =Boolean(isLoggedIn)
 let booeanIsLoggedIn1=Boolean(isLoggedIn1)
 let booeanIsLoggedIn2 =Boolean(isLoggedIn2)


 console.log(typeof booeanIsLoggedIn)
 console.log(typeof booeanIsLoggedIn1)
 console.log(typeof  booeanIsLoggedIn2)

 console.table([booeanIsLoggedIn, booeanIsLoggedIn1 ,booeanIsLoggedIn2])


 // conversion to string
 let someNumber = 33
 let stringNumber = String(someNumber)
 console.log(typeof stringNumber)
 console.log(stringNumber)