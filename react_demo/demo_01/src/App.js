import './App.css';
import HeaderNavView from './components/HeaderNavView';
import HooksView from './components/HooksView';
import { GapView } from './components/GapView';
import HooksView2 from './components/HooksView2';
import HooksView3 from './components/HooksView3';
import HooksView4 from './components/HooksView4';
import HooksView5 from './components/HooksView5';
import HooksView6 from './components/HooksView6/HooksView6';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
