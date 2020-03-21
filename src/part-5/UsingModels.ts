import Course from './model/Course';
import {checkFns,checkClass} from './util/index';


const tsCourse: Course = new Course(20,'Typescript from scratch');

checkClass(Course);
checkFns(Course);