import { sum } from "../sum"

test("Sum Function should calculate the sum of two numbers", () => {
    const result = sum(2, 2);
    //Assertion
    expect(result).toBe(4);
})