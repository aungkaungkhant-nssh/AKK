import calculateDuration from '@/lib/caculateDuration';
import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'

type Experience = {
  id: number;
  role: string;
  comp: string;
  startDate: string;
  endDate: string;
  location: string;
  skills: string[];
  logo: string;
  lastIndex: boolean

};

const ExperienceCard = ({ role, comp, startDate, endDate, location, skills, logo, lastIndex }: Experience) => {
  const duration = calculateDuration(startDate, endDate)
  return (
    <div className={cn('flex items-start my-5 gap-3 p-3', !lastIndex && 'border-b-2 border-b-[#a8b3cf]')}>
      <div className=''>
        <Image
          src={logo}
          width={50}
          height={50}
          alt={comp}
          className='rounded'
        />
      </div>
      <div className='text-white'>
        <div className="mb-3">
          <h1 className="text-2xl font-bold text-white">{role}</h1>
          <h2 className="text-lg text-tertiary">{comp}</h2>
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <span className="font-semibold text-white">{startDate}</span>
          <span className="text-gray-400">-</span>
          <span className="font-semibold text-white">{endDate}</span>
          <span className="text-gray-300">•</span>
          <span className="italic text-white">({duration})</span>
        </div>
        <p>
          {location}
        </p>
        <div className='mt-4'>
          {
            skills.map((skill, index) => (
              <span key={skill} className='text-tertiary font-bold'>{skill} {skills.length - 1 !== index && ", "}</span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard