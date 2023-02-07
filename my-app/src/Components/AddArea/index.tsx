import * as Styled from './styled';
import { useState , KeyboardEvent} from 'react';


type Props = {

    onEnter: ( taskName: string) => void
}


export const AddArea = ({onEnter}:Props  ) => {
const [ inputText , setInputText]=  useState('');

    const hanleKeyUp = (e: KeyboardEvent) =>{

     
        if(e.code === 'Enter' && inputText !== ''){
            onEnter( inputText);
            setInputText('');

        }
       
    }

 
    return(
        <Styled.Container>
          <div className=' image'>
          ➕
          </div>
          <input
            type="text"
            placeholder='Add Tarefa '
            value={inputText}
            onChange = {e=>setInputText(e.target.value)}
            onKeyUp ={ hanleKeyUp}
          />
        </Styled.Container>
    )
}