class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    // Insert an element into the max heap
    insert(element) {
      this.heap.push(element);
      this.heapifyUp();
    }
  
    // Remove and return the maximum element from the max heap
    extractMax() {
      if (this.isEmpty()) {
        return null;
      }
  
      const max = this.heap[0];
      const lastElement = this.heap.pop();
  
      if (!this.isEmpty()) {
        this.heap[0] = lastElement;
        this.heapifyDown();
      }
  
      return max;
    }
  
    // Restore the max heap property by moving the element up the heap
    heapifyUp() {
      let currentIndex = this.heap.length - 1;
  
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
  
        if (this.heap[currentIndex] <= this.heap[parentIndex]) {
          break;
        }
  
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      }
    }
  display(){
    console.log(this.heap);
  }
    // Restore the max heap property by moving the element down the heap
    heapifyDown() {
      let currentIndex = 0;
  
      while (true) {
        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;
        let maxIndex = currentIndex;
  
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
  
        if (maxIndex === currentIndex) {
          break;
        }
  
        this.swap(currentIndex, maxIndex);
        currentIndex = maxIndex;
      }
    }
  
    // Check if the max heap is empty
    isEmpty() {
      return this.heap.length === 0;
    }
  
    // Swap two elements in the heap
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  }
  
  // Example usage:
  const heap = new MaxHeap();
  heap.insert(45);
  heap.insert(20);
  heap.insert(39);
  heap.insert(3);
  heap.insert(5);
  heap.insert(10);
  
  heap.display()
  