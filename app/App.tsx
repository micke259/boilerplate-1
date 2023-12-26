import React, { FC } from 'react'
import {Header} from '../widgets/ui/Header/index'
import {Main} from '../widgets/ui/Main/index'
import { Provider } from 'react-redux'
import {store} from '../shared/Redux/store/store';
import './App.scss'


const App:FC = () => {
 

  return (
    <Provider store={store}>
      <Header/>
      <Main/>
    </Provider>
    
  )
}

export default App
