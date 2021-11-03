import React, { useContext } from 'react';
import { bgColorContext } from '../actions/themeBgColor';
import { UPDATE_THEME_BG_COLOR } from '../data/constData';


function IndexBgView() {
    const { dispatch, bgColor } = useContext(bgColorContext);
    return (
        <div style={{
            'backgroundColor': bgColor,
            height: '100vh',
            width: '100%',
        }}>
            <button style={{
                'padding': 10,
                margin: 10
            }} onClick={() => { dispatch({ type: UPDATE_THEME_BG_COLOR, bgColor: 'pink' }) }}>
                改变页面背景色
            </button>
            <button style={{
                'padding': 10,
                margin: 10
            }} onClick={() => { dispatch({ type: UPDATE_THEME_BG_COLOR, bgColor: 'green' }) }}>
                改变页面背景色
            </button>
        </div>
    )
}

export default IndexBgView;
