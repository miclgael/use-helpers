import { describe, expect, test } from "vitest";
import { useHelpers } from "../useHelpers";

describe("slugs", () => {
  test("converts stupid sentence to clean slug", async () => {
    const { slugify } = useHelpers();
    const terribleTitle =
      "Stupidly long title with MIXed and special chars!@#$%";

    expect(slugify(terribleTitle)).toBe(
      "stupidly-long-title-with-mixed-and-special-chars"
    );
  });
});
