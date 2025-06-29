import { useState } from 'react'
import Hero from './components/Hero'
import Workout from './components/Workout'
import Generator from './components/Generator'
import Navbar from './components/Navbar'
import { generateWorkout } from './utils/function'

function App() {

  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState('individual');
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState('strength_power');


  function updateWorkout(){
    console.log('updateWorkout')
    if(muscles.length < 1){
      return;
    }
    let newWorkout = generateWorkout({poison, muscles, goal});
    console.log('newWorkout')
    console.log(newWorkout)
    setWorkout(newWorkout); 
    window.location.href = '#workout' 
  }
  
  return (
    <>
    <main className='min-h-screen flex flex-col bg-gradient-to-r 
    from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Navbar />
      <Hero />
      <Generator  
      setPoison={setPoison} 
      setMuscles={setMuscles} 
      setGoal={setGoal}
      poison={poison} 
      muscles={muscles}
      goal={goal}
      updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
    </>
  )
}

export default App
