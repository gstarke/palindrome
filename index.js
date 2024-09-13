module.exports = Phrase;

// Reverses a string.
String.prototype.reverse = function reverse() {
    return Array.from(this).reverse().join("");
}

// Defines a Phrase object
function Phrase(content) {
    this.content = content;

    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() { 
        return this.letters().toLowerCase();
    }

    // Returns the letters in the content.
    this.letters = function letters() {
        return (this.content.match(/[a-z]/gi) || []).join("");
    }

    // Return true for a palindrome, false otherwise.
    this.palindrome = function palindrome() {
        if (this.letters()) {
            return this.processedContent() === this.processedContent().reverse();
        }
        else {
            return false;
        }
    }
}