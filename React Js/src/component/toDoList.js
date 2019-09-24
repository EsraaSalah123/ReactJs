import TODoForm from "./ToDoForm";
import React from "react";
import ToDo from "./ToDO";

 export default class ToDoList extends React.Component {
     state={
     toDOs:[] ,
     ToDoToShow :"All"

     };

     AddTODO =(toDO)=>
     {
     
        this.setState(state => ({
            toDOs: [toDO, ...state.toDOs]
          }));
        };

        toggelCompelete =(id)=>{
this.setState({
    toDOs :this.state.toDOs.map(toDO=>{
        if(toDO.id ===id)
        {
return {
    ...toDO,
    compelete : !toDO.compelete
};
        }
        else{
            return toDO ;
        }
    }) 
});
        };

updateToDoToShow =(s)=>{
this.setState({
    ToDoToShow :s
})
} ;
handelDelete=(id)=>{
    this.setState({
        
        toDOs: this.state.toDOs.filter(toDO => toDO.id !== id)
        });
}

removeAll=()=>{
    this.setState({
        
        toDOs: this.state.toDOs.filter(toDO =>! toDO.compelete )
        });
}


     render(){
      let toDOs = [] ;
      if  (this.state.ToDoToShow==="All")
      {
toDOs =this.state.toDOs ;
      }
     else if  (this.state.ToDoToShow==="Active")
      {
toDOs =this.state.toDOs.filter(toDO => !toDO.compelete) ;
      }
      else if  (this.state.ToDoToShow==="compelete")
      {
toDOs =this.state.toDOs.filter(toDO => toDO.compelete) ;
      }
         return(
          <div><TODoForm onSubmit={this.AddTODO}/>
          {toDOs.map(toDO => (<ToDo key={toDO.id} 
          toggelCompelete={()=>this.toggelCompelete(toDO.id)}
          deleteToDo={() => this.handelDelete(toDO.id)}
          toDO ={toDO}  />

))}              
       <div>TO DO :{this.state.toDOs.filter(toDO => !toDO.compelete).length}</div>  
       <div>
           <button onClick={() =>this.updateToDoToShow("All")}>All</button>
           <button onClick={() =>this.updateToDoToShow("Active")}>Active</button>
           <button onClick={() =>this.updateToDoToShow("compelete")}>compelete</button>



      {this.state.toDOs.filter(toDO =>toDO.compelete).length?(
             <div>
           <button onClick={() =>this.removeAll()}>Remove compeleted</button>
          
           </div> ):null} 
       </div>
            
              </div>
         );
     } 

 }