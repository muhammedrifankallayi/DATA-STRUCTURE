class Heap{
  constructor(){
    this.items=[]
  }
Insert(value){
  this.items.push(value)
  this.Shiftup(this.items.length-1)

}
dispalay(){
  console.log(this.items);
}

// BUILDING HEAP FROM BOTTOM TO TOP

Shiftup(n){
var parent = this.Parent(n)
if(this.items[parent]<this.items[n]){
this.swap(parent,n)
this.Shiftup(parent)
}
}

// BUILDING HEAP FROM TOP TO BOTTON


Shiftdown(n){
 const right  = this.RightChild(n)
 const left  = this.LeftChild(n)

 var large = (this.items[right]>this.items[left])?right:left
 if(this.items[n]<this.items[large]){
  this.swap(n,large)
  this.Shiftdown(large)
 }

}

// DELETING FROM THE TOP OF THE HEAP AND USING SHIFT-DOWN TO ARRANGE THE HEAP

Delete(){
  this.items[0] = this.items.pop()
  this.Shiftdown(0)
}

// TWO ARRAY MERGING WITH HEAP 

BuildHeap(Array,Array2){
  this.items = Array
  for (let i = Math.floor(Array.length / 2) - 1; i >= 0; i--) {
    this.Shiftdown(i);
  }
  for(let i = 0 ;i<Array2.length; i++){
    this.items.push(Array2[i])
    this.Shiftup(this.items.length-1)
  }
}

// TO FIND DEPTH OF THE HEAP TREE

Depth(index){
  
  if(index>=this.items.length || this.items[index]===null){
    return 0
  }

  let right = this.RightChild(index)
  let left  = this.LeftChild(index)

  const depth1 =   this.Depth(right)
   const depth2 =  this.Depth(left)

   return Math.max(depth1,depth2)+1


}


//  TOOLS 

Parent(child){
  return Math.floor((child-1)/2)
}
RightChild(parent){
   return parent*2+2
}
LeftChild(parent){
  return parent*2+1
}
swap(i,j){
  var temp = this.items[i]
  this.items[i]=this.items[j]
  this.items[j]=temp
}

}
const h = new Heap()


const a = [1,2,3,4,5]
const b = [6,7,8,9,10]

h.BuildHeap(a,b)
h.dispalay()
