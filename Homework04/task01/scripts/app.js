fetch(`https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`)
    .then(response => response.json())
    .then(students => {
        let femaleWithAverageGrade5 = students
            .filter(student => student.gender === `Female` && student.averageGrade === 5)
            .map(student => student.firstName)

        console.log(femaleWithAverageGrade5);

        let maleInSkopjeOver18 = students
            .filter(student => student.gender === `Male` && student.age >= 18 && student.city === `Skopje`)
            .map(student => `${student.firstName} ${student.lastName}`);

        console.log(maleInSkopjeOver18);

        let averageGradeFemaleOver24 = students
            .filter(student => student.gender === `Female` && student.age > 24)
            .map(student => student.averageGrade)
            .reduce((sum, grade) => sum + grade, 0) / students.length;

        console.log(averageGradeFemaleOver24)

        let sortedByLastName =  students
        .sort((a, b) => a.lastName.localeCompare(b.lastName));

        console.log(sortedByLastName);
    })

    
    