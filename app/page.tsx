'use client'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Testimonial from '@/components/testimonial'
import Newsletter from '@/components/newsletter'
import { useEffect, useState } from 'react'
import { Subpage } from '@/types/subpage'
import { getAllPages, getOnePage } from '@/api'

export default function Home() {
  const [allPages, setAllPages] = useState([])
  const [homePageData, setHomePageData] = useState({})
  const [heroData, setHeroData] = useState({})
  const [testimonialData, setTestimonialData] = useState({})
  const [loading, setLoading] = useState(true)
  const handleGetAllPages = async () => {
    try {
      const { data } = await getAllPages()
      const subPages = data.filter((item: Subpage) => item.url !== '/')
      const homePageId = data.filter((item: Subpage) => item.url === '/')
      setAllPages(subPages)
      const { data: homeData } = await getOnePage(homePageId[0].id)
      setHomePageData(homeData.sections)
      homeData.sections.map((section: any) => {
        if (section.type === 'hero') setHeroData(section)
        else if (section.type === 'testimonial') setTestimonialData(section)
        else return
      })
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    handleGetAllPages()
  }, [])

  return (
    <>
      <Header allPages={allPages} />
      {!loading && <Hero heroData={heroData} />}
      {!loading && <Testimonial testimonialData={testimonialData} />}
      <Newsletter />
    </>
  )
}
