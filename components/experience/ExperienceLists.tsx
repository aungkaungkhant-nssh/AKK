import experienceLists from '@/constants/experiencelists'
import React from 'react'
import ExperienceCard from './ExperienceCard'

const ExperienceLists = () => {
    console.log(experienceLists)
    return (
        <section>
            {
                experienceLists.map((experience,index) => (
                    <ExperienceCard key={experience.id} {...experience} lastIndex={experienceLists.length-1 === index } />
                ))
            }
        </section>
    )
}

export default ExperienceLists