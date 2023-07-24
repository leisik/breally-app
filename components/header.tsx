import Menu from './header/menu'
import BrallyLogo from '@/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex bg-backgroundPrimary border border-b border-textSecondary px-16 py-6">
      <Image src={BrallyLogo} alt="brally-logo" width={0} height={0} />
      <Menu />
      <div className="mx-auto"></div>
      <Link
        href="mailto:hello@adchitects.co"
        className="bg-buttonPurple rounded-[24px] w-[192px] h-[48px] text-textPrimary flex justify-center items-center"
      >
        Contact us
      </Link>
    </div>
  )
}
