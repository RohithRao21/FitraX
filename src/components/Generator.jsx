import React,{useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import Button from './Button'

function Header(props){
    const {index, title, description} = props;
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl font-semibold 
                sm:text-4xl md:text-5xl text-slate-400'>{index}</p>
                <h4 className='sm:text-2xl md:text-3xl text-xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}


export default function Generator(props){

    const {setPoison, setMuscles, setGoal, poison, muscles, goal, updateWorkout} = props;

    const [showaModel, setShowaModel] = useState(false);

    function updateMuscles(muscleGroup){
        console.log(muscleGroup)
        if(muscles.includes(muscleGroup)){
            setMuscles(muscles.filter(val => val !== muscleGroup));
            return
        }
        if(muscles.length > 2){
            return
        }
        if(poison === 'individual'){
            setMuscles([muscleGroup]);
            return
        }
        setMuscles(prevMuscles => {
            const newMuscles = [...prevMuscles, muscleGroup];
            if(newMuscles.length === 3){
                setShowaModel(false);
            }
            return newMuscles;
        });
    }
    return (

    
        <SectionWrapper id="generator" header={"Generate your workout"} title={["it's ","Huge ","o'clock"]} >




            <Header index={"01"}  

            title={"Pick Your Poison"} 
            description={"Select your workout you wish to enjoy"} />
            <div className='grid grid-cols-2 gap-4 
                sm:grid-cols-4'>
                {Object.keys(WORKOUTS).map((workout, index) => (
                      <button onClick={() => {
                        setPoison(workout);
                        setMuscles([]);
                        setShowaModel(false);
                     }} className={`bg-slate-950
                        border px-4 py-3 rounded-lg
                        duration-200 hover:scale-105
                        hover:border-yellow-600 ${poison === workout ? 'border-yellow-600' : 'border-stone-500'}`}  key={index}>
                        <p className='capitalize'>{workout.replaceAll("_", " ")}</p>
                    </button>
                    
                ))}
            </div>




            <Header index={"02"}  

            title={"Lock on Target"} 
            description={"Select the muscles you wish to target"} />
            <div className='bg-slate-950 border border-solid border-stone-500 rounded-lg
            flex flex-col '>
                <button onClick={() => setShowaModel(!showaModel)} className='relative p-3 flex items-center justify-center'>
                    <p>{muscles.length === 0 ? 'Select muscle groups' : muscles.join(' | ')}</p>
                    <i className='fa-solid fa-caret-down absolute right-3
                    top-1/2 -translate-y-1/2 '></i>
                </button>
                {showaModel &&  (
                    <div className='flex flex-col px-3 pb-3'>
                        {(poison === 'individual' ? WORKOUTS[poison] : 
                            Object.keys(WORKOUTS[poison])).map((muscleGroup,muscleGroupIndex) => {
                                return(
                                    <button key={muscleGroupIndex} onClick={() => {
                                        updateMuscles(muscleGroup)} 
                                    }
                                    className={'py-2 duration-200 hover:text-yellow-500 '
                                        + (muscles.includes(muscleGroup) ? 'text-yellow-500' : ' ')
                                    }>
                                        <p className='uppercase'>{muscleGroup.replaceAll("_", " ")}</p>
                                    </button>
                                )
                            })}
                    </div>
                )}
            </div>   




            <Header index={"03"}  

            title={"Select your workout scheme"} 
            description={"Select the workout scheme you wish to follow"} />
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 '>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => (
                    <button onClick={() => setGoal(scheme)} className={`bg-slate-950
                        border px-4 py-3 rounded-lg
                        duration-200 hover:scale-105
                        hover:border-yellow-500 ${goal === scheme ? 'border-yellow-500' : 'border-stone-500'}`}  key={schemeIndex}>
                        <p className='capitalize'>{scheme.replaceAll("_", " ")}</p>
                    </button>
                ))}
            </div>
            <Button func = {updateWorkout} text="Generate Workout" />



        </SectionWrapper>
    )
}