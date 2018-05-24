;let university = function(){
    let universityJSObject = {
        studentsList : [],
        teachersList : [],
        coursesList : [],  
        
        Student: function() {
            this.name = arguments[0] || 'Student.name';
            this.coursesList = [];
            this.addStudent = function(somecourse) {
                if (somecourse instanceof university.Course) this.coursesList.push(somecourse);
                return somecourse;
            };
        },
        
        addStudent: function() {
            if (arguments[0] instanceof this.Student) this.studentsList.push(arguments[0]);    
        },
        
        Teacher: function() {
            this.name = arguments[0] || 'Teacher.name';
            this.course = arguments[1] || 'Teacher.course';
            this.studentsList = arguments[2];  
            this.addStudent = function(somestudent) {
                if (somestudent instanceof university.Student) this.studentsList.push(somestudent);
            };
        },
        
        addTeacher: function() {
            if (arguments[0] instanceof this.Teacher) this.teachersList.push(arguments[0]);    
        },
        
        Course: function() {
            this.name = arguments[0] || "Course #" + university.coursesList.length;
            this.teacher = arguments[1] || "Anonymous teacher";
            this.studentsList = arguments[2] || []; 
            this.addStudent = function(somestudent) {
                if (somestudent instanceof university.Student) this.studentsList.push(somestudent);
            };
        },
        
        addCourse: function() {
            if (arguments[0] instanceof this.Course) this.coursesList.push(arguments[0]);    
        },
  
    };

    return universityJSObject;
}()

//    let teacherSasha = new university.Teacher('Sasha');
//    let studentPeter = new university.Student('Peter');
//    let studentAndrew = new university.Student('Andrew');
//    let courseNodeJS = new university.Course('NodeJS', teacherSasha, [studentPeter, studentAndrew]);
//    courseNodeJS.addStudent('studentPeter');
//    courseNodeJS.addStudent(studentPeter);
//    university.addStudent(studentPeter);
//    university.addStudent(studentAndrew);
//    university.addTeacher(teacherSasha);
//    university.addCourse(courseNodeJS);

