import React from 'react'
import Hero from "../components/Hero";

import About from "../components/About";
import Review from "../components/Review";
import Contact from "../components/Contact";
import WhyChooseUs from "../components/WhyChooseUs";
import ScheduleSection from "../components/ScheduleSection"
import TrainingClasses from "../components/TrainingClasses"
import LocationSection from "../components/LocationSection"
import Photo from "../components/Photo"
const Home = () => {
    return (
        <div>
            <Hero />
             <About />
             <TrainingClasses />
             <ScheduleSection />
              <WhyChooseUs />
               <Review />
               <Photo />
               <LocationSection />
               <Contact />
           
           
           
           
            
        </div>
    )
}

export default Home
