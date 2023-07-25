import Menu from './menu'
import BrallyLogo from '@/public/logo.svg'
import Image from 'next/image'
import { MobileMenu } from './mobileMenu'
import { ContactButton } from './contactButton'
import { Subpage } from '@/types/subpage'
import { useRouter } from 'next/navigation'

interface Props {
  subPages: Subpage[]
}

export default function Header({ subPages }: Props) {
  const router = useRouter()
  return (
    <div className="flex bg-backgroundPrimary border border-b border-textSecondary px-16 py-6">
      <Image
        src={BrallyLogo}
        alt="brally-logo"
        width={0}
        height={0}
        className="cursor-pointer"
        onClick={() => router.refresh()}
      />
      <Menu subPages={subPages} />
      <div className="mx-auto"></div>
      <div className="hidden sm:flex">
        <ContactButton />
      </div>
      <MobileMenu subPages={subPages} />
    </div>
  )
}
