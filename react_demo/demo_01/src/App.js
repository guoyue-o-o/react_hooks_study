import { useContext } from 'react';
import './App.css';
import HeaderNavView from './components/HeaderNavView';
import HooksView from './components/HooksView';
import { GapView } from './components/GapView';
import HooksView2 from './components/HooksView2';
import HooksView3 from './components/HooksView3';
import HooksView4 from './components/HooksView4';
import HooksView5 from './components/HooksView5';
import HooksView6 from './components/HooksView6/HooksView6';
import HooksView6_02 from './components/HooksView6_02/HooksView6_02';

import { bgColorContext, ThemeBgColor } from './actions/themeBgColor';
import { UPDATE_THEME_BG_COLOR } from './data/constData';
import HooksView8 from './components/HooksView8';
import HooksView9 from './components/HooksView9';

function App() {
  const { dispatch, bgColor } = useContext(bgColorContext);
  return (
    <div className="App">
      <ThemeBgColor>
        <header className="App-header" style={{
          backgroundColor: bgColor,
        }}>
          <div className='navView'>
            <button style={{
              padding: 10,
              margin: 10
            }} onClick={() => { dispatch({ type: UPDATE_THEME_BG_COLOR, bgColor: 'pink' }) }}>
              改变页面背景色
            </button>
            <button style={{
               padding: 10,
               margin: 10
            }} onClick={() => { dispatch({ type: UPDATE_THEME_BG_COLOR, bgColor: 'green' }) }}>
              改变页面背景色
            </button>
          </div>

          {/* 导航栏 */}
          <HeaderNavView />
          <GapView />
          <HooksView />
          <GapView />
          <HooksView2 />
          <GapView />
          <HooksView3 />
          <GapView />
          <HooksView4 />
          <GapView />
          <HooksView5 />
          <GapView />
          <HooksView6 />
          <GapView />
          <HooksView6_02 />
          <GapView />
          <HooksView8 />
          <GapView />
          <HooksView9 />
          <GapView />
          <GapView />
        </header>
      </ThemeBgColor>
    </div>
  );
}

export default App;
