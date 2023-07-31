const arr=[2,4,5,7];
const newArr=arr.map((ar)=>{
    return ar+1;
});
console.log(newArr);

const newOne=arr.forEach((ar)=>{
    return ar-1;
});

console.log(newOne);
//squareArray
const numbers=[1,2,3,4];
const squareArr=numbers.map((number)=>{
    return number**2
});
console.log(squareArr);

//uppercase
const names1=["Tejun","Jane","Mike"];
const uppercasename1=names1.map((name)=>{
    return name.toUpperCase();
});
console.log(uppercasename1);

//filter even no.
const numbers1= [1, 2, 3, 4, 5];

// Using map and filter+
const evenNumbersMap = numbers1.map(num => num+2).filter(num => num>4);
console.log(evenNumbersMap);
//
const names3 = ["John Doe", "Jane Smith", "Mike Johnson"];

// Using map
const formattedNamesMap = names3.map(name => {
    const [firstName, lastName] = name.split(" ");
    return `${lastName}, ${firstName}`;
  });
  console.log(formattedNamesMap); // Output: ["Doe, John", "Smith, Jane", "Johnson, Mike"]
  //find out output

  let students=[
      {name:"piyush",rollNumber:21,marks:90},
      {name:"neha",rollNumber:22,marks:100}
  ];

  const names=students.map((stu)=>{
      return stu.name.toUpperCase();
  });
  console.log(names);

  const details=students.filter((stu)=>{
      return stu.marks>90
});
console.log(details);

//sum of marks
const sum=students.reduce((pre,cur)=>{
    return pre+cur.marks;
},0);
console.log(sum);

//
const totalMarks=students.map((stu)=>{
    if(stu.marks<60){
        stu.marks=stu.marks+20;
    }
    return stu;
}).filter((stu)=>stu.marks>60).reduce((acc,curr)=>acc+curr.marks,0);

console.log(totalMarks);
