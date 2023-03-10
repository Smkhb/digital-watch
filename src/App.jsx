import './App.css'
import { useEffect, useState } from "react";

function App() {

  const [time, setTime] = useState();

  useEffect(() => {

    const secPerSec = setInterval(() => {
      const currentTime = getCurrentTime();
      setTime(currentTime);
    }, 1000);

    return () => clearInterval(secPerSec);
  }, []);

  const getCurrentTime = () => {
    const today = new Date()
    const hours = today.getHours()
    const min = today.getMinutes()
    const sec = today.getSeconds()
    return {
      hours: formatTime(hours), 
      min: formatTime(min), 
      sec: formatTime(sec)
    };
  }
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

        <section className='min-h-screen flex justify-center items-center gap-2 md:gap-4'>

          <div className='font-medium bg-blue-400 rounded-lg p-4 shadow-xl shadow-sky-800/40 md:p-6 '>
            <h2 className=' text-gray-800 text-5xl md:text-9xl'>{time?.hours||'00'}</h2>
          </div>

          <div className='text-5xl md:text-9xl'>:</div>

          <div className='font-medium bg-blue-400 rounded-lg p-4 shadow-xl shadow-sky-800/40 md:p-6 '>
            <h2 className=' text-gray-800 text-5xl md:text-9xl'>{time?.min||'00'}</h2>
          </div>

          <div className='text-5xl md:text-9xl'>:</div>

          <div className='font-medium bg-blue-400 rounded-lg p-4 shadow-xl shadow-sky-800/40 md:p-6 '>
            <h2 className=' text-gray-800 text-5xl md:text-9xl'>{time?.sec||'00'}</h2>
          </div>

        </section>

      </main>
    </div>
  )
}

export default App
