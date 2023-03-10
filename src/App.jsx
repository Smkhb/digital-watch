
import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const getCurrentTime = () => {
    const today = new Date();
    const hours = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();
    return {
      hours: formatTime(hours), 
      min: formatTime(min), 
      sec: formatTime(sec)
    };
  }

  const [time, setTime] = useState()

  useEffect(() => {
    const secPerSec = setInterval(() => {
      const currentTime = getCurrentTime();
      setTime(currentTime);
    }, 1000);

    return ()=> clearInterval(secPerSec);
  }, [])

  const formatTime = (time) =>{
    const timeString = String(time);
    if(timeString.length==2){
      return time

    }
    const newTime = timeString.padStart(2,0);
    return newTime
  }
  return (
    <div>
      <main className='bg-gradient-to-t from-cyan-300 to-sky-700'>

        <section className='min-h-screen flex justify-center items-center gap-3'>

          <div className='text-8xl font-medium bg-blue-400 rounded-lg p-6 shadow-xl shadow-sky-800/40 '>
            <h2 className=' text-gray-800'>{time.hours}</h2>
          </div>

          <div className='text-8xl font-medium bg-blue-400 rounded-lg p-6 shadow-xl shadow-sky-800/40 '>
            <h2 className=' text-gray-800'>{time.min}</h2>
          </div>

          <div className='text-8xl font-medium bg-blue-400 rounded-lg p-6 shadow-xl shadow-sky-800/40 '>
            <h2 className=' text-gray-800'>{time.sec}</h2>
          </div>

        </section>

      </main>
    </div>
  )
}

export default App
