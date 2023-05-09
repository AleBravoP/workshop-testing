import {expect, test} from "vitest"
import { palindrome } from "./palindrome"
/*test("palindrome", () => {
    const result = palindrome("testing")
    expect(result).toBe("gnitset")
})
test("palindrome", () => {
    const result = palindrome("testing")
    expect(result).toBe("gnitset")
})
test("palindrome", () => {
    const result = palindrome("")
    expect(result).toBe("")
})
//test("palindrome", () => {
   // const result = palindrome("testing")
    // expect(result).toBe("gnitset")
//})*/
describe("palindrome"), () => {
    test("of emty string", () => {
        const result = palindrome("")
        expect(result).toBe("")
    })
    test("of string with spaces", () => {
        const result = palindrome("workshop testing")
        expect(result).toBe("gnitset pohskrow")
    })
    test("of string", () => {
        const result = palindrome("workshop testing")
        expect(result).toBe("gnitset pohskrow")
    })
 })