import React, { Component } from 'react';
import Buttons from './Buttons';
import { Color } from './color';
import ShowArea from './showArea';

function HooksView6_02() {
    return (
        <div>
            <h1>
                HooksView7 + 自己手写 + useContext + useReducer
            </h1>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}

export default HooksView6_02;