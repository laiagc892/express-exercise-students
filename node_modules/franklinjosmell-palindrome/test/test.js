const { AssertionError } = require("assert");
const assert = require("assert");
const Phrase = require("../index");

describe("Phrase", () => {
  describe("#palindrome", () => {
    it("should return false for a non-palindrome", () => {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palindrome", () => {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome", () => {
      let mixedCase = new Phrase("RaceCar");
      assert(mixedCase.palindrome());
    });

    it("should return true for a palindrome with punctuation", () => {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });

    it("should return false for an empty string", () => {
      let emptyPhrase = new Phrase("");
      assert(!emptyPhrase.palindrome());
    });
  });

  describe("#letters", () => {
    it("should return only letters", () => {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
    });

    it("should return the empty string on no match", () => {
      let noLetters = new Phrase("1234.56");
      assert.strictEqual(noLetters.letters(), "")
    });
  });
});
