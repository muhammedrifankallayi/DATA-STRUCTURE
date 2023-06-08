function heapSort(array) {
    // Build max heap
    buildMaxHeap(array);
    
    // Heapify and extract elements
    for (let i = array.length - 1; i > 0; i--) {
      // Swap the root (maximum element) with the last element
      swap(array, 0, i);
      
      // Heapify the reduced heap
      heapify(array, 0, i);
    }
    
    return array;
  }
  
  function buildMaxHeap(array) {
    const n = array.length;
    
    // Heapify from the last non-leaf node up to the root
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(array, i, n);
    }
    console.log(array);
  }
  
  function heapify(array, index, heapSize) {
    const leftChildIdx = 2 * index + 1;
    const rightChildIdx = 2 * index + 2;
    let largest = index;
    
    // Compare with left child
    if (leftChildIdx < heapSize && array[leftChildIdx] > array[largest]) {
      largest = leftChildIdx;
    }
    
    // Compare with right child
    if (rightChildIdx < heapSize && array[rightChildIdx] > array[largest]) {
      largest = rightChildIdx;
    }
    
    // If the largest element is not the current node, swap and heapify
    
    if (largest !== index) {
      swap(array, index, largest);
      heapify(array, largest, heapSize);
    }
  }
  
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  
  const array = [45, 20, 39, 3, 5, 10];
const sortedArray = heapSort(array);
console.log(sortedArray);
