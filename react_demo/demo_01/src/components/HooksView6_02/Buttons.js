import React, { useContext } from 'react';
import { UPDATE_COLOR } from '../../data/constData';
import { ColorContext } from './color';

 function Buttons() {
     const { dispatch } =  useContext(ColorContext)
     return (
         <div>
             <button onClick={() => dispatch({type: UPDATE_COLOR, color: 'green'})}>
                 绿色
             </button>
             <button onClick={() => dispatch({type: UPDATE_COLOR, color: 'pink'})}>
                 粉色
             </button>
         </div>
     )
 }

 export default Buttons;