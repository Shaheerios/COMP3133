import { expect } from "chai";
import * as calculator from "../calculator.mjs";

describe("Calculator Tests", () => {
  // Test cases for addition
  it("add(5, 2) expected result 7", () => {
    const num1 = 5;
    const num2 = 2;
    const expected = 7;
    const result = calculator.add(num1, num2);
    const status = result === expected ? "PASS" : "FAIL";
    console.log(`add(${num1}, ${num2}) expected result ${expected} (${status})`);
    expect(result).to.equal(expected); // This asserts the test
  });

  it("add(5, 2) expected result 8", () => {
    const num1 = 5;
    const num2 = 2;
    const expected = 8;
    const result = calculator.add(num1, num2);
    const status = result === expected ? "PASS" : "FAIL";
    console.log(`add(${num1}, ${num2}) expected result ${expected} (${status})`);
    expect(result).to.equal(expected); // This asserts the test
  });

  // Test cases for subtraction
  it("sub(5, 2) expected result 3", () => {
    const num1 = 5;
    const num2 = 2;
    const expected = 3;
    const result = calculator.sub(num1, num2);
    const status = result === expected ? "PASS" : "FAIL";
    console.log(`sub(${num1}, ${num2}) expected result ${expected} (${status})`);
    expect(result).to.equal(expected); // This asserts the test
  });

  it("sub(5, 2) expected result 5", () => {
    const num1 = 5;
    const num2 = 2;
    const expected = 5;
    const result = calculator.sub(num1, num2);
    const status = result === expected ? "PASS" : "FAIL";
    console.log(`sub(${num1}, ${num2}) expected result ${expected} (${status})`);
    expect(result).to.equal(expected); // This asserts the test
  });

  // Test cases for multiplication
  it("mul(5, 2) expected result 10", () => {
    const num1 = 5;
    const num2 = 2;
    const expected = 10;
    const result = calculator.mul(num1, num2);
    const status = result === expected ? "PASS" : "FAIL";
    console.log(`mul(${num1}, ${num2}) expected result ${expected} (${status})`);
    expect(result).to.equal(expected); // This asserts the test
  });

  it("mul(5, 2) expected result 12", () => {
    const num1 = 5;
    const num2 = 2;
    const expected = 12;
    const result = calculator.mul(num1, num2);
    const status = result === expected ? "PASS" : "FAIL";
    console.log(`mul(${num1}, ${num2}) expected result ${expected} (${status})`);
    expect(result).to.equal(expected); // This asserts the test
  });

  // Test cases for division
  it("div(10, 2) expected result 5", () => {
    const num1 = 10;
    const num2 = 2;
    const expected = 5;
    const result = calculator.div(num1, num2);
    const status = result === expected ? "PASS" : "FAIL";
    console.log(`div(${num1}, ${num2}) expected result ${expected} (${status})`);
    expect(result).to.equal(expected); // This asserts the test
  });

  it("div(10, 2) expected result 2", () => {
    const num1 = 10;
    const num2 = 2;
    const expected = 2;
    const result = calculator.div(num1, num2);
    const status = result === expected ? "PASS" : "FAIL";
    console.log(`div(${num1}, ${num2}) expected result ${expected} (${status})`);
    expect(result).to.equal(expected); // This asserts the test
  });
});
