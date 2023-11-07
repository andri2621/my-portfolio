import AboutMe from '@/app/about/AboutMe';
import BEskill from '@/app/about/BEskill';
import CurrentLearn from '@/app/about/CurrentLearn';
import Education from '@/app/about/Education';
import Experience from '@/app/about/Experience';
import FEskill from '@/app/about/FEskill';

export default function AboutSection() {
  return (
    <section id='about' className='min-h-screen py-24'>
      <h1 className='text-primary mb-4 font-bold'>About Me</h1>

      <AboutMe />

      <div className='divider'></div>

      <div className='min-h-screen'>
        <div id='experience'>
          <h2 className='text-primary mb-4 font-bold'>Work Experience</h2>
          <Experience />
        </div>

        <div className='divider'></div>

        <div id='skills'>
          <h2 className='text-primary mb-4 font-bold'>Skills</h2>

          <div className='flex flex-col gap-4'>
            <div className='mb-4'>
              <FEskill />
            </div>
            <div className='mb-4'>
              <BEskill />
            </div>
            <div className='mb-4'>
              <h3>Current Learn:</h3>
              <CurrentLearn />
            </div>
          </div>
        </div>

        <div className='divider'></div>

        <div id='education'>
          <h2 className='text-primary mb-4 font-bold'>Education</h2>
          <Education />
        </div>
      </div>
    </section>
  );
}
