import { readFiles } from "../readFiles";

async function adventDay1_part1(fileTxt: string): Promise<number> {
    const lines: string[] = await readFiles(fileTxt);
    let position: number = 50;
    let password: number = 0;

    for (let rotation of lines) {
        const side = rotation[0];
        const distance = parseInt(rotation.slice(1), 10);

        if (side === "L") {
            position = (position - distance) % 100;
            if (position < 0) position += 100;
        } else {
            position = (position + distance) % 100;
        }
        if (position === 0) ++password;
    }
    return password;
}

async function adventDay1_part2(fileTxt: string): Promise<number> {
    const lines: string[] = await readFiles(fileTxt);
    let position: number = 50;
    let password: number = 0;

    for (let rotation of lines) {
        const line = rotation.trim();
        if (line === "") continue;

        const side = rotation[0];
        const distance = parseInt(line.slice(1), 10);

        password += countZeroHits(position, distance, side);

        if (side === "L") {
            position = (position - distance) % 100;
            if (position < 0) position += 100;
        } else {
            position = (position + distance) % 100;
            position %= 100;
        }
    }

    return password;
}


function countZeroHits(position: number, distance: number, side: string): number {
    if (distance <= 0) return 0;

    let base: number;

    if (side === "R")
        base = (100 - position) % 100;
    else
        base = position % 100;

    if (base === 0)
        base = 100;
    
    if (base > distance) return 0;

    return 1 + Math.floor((distance - base) / 100);
}

adventDay1_part1("2025/AdventDay1/input.txt").then((result) => {
  console.log(`The result is: ${result}`);
});

adventDay1_part2("2025/AdventDay1/input.txt").then((result) => {
  console.log(`The result is: ${result}`);
});
