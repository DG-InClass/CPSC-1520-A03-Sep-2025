/**
 * Constructs a Course object with an empty array of evaluations.
 * @param {string} code The course code (e.g.: 'PROG-0101')
 * @param {string} name The course name (e.g.: 'JavaScript Fundamentals')
 */
const Course = function(code, name) {
    // Information
    this.code = code;
    this.name = name;
    this.evaluations = [];
    // Behaviours
    this.getTotalWeight = function() {
        let total = 0;
        for(let index = 0; index < this.evaluations.length; index++) {
            let item = this.evaluations[index];
            total = total + item.weight;
        }
        return total;
    }

    this.getTotalEarned = function() {
        let earnedTotal = 0;
        for(let index = 0; index < this.evaluations.length; index++) {
            let item = this.evaluations[index];
            let earned = item.getWeightedPercent();
            if(!isNaN(earned)) {
                earnedTotal += earned;
            }
        }
        return earnedTotal;
    }

    this.getTotalUnmarked = function() {
        let unmarked = 
            this.evaluations
            .filter(function(item) {
                let isUnmarked = 
                    (item.earned === null);
                return isUnmarked; // true | false
            });

        let total = 0;
        for(let i = 0; i < unmarked.length; i++) {
            let item = unmarked[i];
            total = total + item.weight;
        }
        return total;
    }
} // end of Course() constructor function

/**
 * This function is intended for converting a plain object (such as one parsed from a JSON string) into a Course object.
 * @param {object} obj An object expected to match the structure of Course objcts
 * @returns Course
 */
Course.fromJsonObject = function(obj) {
    let course = new Course(obj.code, obj.name);
    obj.evaluations.forEach(item => {
        course.evaluations.push(new EvaluationItem(item.name, item.weight, item.earned, item.possible));
    });
    return course;
}

/**
 * Constructs an EvaluationItem object with or without details on the earned/possible points.
 * @param {string} name The name of the evaluation item (e.g.: 'Lab 1')
 * @param {number} weight The weight of the evaluation item within the course
 * @param {number | null} earned The points earned on the marked evaluation item
 * @param {number | null} possible The total possible points that can be earned on the evaluation item
 */
const EvaluationItem = function(name, weight, earned, possible) {
    this.name = name;
    this.weight = weight;
    // ??   - Null Coalescing Operator
    this.earned = earned ?? null;
    // ? :  - Ternary Operator
    this.possible = possible ? possible : null;

    this.getPercent = function() {
        let result;
        if(this.earned === null) {
            result = null;            
        } else {
            result = this.earned / this.possible;
            result = result * 100;
        }
        return result;
    }

    this.getWeightedPercent = function() {
        // TODO: See if you can complete this
        // e.g.: 12/20 is 60%, and for a 10% item, I have earned 6% towards my final grade.
        let result = this.getPercent();
        if(result !== null) {
            result = result * this.weight / 100;
        }
        return result;
    }
}

export { Course, EvaluationItem }
