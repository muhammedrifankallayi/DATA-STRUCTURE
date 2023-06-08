class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this.upshift(this.heap.length - 1);
    }
  
    delete() {
      if (this.isEmpty()) {
        return null;
      }
      const root = this.heap[0];
      const lastElement = this.heap.pop();
      if (!this.isEmpty()) {
        this.heap[0] = lastElement;
        this.downshift(0);
      }
      return root;
    }
  
    upshift(index) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (index > 0 && this.heap[index] > this.heap[parentIndex]) {
        let temp=this.heap[index]
        this.heap[index]= this.heap[parentIndex]
        this.heap[parentIndex]= temp
        
        this.upshift(parentIndex);
      }
    }
  
    downshift(index) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let maxIndex = index;
  
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] > this.heap[maxIndex]
      ) {
        maxIndex = leftChildIndex;
      }
  
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[maxIndex]
      ) {
        maxIndex = rightChildIndex;
      }
  
      if (index !== maxIndex) {
        let temp = this.heap[index]
        this.heap[index] = this.heap[maxIndex]
        this.heap[maxIndex] = temp
      
        this.downshift(maxIndex);
      }
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  add(val){
    this.heap.unshift(val)
  }
    print() {
      console.log(this.heap);
    }
  }
  
  // Usage example
  const heap = new MaxHeap();
  heap.insert(7);
  heap.insert(8);
  heap.insert(4);
  heap.insert(78);
  heap.insert(9);
  heap.delete()
 
//   heap.insert(45);
//   heap.insert(39);

  heap.print(); // [20, 10, 5, 3]
  
 
  const numbers = [1, 2, 5, 11, 7, 9];

const hasEvenNumber = numbers.some(function(element) {
  return element % 2 === 0;
});

console.log(hasEvenNumber); // Output: true
