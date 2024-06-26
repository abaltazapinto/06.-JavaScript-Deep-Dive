const student1 = {
    id: 1,
    name: "Reed",
    subjects: [],
    addSubject(subject) {
      this.subjects = [...this.subjects, subject];
    }
  }

  student1.addSubject('Math')
  console.log(student1.subjects) // ['Math']