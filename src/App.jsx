import './App.css'
import { MainCard, TopCard } from './components'

function App() {
  return (
    <div className='bg-[#F6E9DD] h-screen w-screen p-15 sm:p-0 m-0 flex flex-col justify-center items-center'>
      <TopCard/>
      <MainCard/>
    </div>
  )
}

export default App
