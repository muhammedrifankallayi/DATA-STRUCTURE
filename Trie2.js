class Node {
    constructor() {
      this.children = {};
      this.end = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new Node();
    }
  
    insert(word) {
      for (let i = 0; i < word.length; i++) {
        this.populatePrefix(word, i);
      }
    }
  
    populatePrefix(word,index){
                let current=this.root
                for(let i=0;i<=index;i++){
                    let char=word[i]
                    if(!current.children[char]){
                        current.children[char]=new Node()
                    }
                    current=current.children[char]
                   
                }
                current.end=true
            }
  
    contains(word) {
      let current = this.root;
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!current.children[char]) {
          return false;
        }
        current = current.children[char];
      }
      return current.end;
    }
    startwith(word){
let curr = this.root

        for(let i =0 ;i<word.length; i++){
         let char  = word[i]
         if(!curr.children[char]){
            return false
         }
         curr = curr.children[char]
        }
        return this.getfull(word,curr)
      }
      
getfull(word,node){
    
  let curr = node
  
 
  for(let char in curr.children){
    curr = curr.children[char]
   return this.getfull(word+char,curr)
  }
  return word

}


findLongestCommonPrefix() {
    let current = this.root;
    let prefix = '';
    while (Object.keys(current.children).length === 1) {
      let char = Object.keys(current.children)[0];
    
      prefix += char;
      current = current.children[char];
    }
    return prefix
  }


  }

  
  const t = new Trie();
  
//t.insert('Aack');
  t.insert("AHAMADABAAD")
  t.insert("AHAmmed")
  t.insert("AHLia")

  console.log(t.contains('ja')); 
  console.log(t.contains('AHA'));
  console.log(t.findLongestCommonPrefix());
