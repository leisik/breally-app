import { Subpage } from '@/types/subpage'
import { createNameFromUrl } from '@/utils/createNameFromUrl'

interface Props {
  subPages: Subpage[]
}

export default function Menu({ subPages }: Props) {
  return (
    <div className="hidden sm:flex items-center pl-12 md:pl-24 ">
      {subPages.map((page) => {
        return (
          <div
            className="text-textPrimary mr-6 md:mr-12 cursor-pointer hover:opacity-75 capitalize"
            key={page.id}
          >
            {createNameFromUrl(page.url)}
          </div>
        )
      })}
    </div>
  )
}
