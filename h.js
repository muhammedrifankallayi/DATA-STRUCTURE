

// function lengthOfLongestSubstring(s) {
//     let maxLength = 0;
//     let start = 0;
//     let charMap = {};
  
//     for (let end = 0; end < s.length; end++) {
//       const currentChar = s.charAt(end);
//       console.log(currentChar);
//       if (charMap[currentChar] !== undefined && charMap[currentChar] >= start) {
//         start = charMap[currentChar] + 1;
//       }
  
//       charMap[currentChar] = end;
//       console.log(charMap[currentChar]+'-------------');
//       console.log( end - start + 1);
//       maxLength = Math.max(maxLength, end - start + 1);
//     }
  
//     return maxLength;
//   }
  
//   // Example usage:
//   console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
 
// const a1=[4,5]
// const a2=[8,3,5,2,7]

// const v = a1.concat(a2).sort()
// console.log(v);
// var size =v.length
// var flag=true
// if(v.length%2===1){
    
// size=(size-1)/2
    

// }else{
    

//   size = size/2 -1
  
//   flag=false     
// }
// let i=0
// while(i<size){
//     i++
// }
// if(flag===true){
//     console.log(v[i]);
//         }else{
//     console.log((v[i]+v[i+1])/2);
//         }

function shuffle(arr,n){

    let arr2 = []
    for(let i=0;i<n;i++){
       arr2.push(arr[i])
       arr2.push(arr[n+i])
       
    }

return arr2
}

let arr = [6,3,3,78,90,74]

console.log(shuffle(arr,3))
