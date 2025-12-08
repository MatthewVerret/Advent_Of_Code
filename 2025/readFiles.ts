import { promises as fs } from "fs";

export async function readFiles(fileTxt: string): Promise<string[]> {
  const data = await fs.readFile(fileTxt, "utf8");
  return data.split(/\r?\n/);
}

export async function readFileAndSeperateByComma(fileTxt: string): Promise<string[]> {
  const data = await fs.readFile(fileTxt, "utf8");

  return data
    .trim()
    .split(",")
    .flatMap(range => range.split("-"));
}

