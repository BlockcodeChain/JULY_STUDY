


console.log(0.1+0.2===0.3)  //false

// floating point number me precision ka issue hota hai isliye 0.1+0.2===0.3 false return karega

// JavaScript uses the IEEE 754 double-precision floating-point format (64-bit) to represent all numbers. Many decimal fractions, such as 0.1 and 0.2, cannot be represented exactly in binary. This causes small rounding errors, so 0.1 + 0.2 becomes 0.30000000000000004 instead of exactly 0.3. Therefore, the comparison returns false.