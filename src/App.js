import Counter from './components/counter';
import PrevState from './components/PrevState';
import ObjectAsState from './components/ObjectAsState';
import ArrayAsState from './components/ArrayAsState';
import UseEffect from './components/UseEffect';
import ClassMouse from './components/ClassMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './classComponents/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <PrevState />
      <ObjectAsState />
      <ArrayAsState /> */}
      {/* <UseEffect /> */}
      {/* <ClassMouse /> */}
      {/* <MouseContainer /> */}
      <IntervalClassCounter />
      <IntervalHookCounter />
    </div>
  );
}

export default App;
