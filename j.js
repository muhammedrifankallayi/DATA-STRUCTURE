class Trie{
    constructor(){
        this.child={}
        this.end=false
    }
}

class SubTrie{
    constructor(){
        this.root= new Trie()
    }

add(word){
 
for(let i =0; i<word.length ;i++ ){
this.Prefix(word,i)
}

}

Prefix(word,size){
    let curr= this.root
for(let i=0;i<=size;i++){
    let char = word[i]
    if(!curr.child[char]){
        curr.child[char]= new Trie()
    }
}
curr.end=true
}

search(word){
    let curr  = this.root
    for(let i = 0 ; i<word.length ;i++){
        let char = word[i]
        if(!curr.child[char]){
            return false
        }
    }
    return curr.end
}


}

const trie = new SubTrie()
trie.add("hello")
console.log(trie.search("rifan"));
trie.add("Hakim")
console.log();
