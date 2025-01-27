export function add(i, j) {
    return i + j;
  }
  
  export function sub(i, j) {
    return i - j;
  }
  
  export function mul(i, j) {
    return i * j;
  }
  
  export function div(i, j) {
    if (j === 0) throw new Error("Division by zero is not allowed.");
    return i / j;
  }  