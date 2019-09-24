import React from "react";

export default props =>(
    <div style={{display :"flex" ,  justifyContent:"center"}}>



     <div onClick={props.toggelCompelete}
     style={{ textDecoration: props.toDO.compelete ?"line-through" :""}}
     >{props.toDO.text }
     
     </div> 
     <button onClick={props.deleteToDo}>Delete</button>
     </div>
      );