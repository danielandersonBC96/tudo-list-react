
import * as Container  from './App.styles';
import React from "react";
import { Item } from './Types/item';
import {ListItem}  from './Components/ListItem/index';
import  { AddArea }  from './Components/AddArea/index'
import { useState } from 'react';

 const App = () => {
 const [list, setList ] = useState<Item[]>([
        {  
         id:1,
         name:'comprar alguma coisa',
         done:false
        },
          
       {
        id:1,
        name:" segunda tarefa",
        done: true 
       }
  ]);
  const handleAddTask =  ( taskName : string ) => {

    let newList = [...list]
    newList.push({
         id:  list.length + 1 ,
         name: taskName,
         done: false

    });
    setList(newList);
  }

        return(
           
          <Container.Container>          
            <Container.Area>

               Lista de  Tarefas

                 <Container.Header>

                   <AddArea onEnter={handleAddTask}/>

                    {list.map(( item, index ) => (
                     
                      <ListItem key ={index} item = { item}/>

                  ) )}
                 </Container.Header>
            </Container.Area>         
          </Container.Container>                   

        );
 }

export default App;
