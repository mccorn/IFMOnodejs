;let university = function(){
    let universityJSObject = {
        studentsList : [],
        teachersList : [],
        coursesList : [],  
        
        Student: function() {
            this.name = arguments[0] || 'Student.name';
            this.skills = [];
        },
        
        addStudent: function() {
            this.studentsList.push(arguments[0]);    
        },
        
        Teacher: function() {
            this.name = arguments[0] || 'Teacher.name';
            this.course = arguments[1] || 'Teacher.course';
            this.studentsList = arguments[2].slice();    
        },
        
        addTeacher: function() {
            this.teachersList.push(arguments[0]);    
        },
        
        Course: function() {
            this.name = arguments[0] || "Course #" + university.coursesList.length;
            this.teacher = arguments[1] || "Anonymous teacher";
            this.studentsList = arguments[2].slice();  
        },
        
        addCourse: function() {
            this.coursesList.push(arguments[0]);    
        },
  
    };

    return universityJSObject;
}()