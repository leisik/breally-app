'use client'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Testimonial from '@/components/testimonial'
import Newsletter from '@/components/newsletter'
import { useEffect, useState } from 'react'
import { Subpage } from '@/types/subpage'
import { getAllPages, getOnePage } from '@/api'
import { Loader } from '@/components/loader'

export default function Home() {
  const [subPages, setSubPages] = useState([])
  const [heroData, setHeroData] = useState({})
  const [testimonialData, setTestimonialData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const handleGetAllPages = async () => {
    try {
      const { data } = await getAllPages()
      const resultSubPages = data.filter((item: Subpage) => item.url !== '/')
      const homePageId = data.filter((item: Subpage) => item.url === '/')
      setSubPages(resultSubPages)
      const { data: homeData } = await getOnePage(homePageId[0].id)
      homeData.sections.map((section: any) => {
        if (section.type === 'hero') setHeroData(section)
        else if (section.type === 'testimonial') setTestimonialData(section)
        else return
      })
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    handleGetAllPages()
  }, [])

  return (
    <>
      <Header subPages={subPages} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Hero heroData={heroData} />
          <Testimonial testimonialData={testimonialData} />
          <Newsletter />
        </>
      )}
    </>
  )
}
