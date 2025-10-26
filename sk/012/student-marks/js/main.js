import '@picocss/pico/css/pico.css';
import { populateAbout } from './about-ui';
import { populateContent } from "./course-marks-ui";

// Setup of info about the project/website
fetch('./ReadMe.md')
    .then(response => response.text())
    .then(populateAbout);

fetch("./data/courses.json")
    .then((x) => x.json())
    .then(populateContent);
