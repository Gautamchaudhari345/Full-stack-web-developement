const students = [
    
    {
        name : "Steve",
        marks : 95
    },
    {
        name : "Smith",
        marks : 75
    },
    {
        name: "Michel",
        marks : 92
    },
    {
        name : "Harry",
        marks : 70
    },
    {
        name: "Andrew",
        marks: 99
    }
];
// Function To filter Results
function checkResults(studentName){

     let i;
    for(i=0;i<students.length;i++)
    {

        if(students[i].name == studentName && students[i].marks > 90)
        {
        console.log(`Congratulations ${students[i].name} ! You have cleared the exam.`);
        break;
        }   
        else if(students[i].name == studentName && students[i].marks < 90)
        {
        console.log(`Sorry ! You have not cleared the exam`);
        break;
        }
        
    }

    if(i>=students.length){
        console.log(`Invalid User !!!`);
    }
}

// Passing name Parameter
checkResults('Steve');
checkResults('Harry');
checkResults('Mike');
checkResults('Andrew');
 