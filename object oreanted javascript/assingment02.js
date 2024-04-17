class Student{
    constructor(name,email){
        this.enrolledCourses = [];
        this.name = name;
        this.email = email;
    }

    enrollingInCourses(...courseName){
        this.enrolledCourses.push(...courseName);
    }

    showCourses(){
   
        console.log(`${this.name}'s enrolled Courses: ${this.enrolledCourses}`);
   
    }
}


class Admission{

   
    constructor() {

        this.students = [];
        this.studentsAndCourse = [];
        // console.log("Admitted");
    }
    
    enrollStudent(Studentx){
        this.students.push(Studentx);
        console.log(`${Studentx.name} has been enrolled`);
    }
    
    assignCourse(Studentx,...courseName){
        
        // Studentx.courseName = courseName;

        this.studentsAndCourse.push(Studentx,...courseName);

        Studentx.enrolledCourses.push(courseName);

        console.log(`${Studentx.name} has enrolled in ${courseName}`);
    }

    showEnrolledStudents(){
        
        console.log("Enrolled Students: ");
            
        for(let student of this.students)
        {
            console.log(`${student.name} (${student.email})`);
        }
    }
  

}

const admissionOffice = new Admission();

const Student1 = new Student('Steve','steve@pw.live');
const Student2 = new Student('Ricky','ricky@pw.live');

admissionOffice.enrollStudent(Student1);
admissionOffice.enrollStudent(Student2);

admissionOffice.assignCourse(Student1,'Full Stack Web Development','System Design');
admissionOffice.assignCourse(Student2,'Data Science Masters');

Student1.showCourses();
Student2.showCourses();

admissionOffice.showEnrolledStudents();