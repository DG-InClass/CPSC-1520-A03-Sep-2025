console.log('Loaded main.js');

// Get our external modules
import { Course, EvaluationItem } from './course-marks';

// Demo using the constructor function
let myCourse = new Course('CPSC-1520', 'JavaScript Fundamentals');
let anItem = new EvaluationItem('Assignment 1', 10, null, 29);
myCourse.evaluations.push(anItem);
anItem = new EvaluationItem('Quiz 1', 5, null, 5);
myCourse.evaluations.push(anItem);

console.log(myCourse);
myCourse.getTotalWeight();
