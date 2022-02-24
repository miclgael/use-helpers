import { describe, expect, test } from "vitest";
import { useHelpers } from "../useHelpers";

describe("pretty date function", () => {
  test("converts date object to pretty formatted date", async () => {
    const { prettyDate } = useHelpers();
    expect(prettyDate(new Date("2022-02-24"))).toBe(
      "Thursday, 24 February 2022"
    );
  });
});
