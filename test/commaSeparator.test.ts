import { describe, expect, test } from "vitest";
import { useHelpers } from "../useHelpers";

describe("comma separator", () => {
  test("basic test", async () => {
    const { commaSeparator } = useHelpers();
    expect(commaSeparator(["hello", "world", "foo"], 0)).toBe(", ");
    expect(commaSeparator(["hello", "world", "foo"], 1)).toBe(" and ");
    expect(commaSeparator(["hello", "world", "foo", "bar"], 2)).toBe(" and ");
  });
});
