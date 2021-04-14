module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  // Array.from() to support emojis.
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function() {
    return this.letters().toLowerCase();
  }

  this.letters = function() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function() {
    if (this.letters()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  }
}
