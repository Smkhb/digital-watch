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
      hours,
      min,
      sec,
    }
  }

  return (
    <div>
      <main className='bg-gradient-to-t from-cyan-300 to-sky-700'>

        <section className='min-h-screen flex justify-center items-center gap-3'>

          <div className='text-8xl font-medium bg-blue-400 rounded-lg p-6 shadow-xl shadow-sky-800/40 md:text-9xl '>
            <h2 className=' text-gray-800'>{time?.hours}</h2>
          </div>

          <div className='text-8xl md:text-9xl'>:</div>

          <div className='text-8xl font-medium bg-blue-400 rounded-lg p-6 shadow-xl shadow-sky-800/40 md:text-9xl '>
            <h2 className=' text-gray-800'>{time?.min}</h2>
          </div>

          <div className='text-8xl md:text-9xl'>:</div>

          <div className='text-8xl font-medium bg-blue-400 rounded-lg p-6 shadow-xl shadow-sky-800/40 md:text-9xl '>
            <h2 className=' text-gray-800'>{time?.sec}</h2>
          </div>

        </section>

      </main>
    </div>
  )
}

export default App
