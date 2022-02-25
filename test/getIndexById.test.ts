import { describe, expect, test } from "vitest";
import { useHelpers } from "../index";

describe("getIndexById function", () => {
  const { getIndexById } = useHelpers();

  test("returns a single object if `id` exists", async () => {
    expect(getIndexById("foo", [{ id: "foo" }])).toMatchObject({ id: "foo" });
  });

  test("returns undefined if no `id` exists", async () => {
    expect(getIndexById("bar", [{ nope: "no id property exists!" }])).toBe(
      undefined
    );
  });
});
