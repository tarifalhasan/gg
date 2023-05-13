import Client from '@/components/Client';
import Footer from '@/components/Footer';
import GetInTouch from '@/components/GetInTouch';
import Header2 from '@/components/Header2';
import Services from '@/components/Services';
import WeAre from '@/components/WeAre';
import React from 'react';

const About = () => {
  return (
    <div>
      <Header2 />
      <WeAre mt={'140'} about={true} />
      <Client />
      <Services className={'mt-6'} />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default About;
