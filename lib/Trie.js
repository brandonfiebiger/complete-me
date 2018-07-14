import Node from './Node'

export default class Trie {
  constructor() {
    this.count = 0;
    this.root = new Node();
    // this.children = {};
  }

    insert(word) {
    // let letters = word.split('')
    let currNode = this.root;
    // let childNode = new Node();

    while(word.length) {
      if(!currNode.data[word[0]]) {
        currNode.data[word[0]] = new Node();
        currNode = currNode.data[word[0]]
        word = word.substr(1);
      } else if(currNode.data[word[0]]) {
        currNode = currNode.data[word[0]]
        word = word.substr(1);
      }
      
      if(!word.length) {
        this.count++
    console.log(JSON.stringify(this, 4, null))
        // return;
      }
    }
  }


}