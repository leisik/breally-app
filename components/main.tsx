import Hero from './hero'
import Testimonial from './testimonial'
import Newsletter from './newsletter'
import { useEffect, useState } from 'react'

export const Main = ({ homePage }: any) => {
  const [heroData, setHeroData] = useState({})
  const [testimonialData, setTestimonialData] = useState({})

  useEffect(() => {
    homePage?.sections.map((section: any) => {
      if (section?.type === 'hero') setHeroData(section)
      else if (section?.type === 'testimonial') setTestimonialData(section)
      else return
    })
  }, [homePage])

  return (
    <>
      <Hero heroData={heroData} />
      <Testimonial testimonialData={testimonialData} />
      <Newsletter />
    </>
  )
}
