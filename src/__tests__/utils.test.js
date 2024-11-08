// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("should return true if the word is a palindrome", () => {
    const palindrome = "mom";

    const result = isPalindrome(palindrome);

    expect(result).toBe(true);
  });

  it("should return false if the word is not a palindrome", () => {
    const nonPalindrome = "hello";

    const result = isPalindrome(nonPalindrome);

    expect(result).toBe(false);
  });
});
