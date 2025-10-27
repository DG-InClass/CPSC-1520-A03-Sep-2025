/* UI Notes:
    - Making some presumptions about styling being based on PicoCSS
    - <section id="courses">
        - The container to be populated with information on each course
    - <template id="course-shell">
        - A template for each course. This is "bare-bones" in that it contains a <details> element with placeholders for the course name and code. Individual evaluation items would need to be dynamically appended to this HTML.
        - For information on using this, see [A more involved example](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots#a_more_involved_example)

    Here's an advanced example of the template, but with slots.
    ```html
        <template id="course-shell">
            <details>
                <summary><span class="course-code"></span> <span class="course-name"></span> &mdash; <span class="summary-marks"></span></summary>
                <section class="grid grid-col-4"></section>
                <hr />
            </details>
        </template>
    ```
*/
import { Course, EvaluationItem } from "./course-marks";

const populateContent = function(data) {
    // console.log('I got the data\n', data);
    let container = document.getElementById('courses');
    // console.log(container);
    
    // Let's loop through all of the courses in the data
    for(let index = 0; index < data.length; index ++) {
        let course = data[index];
        console.log(`Here is course # ${index + 1}\n`, course);
        // I want to build the HTML for the course
        let element = buildCourseElement(course);
        console.log(element);
        container.appendChild(element);
    }
}

const buildCourseElement = function(aSingleCourse) {
    // Convert the plain old JSON into an actual object
    aSingleCourse = Course.fromJsonObject(aSingleCourse);
    let template = document.getElementById('course-shell').content;
    let copy = template.cloneNode(true); // Make a copy of the template

    // let spanCode = copy.querySelector('.course-code');
    // // I want to add a text node to that span (using the DOM API)
    // let textCode = document.createTextNode(aSingleCourse.code);
    // //                                     \__ Course _/
    // spanCode.appendChild(textCode); 
    findAndFill(copy, '.course-code', aSingleCourse.code);
    findAndFill(copy, '.course-name', aSingleCourse.name);
    // Fixed: 🎉 
    findAndFill(copy, '.summary-marks', aSingleCourse.getTotalEarned());
    
    // Fill the <section class="grid"> with the details of the course evaluation items
    let grid = copy.querySelector(".grid");
    aSingleCourse.evaluations.forEach((item) => {
      grid.appendChild(createEvaluationItemElement(item));
    });    
    
    return copy;
}

const createEvaluationItemElement = function(/** @type {EvaluationItem} */ evalItem) {
    let div = document.createElement('div');
    // Fill it with information
    let name = evalItem.name;
    let weight = evalItem.weight;
    let earnedWeight = evalItem.getWeightedPercent();

    let text = `${name} - ${weight} % - ${earnedWeight ? earnedWeight.toFixed(1) : '(TBD)'}`;
    let textNode = document.createTextNode(text);
    div.appendChild(textNode);

    return div;
}

const findAndFill = function(container, selectorText, text) {
    let element = container.querySelector(selectorText);
    let textNode = document.createTextNode(text);
    element.appendChild(textNode);
}

export { populateContent }
