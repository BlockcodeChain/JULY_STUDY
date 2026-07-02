// how would u handle high precision decimal math in js 

console.log("JavaScript stores numbers using the IEEE 754 double-precision floating-point format, so decimal values like 0.1 and 0.2 cannot always be represented exactly, leading to results such as 0.30000000000000004. For simple cases, I can scale values to integers or use Math.round()/toFixed(). For financial or high-precision calculations, I would use libraries like decimal.js or big.js to avoid floating-point precision errors.")


const result = (0.1 + 0.2).toFixed(2);

console.log(result);

const result2 = Math.round((0.1 + 0.2) * 100) / 100;

console.log(result2);