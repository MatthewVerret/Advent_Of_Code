import { readFiles } from "../readFiles";

async function adventDay3(fileTxt: string, numToKeep: number): Promise<number> {
  const lines: string[] = await readFiles(fileTxt);
  let totalJoltage = 0;

  for (const line of lines) {
    const digits: string = line.trim();
    const remove: number = digits.length - numToKeep;
    let toRemove: number = remove;
    const stack: string[] = [];

    for (let i = 0; i < digits.length; i++) {
      const currBatterie = digits[i];

      while (toRemove > 0 && stack.length > 0 && stack[stack.length - 1] < currBatterie 
                          && stack.length - 1 + (digits.length - i) >= numToKeep) {
        stack.pop();
        --toRemove;
      }

      stack.push(currBatterie);
    }
    const best = stack.slice(0, numToKeep).join("");

    totalJoltage += Number(best);
  }

  return totalJoltage;
}

adventDay3("2025/AdventDay3/input.txt", 2).then((result) => {
  console.log(`The result is of part 1: ${result}`);
});

adventDay3("2025/AdventDay3/input.txt", 12).then((result) => {
  console.log(`The result is of part 2: ${result}`);
});