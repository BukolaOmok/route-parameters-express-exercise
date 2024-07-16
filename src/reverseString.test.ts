import { reverseString } from "./reverseString";
import {test, expect} from "vitest";

test ("reverse string", () => {
    expect(reverseString("bukola")).toBe("alokub")
});

test ("reverse string", () => {
    expect(reverseString("neill")).toBe("llien")
});