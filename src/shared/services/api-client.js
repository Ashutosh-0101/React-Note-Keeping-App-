// //backend crud and calls
// import axios from 'axios';
// export const apiClient={
//    async read(){//get
//       //promice state - pending, fullFilled,rejected
//     try{
//       const response= await axios.get(process.env.REACT_APP_NOTES_URL);//async
//     return response.data.notes;
//     }
//     catch(err){
//         throw err;
//     }
// //     console.log("promise is",promise);
// // promise.then(result=>{
// // console.log('result is::: ',result);
// // }).catch(err=>{
// //   console.log('error is',err);
// // })
//     },
//     insert(){//post

//     },
//     update(){

//     },
//     remove(){

//     }
// }
// Back End Calls
// CRUD 
import axios from 'axios';

export const apiClient = {
  
    async read(){
        try{
        const response = await  axios.get(process.env.REACT_APP_NOTES_URL);
        return response.data.notes; //[{},{},{}]
        }
        catch(err){
            throw err;
        }
    },
    insert(){
        // insert
    },
    update(){

    },
    remove(){

    }
}