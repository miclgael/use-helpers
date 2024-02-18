import { describe, expect, test } from "vitest"
import { useHelpers } from "../index"

describe("comma separator", () => {
  test("returns the string with lowercase matches", async () => {
    const { vocabToUppercase } = useHelpers()

    const words = "I love Mamp and Npm"
    const result = vocabToUppercase(words)

    expect(result).toBe("I love MAMP and NPM")
  })
})
