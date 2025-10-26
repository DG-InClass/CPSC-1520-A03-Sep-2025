// This is a JavaScript module that contains Constructor Functions for our course information.

const Course = function(courseCode, name) {
    // Properties (information) - What the object "looks like"
    this.code = courseCode;
    this.name = name;
    this.evaluations = [];
    // Functions (behaviours) - How the object "works"
    this.getTotalWeight = function() {
        let total = 0;
        for(let index = 0; index < this.evaluations.length; index++) {
            let item = this.evaluations[index];
            total = total + item.weight;
        }
    }
}

const EvaluationItem = function(name, weight, earned, possible) {
    this.name = name;
    this.weight = weight;
    this.earned = earned;
    this.possible = possible;
}

// We share our objects and functions using the export keyword
export { Course, EvaluationItem }
