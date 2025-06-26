import { useState } from 'react'
import { AnimatedText } from './components/animated-text'
import { AnimatedSequences } from './components/animated-sequence'

function App() {



  return (

    <div className='flex items-center justify-center min-h-screen min-w-screen bg-black'>
   <AnimatedText />
   <AnimatedSequences />
    </div>

  )
}

export default App
