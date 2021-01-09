import React from 'react'
import Counter from './components/counter'
import PrevState from './components/PrevState'
import ObjectAsState from './components/ObjectAsState'
import ArrayAsState from './components/ArrayAsState'
import UseEffect from './components/UseEffect'
import ClassMouse from './components/ClassMouse'
import MouseContainer from './components/MouseContainer'
import IntervalClassCounter from './classComponents/IntervalClassCounter'
import IntervalHookCounter from './components/IntervalHookCounter'
import FullName from './components/FullName'
import DataFetching from './components/DataFetching'
import ComponentC from './classComponents/ComponentC'
import './App.css'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App () {
  return (
    <div className='App'>
      {/* <Counter />
      <PrevState />
      <ObjectAsState />
      <ArrayAsState /> */}
      {/* <UseEffect /> */}
      {/* <ClassMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}
      {/* <FullName /> */}
      {/* <DataFetching /> */}
      <UserContext.Provider value={'Clayton'}>
        <ChannelContext.Provider value={'Software Development'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
