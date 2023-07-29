// class hash{
// constructor(size){
//     this.items = new Array(size)
//     this.size = size
// }
// hash(key){
  
//     let total =0
//     for(let i=0;i<key.length;i++){
//      total+= key.charCodeAt(i)
//     }
//     console.log(total%this.size);
// return total%this.size
// }

// push(key,value){
// const index = this.hash(key)
// this.items[index]=
// }



// }
// const hashs = new hash(50)
// hashs.hash('hello')


class HashTable {
    constructor(size) {
      this.size = size;
      this.table = new Array(size);
    }
  
    _hash(key) {
      let hash = 0; 
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      console.log(hash);
    
      return hash % this.size;
    }
  
    set(key, value) {
      const index = this._hash(key);
      if (!this.table[index]) {
        this.table[index] = [];
      }
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    }
  
    get(key) {
      const index = this._hash(key);
      if (!this.table[index]) {
        return undefined;
      }
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
      return undefined;
    }
  
    remove(key) {
      const index = this._hash(key);
      if (!this.table[index]) {
        return;
      }
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          return;
        }
      }
    }
  }

  
  const sh = new HashTable(10)
  sh.set('name','rifan')
  sh.set(9,18)
  sh.set('mane','rash')
 console.log( sh.get('name'));