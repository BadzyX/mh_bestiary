import path from "path";
import fs from "fs";

export const getFakeData = (filename: string): [] => {
    const filePath: string = path.join(process.cwd(), "data", filename);
    const jsonData: string = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(jsonData);
}