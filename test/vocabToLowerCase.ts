import { describe, expect, test } from "vitest"
import { useHelpers } from "../index"

describe("comma separator", () => {
  test("returns the string with lowercase matches", async () => {
    const { vocabToLowercase } = useHelpers()

    const words = "Www.michaelgale.dev github.com/Miclgael"
    const result = vocabToLowercase(words)

    expect(result).toBe("www.michaelgale.dev github.com/miclgael")
  })
})
