
import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai';
import AnimatedButton from '../ui/animatedButton';

const ExperienceInfo = () => {
  return (
    <div className='my-5'>
      <p className="text-tertiary text-base leading-relaxed tracking-wide md:text-lg md:leading-loose">
        Dedicated Backend Developer with 2 years of experience designing and implementing robust, scalable, and efficient server-side applications. Proficient in modern backend technologies, including Node.js, NestJS, and PostgreSQL, with a strong focus on optimizing system performance and ensuring seamless integration with front-end solutions. Skilled in developing APIs, database management, and microservices architecture, delivering reliable solutions that meet business needs. A collaborative team player with a passion for solving complex problems and driving impactful results in fast-paced development environments.
      </p>
      <div className='flex flex-col md:flex-row gap-4 mt-3'>
        <AnimatedButton text='LinkedIn' icon={<AiFillLinkedin size={24} />} />
        <AnimatedButton text='DownLoad Resume' />
      </div>
    </div>
  )
}

export default ExperienceInfo