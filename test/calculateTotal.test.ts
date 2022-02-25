import { describe, expect, test } from "vitest";
import { useHelpers } from "../index";

describe("total price calculator", () => {
  const { calculateTotal } = useHelpers();

  test("correctly adds numbers", async () => {
    expect(calculateTotal([{ price: 1 }, { price: 3 }])).toBe(4);
  });

  test("correctly adds floats", async () => {
    expect(calculateTotal([{ price: 1.95 }, { price: 4.8 }])).toBe(6.75);
  });

  test("throws error when no price field exists on the object", async () => {
    expect(() => {
      calculateTotal([{ priceFieldExists: false }]);
    }).toThrowError("price expected");
  });
});
