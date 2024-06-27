// classes ==== constructor functions

// // function Car(){}
// class Student {
//     constructor(id, name, subjects = []) {
//         this.id = id;
//         this.name = name;
//         this.subjects = subjects;
//     }

//     addSubject() {}
// }

// console.log(typeof Student) // function

class Student {
    constructor(id, name, subjects = []) {
      this.id = id;
      this.name = name;
      this.subjects = subjects;      
    }  

    getStudentName() {
        return this.name;
        }
      
    addSubject() {}  
  }
  
  const student1 = new Student(1, 'Reed');
  console.log(student1.addSubject());
  console.log(student1.getStudentName());