
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};

const students = [bob, sally, paul];


getAverageGrade(student, course)
{
  for(let i=0; i<student.transcript.length; i++){

    if(student.transcript[i].course === course){

      let grades = student.transcript.grades;
      let sum =0;

       for(let j=0; i<grades.length; j++){
      sum += grades[j];
       }
    }
    let average = sum/grades.lenght;
  }
}


function getAssignmentMark(student, course, num){
  for(let i=0; i<student.transcript.length){

    if(student.transcript[i].course === course){
      let grades = student.transcript.grades;

      if(num < grades.length){
        return grades[num];
      }
    }
  }
  return -1;
}


function averageAssessment(students, courseName, assignment){

  let sum=0;
  let num = 0;

  for(let i=0; i<students.length; i++){

    let mark = getAssignmentMark(student[i], course, num)

    if(mark !== -1){
        sum += mark;
        num++;
    }
  }

   if(num === 0){
    return -1;
   }

   let average = sum/num;

   return average;

}
