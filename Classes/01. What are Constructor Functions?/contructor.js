const student1 = {
    id: 1,
    name: "Reed",
    subjects: [],
    addSubject(subject) {
      this.subjects = [...this.subjects, subject];
    }
  }

  student1.addSubject('Math')


  student1.addSubject('history')

  console.log(student1.subjects) // ['Math']