import * as Styled from './styles';
import { Item} from '../../Types/item';
import { useState } from 'react';

type Props = {
    item:Item 
}

export const ListItem = ({item} : Props )  => {

    const[isChecked, setIsCheckout] = useState(item.done)
    return(
        <Styled.Container done ={ isChecked}>
              <input 
              type="checkbox" 
              checked={isChecked}
              onChange={  e => setIsCheckout( e.target.checked)}
               />
              <label> 
             {item.name}</label>
        </Styled.Container>
    )
}