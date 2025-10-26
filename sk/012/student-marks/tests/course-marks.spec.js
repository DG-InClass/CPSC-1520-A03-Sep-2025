import { describe, it, expect } from 'vitest';
import { Course, EvaluationItem } from '../js/course-marks';

/*
  it.todo("", () => {
    // Arrange
    // Act
    // Assert
  });
*/


describe("EvaluationItem should", () => {
    /*
    preserve name
    preserve weight
    preserve earned points
    preserve total points

    calculate percent
    calculate weighted percent

    reject invalid name
    reject invalid weight
    reject invalid earned points
    reject invalid total points
    */
  it("preserve name", () => {
    // Arrange
    let name = 'Lab 1';
    // Act
    let actual = new EvaluationItem(name, 20);
    // Assert
    expect(actual.name).toBe(name);
  });

  it("preserve weight", () => {
    // Arrange
    let weight = 15;
    // Act
    let actual = new EvaluationItem('Quiz 1', weight);
    // Assert
    expect(actual.weight).toBe(weight);
  });
  
  it("preserve earned points", () => {
    // Arrange
    let earned = 12;
    // Act
    let actual = new EvaluationItem('Lab 2', 10, earned, 20);
    // Assert
    expect(actual.earned).toBe(earned);
  });

  it("preserve total points", () => {
    // Arrange
    let possible = 20;
    // Act
    let actual = new EvaluationItem('Lab 3', 10, 15, possible);
    // Assert
    expect(actual.possible).toBe(possible);
  });

  it.each([
    { earned: 12, possible: 20, expected: 60 },
    { earned: null, possible: 20, expected: null }
  ])
  ("calculate $expected percent from $earned / $possible", ({earned, possible, expected}) => {
    // Arrange
    // Act
    let actual = new EvaluationItem('Quiz 2', 10, earned, possible);
    // Assert
    expect(actual.getPercent()).toBe(expected);
  });

  it.each([
    { weight: 10, earned: 12, possible: 20, expected: 6 },
    { weight: 10, earned: null, possible: 20, expected: null }
  ])
  ("calculate $expected weighted percent from $earned / $possible on weight $weight", ({weight, earned, possible, expected}) => {
    // Arrange
    // Act
    let actual = new EvaluationItem('Quiz 3', weight, earned, possible);
    // Assert
    expect(actual.getWeightedPercent()).toBe(expected);
  });

  it.todo("reject invalid name", () => {
    // Arrange
    // Act
    // Assert
  });


  it.todo.each([
    { given: undefined, expected: null },
    { given: null, expected: null }
  ])
  ("treat $given as $expected for earned points", ({given, expected}) => {
    // Arrange
    let item = new EvaluationItem('Quiz 1', 15, given, null);
    // Act
    let actual = item.earned;
    // Assert
    expect(actual).toBe(expected);
  });

  it.todo.each([
    { given: undefined, expected: null },
    { given: null, expected: null },
  ])("treat $given as $expected for possible points", ({ given, expected }) => {
    // Arrange
    let item = new EvaluationItem("Quiz 1", 15, null, given);
    // Act
    let actual = item.earned;
    // Assert
    expect(actual).toBe(expected);
  });


  it.todo("reject invalid weight", () => {
    // Arrange
    // Act
    // Assert
  });
  it.todo("reject invalid earned points", () => {
    // Arrange
    // Act
    // Assert
  });
  it.todo("reject invalid total points", () => {
    // Arrange
    // Act
    // Assert
  });
});

describe("Course should", () => {
  it("preserve course code", () => {
    // Arrange
    let name = 'JavaScript Fundamentals';
    let code = 'PROG-0101';
    // Act
    let actual = new Course(code, name);
    // Assert
    expect(actual.code).toBe(code);
  });

  it("preserve course name", () => {
    // Arrange
    let name = 'JavaScript Fundamentals';
    let code = 'PROG-0101';
    // Act
    let actual = new Course(code, name);
    // Assert
    expect(actual.name).toBe(name);
  });
  /*
    preserve course code
    preserve course name

    be incomplete (no evaluations) when constructed
    add evaluation item
    calculate total course weight of evaluations
    be complete when course weight is 100%
    
    reject empty course code
    reject empty course name
    reconstruct from object
  */
    it("be incomplete (no evaluations) when constructed", () => {
      // Arrange
      // Act
      let actual = new Course('PROG-1101', 'TDD With JavaScript');
      // Assert
      expect(actual.evaluations.length).toBe(0);
    });

    it("add evaluation item", () => {
      // Arrange
      let course = new Course('PROG-1101', 'TDD With JavaScript');
      let item = new EvaluationItem('Lab 1', 15);
      // Act
      course.evaluations.push(item);
      // Assert
      expect(course.evaluations.length).toBe(1);
    });

    it("calculate total course weight of evaluations", () => {
      // Arrange
      let course = new Course("PROG-1101", "TDD With JavaScript");
      course.evaluations.push(new EvaluationItem("Lab 1", 10));
      course.evaluations.push(new EvaluationItem("Lab 2", 15));
      course.evaluations.push(new EvaluationItem("Lab 3", 20));
      course.evaluations.push(new EvaluationItem("Lab 4", 25));
      // Act
      let actual = course.getTotalWeight();
      // Assert
      expect(actual).toBe(70);
    });

    it("calculate total earned weight to date", () => {
      // Arrange
      let course = new Course("PROG-1101", "TDD With JavaScript");
      // All earned points work out to 50%, over 40% of the course
      let expected = 20; // 5 + 7.5 + 7.5
      course.evaluations.push(new EvaluationItem("Lab 1", 10, 12.5, 25));
      course.evaluations.push(new EvaluationItem("Lab 2", 15, 20, 40));
      course.evaluations.push(new EvaluationItem("Lab 3", 20));
      course.evaluations.push(new EvaluationItem("Lab 4", 25));
      course.evaluations.push(new EvaluationItem("Quiz 1", 15, 12.5, 25));
      course.evaluations.push(new EvaluationItem("Quiz 2", 15));
      // Act
      let actual = course.getTotalEarned();
      // Assert
      expect(actual).toBe(expected);
    })

    it("calculate remaining (unmarked) weight to date", () => {
      // Arrange
      let course = new Course("PROG-1101", "TDD With JavaScript");
      // All earned points work out to 50%, over 60% of the course
      let expected = 40; // 25 + 15
      course.evaluations.push(new EvaluationItem("Lab 1", 10, 12.5, 25));
      course.evaluations.push(new EvaluationItem("Lab 2", 15, 20, 40));
      course.evaluations.push(new EvaluationItem("Lab 3", 20, 23, 46));
      course.evaluations.push(new EvaluationItem("Lab 4", 25));
      course.evaluations.push(new EvaluationItem("Quiz 1", 15, 12.5, 25));
      course.evaluations.push(new EvaluationItem("Quiz 2", 15));
      // Act
      let actual = course.getTotalUnmarked();
      // Assert
      expect(actual).toBe(expected);
    });

    it.todo("be complete when course weight is 100%", () => {
      // Arrange
      // Act
      // Assert
    });

  it.todo("reject empty course code", () => {
    // Arrange
    // Act
    // Assert
  });

  it.todo("reject empty course name", () => {
    // Arrange
    // Act
    // Assert
  });

  it.todo("have zero evaluations", () => {
    // Arrange
    // Act
    // Assert
  });

  it("reconstruct from object", () => {
    // Arrange
    let given = {
        "code": "PROG-0101",
        "name": "JavaScript Fundamentals",
        "evaluations": [
            { "name": "Lab 1", "weight": 10, "earned": null, "possible": 1 },
            { "name": "Lab 2", "weight": 10, "earned": null, "possible": 1 },
            { "name": "Lab 3", "weight": 10, "earned": null, "possible": 1 },
            { "name": "Lab 4", "weight": 10, "earned": null, "possible": 1 },
            { "name": "Quiz 1", "weight": 20, "earned": null, "possible": 5 },
            { "name": "Quiz 2", "weight": 20, "earned": null, "possible": 5 },
            { "name": "Quiz 3", "weight": 20, "earned": null, "possible": 5 }
        ]
    }

    // Act
    let actual = Course.fromJsonObject(given);
    // Assert
    expect.soft(actual.code).toBe("PROG-0101");
    expect.soft(actual.name).toBe("JavaScript Fundamentals");
    expect.soft(actual.getTotalWeight()).toBe(100);
  });
});
