import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Joinus from '@/app/joinus/page';
import SuccessStories from './sucessstories/page';
import Home from '@/app/home/page';
import WhatWeDoSection from './WhatWeDoSection/page';
import WhyChooseUs from './WhyChooseUs/page';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <WhyChooseUs />
      <WhatWeDoSection />
      <SuccessStories />
      <Joinus />
      <Footer />
    </div>
  );
}