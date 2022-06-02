import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import MainContent from './components/MainContent'

import './style.css'

function App() {
  return (
    <div className='container'>
      <Header />
      <MainContent />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
