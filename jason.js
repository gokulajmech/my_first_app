const students = [
    { name: "adhi", gender: "male" },
    { name: "Ahamed", gender: "male" },
    { name: "Rutika Kadam", gender: "female" },
    { name: "Priyadharsini", gender: "female" },
  ];

  const std={
      name:'captain america',
      std:'III',
      school:'palvadi',

  };
 // normal for loop for jason object
 for(let i=0;i<students.length;i++)
 {
     console.log(students[i]);
 }
  // (for in loop )for array of jason
for(let x in students)
{
    console.log(x);
}
// (for in loop )for  jason

for(let x in std)
{
    console.log(x);
}
// (for of loop )for array of jason

for(let x of students)
{
    console.log(x);
}
// (for Each loop )for array of jason
students.forEach((s)=>(console.log(s)));