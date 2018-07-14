import Node from './Node'

export default class Trie {
  constructor() {
    this.count = 0;
    this.root = new Node();
    this.suggestions = [];
    // this.children = {};
  }

    insert(word) {
    let currNode = this.root;

    let tempWord = word
    while(tempWord.length) {
      if(!currNode.data[tempWord[0]]) {
        currNode.data[tempWord[0]] = new Node(tempWord[0]);
        currNode = currNode.data[tempWord[0]]
        tempWord = tempWord.substr(1);
      } else if(currNode.data[tempWord[0]]) {
        currNode = currNode.data[tempWord[0]]
        tempWord = tempWord.substr(1);
      }
      
      if(!tempWord.length) {
        this.count++
        currNode.endOfWord = word

      }
    }
  }

  suggest(string) {

    this.suggestions = [];

    let currNode = this.root.data[string[0]];
    for(let i = 0; i < string.length - 1; i++) {
      currNode = currNode.data[string[i + 1]]
    }
      this.recursiveSuggest(currNode);
      return this.suggestions;
  }

  recursiveSuggest(currNode) {
    if(currNode.endOfWord){
      this.suggestions.push(currNode.endOfWord);
    } 
    if(!Object.keys(currNode.data).length) {
      return
    }
    Object.keys(currNode.data).forEach(node => {
      this.recursiveSuggest(currNode.data[node]);
    })

  }

  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word);
    })
  }

  


}