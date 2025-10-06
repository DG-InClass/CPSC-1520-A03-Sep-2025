/**
 * Get a nice description of the value. Send in any variable, value, or expression, and I will simply tell you what the value is.
 * 
 * Great for understanding what you are using for your conditional expression in if/else statements.
 * @param {*} value Any value or expression
 * @returns {string} A description of the data type
 */
export function describeDataType(value) {
  let result;
  if (value == undefined || value == null) {
    result = `The value is ${value}`;
  } else {
    result = `The data type is ${value.constructor.name}`;
  }
  return result;
};

/**
 * Just the data type name - nothing more.
 * @param {*} value Any value or expression
 * @returns {string} The data type name
 */
export function getDataType(value) {
  let result;
  if (value == undefined || value == null) {
    result = `${value}`; // as a string
  } else {
    result = value.constructor.name;
  }
  return result;
};

/**
 * Find out what kind of conditional expression you have.
 * @param {*} expression Any conditional expression
 * @returns {string} `true`/`false`, or its equivalent
 */
export function ify(expression) {
  let result;
  let type = typeof expression;
  if (type === "boolean") {
    result = expression;
  } else if (expression) {
    result = `truthy`;
  } else {
    result = `falsy`;
  }
  return result;
};
