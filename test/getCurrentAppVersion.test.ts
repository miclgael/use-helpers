import { describe, expect, test } from "vitest";
import { useHelpers } from "../index";

describe("getCurrentAppVersion", () => {
  test("relative path is equal to this package's current version", async () => {
    const { getCurrentAppVersion } = useHelpers();
    expect(getCurrentAppVersion(".")).toBe(process.env.npm_package_version);
  });

  test("relative path is the default", async () => {
    const { getCurrentAppVersion } = useHelpers();
    expect(getCurrentAppVersion()).toBe(process.env.npm_package_version);
  });

  test("providing process.env.PWD also works", async () => {
    const { getCurrentAppVersion } = useHelpers();
    expect(getCurrentAppVersion(process.env.PWD)).toBe(
      process.env.npm_package_version
    );
  });
});
