import { expect } from 'chai';
import Node from '../lib/Node'
import Trie from '../lib/Trie';
import fs from 'fs';

describe('TRIE', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  describe('insert', () => {

  it('should have a root node that defaults to null', () => {
    expect(trie.root).to.equal(new Node());
  })

  it('should be able to take in a word', () => {

    trie.insert('hello');
    expect(trie.count).to.eq(1);
    trie.insert('granite');
    expect(trie.count).to.eq(2);
    trie.insert('good');
    // trie.insert('great')
  })
})


  describe('suggest', () => {

    it('should give you a suggestion based on a prefix', () => {

      trie.insert('brandon');
      trie.insert('brandlord');
      trie.insert('brand');

      // trie.suggest('bra');
      expect(trie.suggest('bra')).to.equal(['brand', 'brandon', 'brandlord'])



    })
  })

  describe('populate', () => {

    it('should populate my trie with my dictionary', () => {
      const text = "/usr/share/dict/words";
      const dictionary = fs.readFileSync(text).toString().trim().split('\n');

      trie.populate(dictionary);

      expect(trie.count).to.eq(235886)
    })
  })
});