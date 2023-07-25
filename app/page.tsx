'use client'
import { Header } from '@/components/header/header'
import { Subpage } from '@/types/subpage'
import { getAllPages, getOnePage } from '@/api'
import { Loader } from '@/components/main/loader'
import { useQuery } from 'react-query'
import { Main } from '@/components/main/main'

export default function Home() {
  const handleGetSubpages = async () => {
    try {
      const { data } = await getAllPages()
      const resultSubPages = data.filter((item: Subpage) => item.url !== '/')
      return resultSubPages
    } catch (error) {
      console.error(error)
    }
  }

  const { data: subPages, status: subPagesStatus } = useQuery(
    'subpages',
    handleGetSubpages,
  )

  const handleGetAllPages = async () => {
    try {
      const { data } = await getAllPages()
      const homePageId = data.filter((item: Subpage) => item.url === '/')
      const { data: homeData } = await getOnePage(homePageId[0].id)
      return homeData
    } catch (error) {
      console.error(error)
    }
  }

  const { data: homePage, status: homePageStatus } = useQuery(
    'homePage',
    handleGetAllPages,
  )

  return (
    <>
      {subPagesStatus === 'success' && <Header subPages={subPages} />}
      {homePageStatus === 'success' ? <Main homePage={homePage} /> : <Loader />}
    </>
  )
}
