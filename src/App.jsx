
import './App.css'

function App() {

  const getCurrentTime = () => {
    const today = new Date()
    const hours = today.getHours()
    const min = today.getMinutes()
    const sec = today.getSeconds()
    
    return (
      hours,
      min,
      sec
    )
  }

  return (
    <div>
      <main className='bg-gradient-to-t from-cyan-300 to-sky-700'>

        <section className='min-h-screen flex justify-center items-center gap-3'>

          <div className='text-8xl font-medium bg-blue-400 rounded-lg p-6 shadow-xl shadow-sky-800/40 '>
            <h2 className=' text-gray-800'>12</h2>
          </div>

          <div className='text-8xl font-medium bg-blue-400 rounded-lg p-6 shadow-xl shadow-sky-800/40 '>
            <h2 className=' text-gray-800'>46</h2>
          </div>

          <div className='text-8xl font-medium bg-blue-400 rounded-lg p-6 shadow-xl shadow-sky-800/40 '>
            <h2 className=' text-gray-800'>01</h2>
          </div>

        </section>

      </main>
    </div>
  )
}

export default App
