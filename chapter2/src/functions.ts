function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void): void {
  const result = n1 + n2;
  cb(result);
}

console.log(addAndHandle(5, 7, printResult));
