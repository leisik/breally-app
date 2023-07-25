import Hero from './hero'
import Testimonial from './testimonial'
import Newsletter from './newsletter'
import { useEffect, useState } from 'react'
import { HomePage } from '@/types/homePage'
import { Section } from '@/types/section'

interface Props {
  homePage: HomePage
}

export const Main = ({ homePage }: Props) => {
  const [heroData, setHeroData] = useState({ type: '' })
  const [testimonialData, setTestimonialData] = useState({ type: '' })

  useEffect(() => {
    homePage?.sections.map((section: Section) => {
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
