import React from 'react';
import Buttons from './Buttons';
import { Color } from './color';
import ShowArea from './ShowArea';


function HooksView6() {
    return (
        <div>
            <h1>
                HooksView6---useReducer + useContext
            </h1>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}
export default HooksView6;