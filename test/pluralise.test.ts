import { describe, expect, test } from "vitest";
import { useHelpers } from "../index";

describe("pluralise", () => {
  const { pluralise} = useHelpers();

  test("returns singular when number is 1", async () => {
    expect(pluralise(1, "item")).toBe("1 item");
  })
  test("returns plural when number is not 1", async () => {
    expect(pluralise(2, "item")).toBe("2 items");
  })
})