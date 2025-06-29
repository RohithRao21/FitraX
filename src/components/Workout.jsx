import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout({workout}){
    return (
        <SectionWrapper id="workout" header={"Welcome to "} title={["The ","WORKOUT ","zone"]} >
            <div className='flex flex-col gap-4'>
                {workout.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} index={index} />
                ))}
            </div>
        </SectionWrapper>
    )
}