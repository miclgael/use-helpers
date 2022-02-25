import { describe, expect, test } from "vitest";
import { useHelpers } from "../index";

describe("excerptify", () => {
  const { excerptify } = useHelpers();
  const longString =
    "Vivamus ut pellentesque ante, sed porta velit. In ut aliquet diam. Donec ut leo nec massa mollis lacinia. Donec ut varius ex, non tincidunt diam. Vestibulum facilisis velit ut faucibus congue. Sed mi diam, eleifend id tempor sit amet, aliquet id ex. Vivamus aliquet dolor id tempus pretium. Praesent diam arcu, scelerisque at neque at, gravida egestas est. Praesent cursus congue eros, sed condimentum massa. Nunc erat lorem, efficitur ut tempor nec, feugiat sit amet massa. Integer vitae luctus mauris. Integer sit amet diam sed libero dignissim dignissim. Mauris pellentesque sagittis finibus. Sed gravida mi lacinia ex laoreet, in convallis odio congue. In dictum finibus urna, eget sollicitudin turpis mattis non.";

  const shortString = "hello, world!   ";

  test("truncates long string to given ranges", async () => {
    expect(excerptify(longString, 10)).toBe("Vivamus ut...");
    expect(excerptify(longString, 20)).toBe("Vivamus ut pellentes...");
  });

  test("default cut point works", async () => {
    expect(excerptify(longString)).toBe(
      "Vivamus ut pellentesque ante, sed porta velit. In ut aliquet diam. Donec ut leo nec massa mollis lacinia. Donec ut varius ex, non tincidunt diam. Vestibulum facilisis velit ut faucibus congue. Sed mi diam, eleifend id tempor sit amet, aliquet id ex. Vivamus aliquet dolor id tempus pretium. Praesent ..."
    );
  });

  test("does not modify string of same length as cutPoint", async () => {
    expect(excerptify(longString, longString.length)).toBe(longString);
  });

  test("trims excess space before truncating", async () => {
    expect(excerptify(shortString, 13)).toBe("hello, world!");
  });
});
