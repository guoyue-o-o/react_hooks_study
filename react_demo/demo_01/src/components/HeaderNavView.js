import { showNavArray } from '../data/showData';
import React, { useContext } from 'react';
import { bgColorContext } from '../actions/themeBgColor';
import { UPDATE_THEME_BG_COLOR } from '../data/constData';


function HeaderNavView() {
    const { dispatch, bgColor } = useContext(bgColorContext);
    return (
        <div style={{
            'backgroundColor': bgColor,
            margin: 20
        }}>
            {
                showNavArray.map((v, index) => {
                    return (
                        <li key={index}>{v.name}</li>
                    )
                })
            }
            <button onClick={() => { dispatch({ type: UPDATE_THEME_BG_COLOR, bgColor: 'pink' }) }}>
                改为粉色
            </button>
            <button onClick={() => { dispatch({ type: UPDATE_THEME_BG_COLOR, bgColor: 'green' }) }}>
                改为绿色
            </button>
        </div>
    )
}

export default HeaderNavView;
