//VERSION One
//module.exports = MessageMixer;
//VERSION Two
var MessageMixer = {};

//count the characters in a message
MessageMixer.countCharacter = function (inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count;
};

//capitalize the first character of words
MessageMixer.capitalizeFirstCharacterOfWords = function (string) {
  let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1);
    }
  return arr.join(" ");
};

//reverse a message's words in place
MessageMixer.reverseWord = function (word) {
  return word.split("").reverse().join("");
};

//reversing characters in place
MessageMixer.reverseAllWords = function (sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = MessageMixer.reverseWord(words[i]);
    }
   return words.join(" ");
};

//replace the first occurrence of a string
MessageMixer.replaceFirstOccurence = function (string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};

//replace all occurrences of a string
MessageMixer.replaceAllOccurrences = function (string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

//encode text by swapping certain characters for other characters
MessageMixer.encode = function (string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = MessageMixer.replaceAllOccurrences(string, key, replacementObject[key]);
    }
    return string;
};

//Return normal & reversed String
MessageMixer.palindrome = function (string) {
  return `${string} ${MessageMixer.reverseWord(string)}`
};

//return Sentence sticked together with Chartacter
MessageMixer.pigLatin = function (sentence, character) {
  var splitSentence = sentence.split(" ");
  return splitSentence.join(character + " ");
};

//console.log(MessageMixer.pigLatin("this is the sentence", "Z"));

export default MessageMixer;



//______________________Version Three__________________________________

/*

const countCharacter = function = (inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count;
};

const capitalizeFirstCharacterOfWords = function = (string) {
  let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1);
    }
  return arr.join(" ");
};


const reverseWord = function = (word) {
  return word.split("").reverse().join("");
};

const reverseAllWords = function = (sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseWord(words[i]);
    }
   return words.join(" ");
};


const replaceFirstOccurence = function = (string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};


const replaceAllOccurrences = function = (string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

const encode = function = (string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = replaceAllOccurrences(string, key, replacementObject[key]);
    }
    return string;
};
const palindrome = function = (string) {
  return `${string} ${reverseWord(string)}`
};

const pigLatin = function = (sentence, character) {
  var splitSentence = sentence.split(" ");
  return splitSentence.join(character + " ");
};

export { countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, replaceAllOccurrences, encode, palindrome, pigLatin };
*/
