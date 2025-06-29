import React from "react";
import Button from "./Button";
export default function Hero(){

    return (
        <div className="min-h-screen flex flex-col gap-10 
        justify-center items-center text-center max-w-[800PX]
        w-full mx-auto p-4">
            <div className="flex flex-col gap-4">
                <p>
                    START YOUR FITNESS JOURNEY TODAY
                </p>
                <h1 className="uppercase text-4xl font-semibold 
                sm:text-5xl md:text-6xl lg:text-7xl" >
                    GET<span className="text-yellow-500">FIT</span>
                </h1>
            </div>
            
            <p className="text-sm md:text-base font-light">
                an app that you can use to 
                <span className="text-yellow-500 font-medium"> track your progress and get fit
                </span>
            </p>
            <Button func = {()=>{
                window.location.href = '#generator';
            }} text="Get Started" />
        </div>
    ) 
}