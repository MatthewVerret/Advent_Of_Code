import { readFileAndSeperateByComma } from "../readFiles";

async function adventDay2_part1(fileTxt: string): Promise<number> {
    const lines: string[] = await readFileAndSeperateByComma(fileTxt);
    let resultsInvalidIDs: number = 0;

    for (let i = 0; i < lines.length; i += 2) {
        const start = Number(lines[i]);
        const end = Number(lines[i + 1]);

        for (let id = start; id <= end; ++id) {
            const s = id.toString();

            if (s.length % 2 !== 0) continue;

            const mid = s.length / 2;
            if (s.slice(0, mid) === s.slice(mid)) {
                resultsInvalidIDs += id;
            }
        }
    }

  return resultsInvalidIDs;
}

async function adventDay2_part2(fileTxt: string): Promise<number> {
    const lines: string[] = await readFileAndSeperateByComma(fileTxt);
    let resultsInvalidIDs: number = 0;

    for (let i = 0; i < lines.length; i += 2) {
        const start = Number(lines[i]);
        const end = Number(lines[i + 1]);

        for (let id = start; id <= end; ++id) {
            const s = id.toString();
            const len = s.length;

            let isInvalid = false;

            for (let blockLen = 1; blockLen <= Math.floor(len / 2); blockLen++) {
                if (len % blockLen !== 0) continue; // must divide evenly

                const pattern = s.slice(0, blockLen);
                let ok = true;

                for (let pos = blockLen; pos < len; pos += blockLen) {
                    if (s.slice(pos, pos + blockLen) !== pattern) {
                        ok = false;
                        break;
                    }
                }

                if (ok) {
                    isInvalid = true;
                    break;
                }
            }

            if (isInvalid) {
                resultsInvalidIDs += id;
            }
        }
    }

    return resultsInvalidIDs;
}



adventDay2_part1("2025/AdventDay2/input.txt").then((result) => {
  console.log(`The result is of part 1: ${result}`);
});

adventDay2_part2("2025/AdventDay2/input.txt").then((result) => {
  console.log(`The result is of part 2: ${result}`);
});
