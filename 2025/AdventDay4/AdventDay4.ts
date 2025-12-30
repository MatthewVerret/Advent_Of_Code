import { readFiles } from "../readFiles";

const DIRECTIONS: Array<[number, number]> = [ [-1, -1], [-1, 0], [-1, 1], [ 0, -1], [ 0, 1], [ 1, -1], [ 1, 0], [ 1, 1]];
const PAPER_ROLL = "@";
const MAX_ADJACENT = 4;

function inBounds(r: number, c: number, lines: string[]): boolean {
    return r >= 0 && r < lines.length && c >= 0 && c < lines[r].length;
}

function countAdjacentAt(r: number, c: number, lines: string[]): boolean {
    if (lines[r][c] !== PAPER_ROLL) return false;
    let count = 0;
    for (const [dir_r, dir_c] of DIRECTIONS) {
        const nr = r + dir_r, nc = c + dir_c;
        if (inBounds(nr, nc, lines) && lines[nr][nc] === PAPER_ROLL) ++count;
    }
    return count < MAX_ADJACENT;
}

async function adventDay4_part1(fileTxt: string): Promise<number> {
    const lines = await readFiles(fileTxt);
    let paperRollCount = 0;

    for (let r = 0; r < lines.length; ++r) {
        for (let c = 0; c < lines[r].length; ++c) {
            if (countAdjacentAt(r, c, lines)) ++paperRollCount;
        }
    }
    return paperRollCount;
}

adventDay4_part1("2025/AdventDay4/input.txt").then((result) => {
    console.log(`The result is: ${result}`);
});
