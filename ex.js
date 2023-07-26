
const user = [
    {
        name: 'ajmla',
        hobby: ['football', 'sports']
    },
    {
        name: 'salim',
        hobby: ['writing', 'running']
    },
    {
        name: 'fasil',
        hobby: ['walking', 'sports', 'faster', 'singing']
    },
    {
        name: 'anagha',
        hobby: ['running', 'football', 'sports']
    },
];

// for(let i=0;i<user.length;i++){
//     setTimeout(() => {
//       console.log(user[i].name);
//     }, 3000)
    
//     user[i].hobby.forEach((val)=>{
//         setTimeout(() => {
//             console.log(val);
//         }, 6000);
//     })
   
// }

const printNumbersSync =async ()=> {
  for(let i=0;i<user.length;i++){
      await new Promise(resolve => {
        setTimeout(() => {
          console.log(user[i].name);
         
          resolve();
        }, 1000);
      });
      for(let j=0;j<user[i].hobby.length;j++){
        await new Promise(resolve => {
          setTimeout(() => {
            console.log("hobby:"+user[i].hobby[j]);
           
            resolve();
          }, 1000);
        });
      }
    }
  }
  
  printNumbersSync();
  


