import { expect } from 'chai';
import Node from '../lib/Node'
import Trie from '../lib/Trie';

describe('TRIE', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should have a root node that defaults to null', () => {
    expect(trie.root).to.equal(null);
  })

  it.only('should be able to take in a word', () => {

    trie.insert('hello');
    expect(trie.count).to.eq(1);
    trie.insert('granite');
    expect(trie.count).to.eq(2);
    trie.insert('good');
    // trie.insert('great')
  })

});