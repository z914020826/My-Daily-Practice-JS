const WordDictionary = function () {
  this.words = {};
};

WordDictionary.prototype.addWord = function (word) {
  const len = word.length;
  // 如果当前长度不存在，初始化数组
  if (this.words[len]) {
    this.words[len].push(word);
  } else {
    this.words[len] = [word];
  }
};
WordDictionary.prototype.search = function (word) {
  const len = word.length;

  if (!this.words[len]) {
    return false;
  }

  if (!word.includes(".")) {
    return this.words[len].includes(word);
  }
  const reg = new RegExp(word);
  return this.words[len].some((element) => {
    if (reg.test(element)) {
      return true;
    }
  });
};
let wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad"));
console.log(wordDictionary.search("bad"));
console.log(wordDictionary.search(".ad"));
console.log(wordDictionary.search("b.."));
