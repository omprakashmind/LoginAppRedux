import React from 'raect';
import {Route,Redirect} from 'react-router-dom';
import auth from './auth'


//  const ProtectedRoute=({
//     component:Component,
//     ...rest
//        })=>{

//      return( 
//          <Route

//       {...rest}
//       render={props=>{
//                     if(auth.isAuthenticated()){
//               return <Component {...props}/>;
//           }
//           else{
//               <Redirect
//                     to={{pathname:"/",
//                 state:{
//                     from:props.location
//                 }}}
//               />
   
//           }
//       }}
    
//     /> 
//    )
// }




