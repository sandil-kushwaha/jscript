for(let i=0;i<=10;i++)
  {
     console.log(`outer value of loop: ${i}`);
      for(let j=0;j<=10;j++)
       console.log(`outer value ${i} and inner value ${j}`)
  }
  const nums=[1,2,3,4,5,6,7,8,9,10];
  let newnums=nums.filter((num)=>num <8)
  console.log(newnums);