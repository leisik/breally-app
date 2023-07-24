import Link from 'next/link'

export const ContactButton = () => {
  return (
    <Link
      href="mailto:hello@adchitects.co"
      // className="bg-buttonPurple rounded-[24px] w-[108px] h-[36px] text-textPrimary flex justify-center items-center min-w-[128px] mt-4"
      className="bg-buttonPurple rounded-[24px] w-[108px] md:w-[192px] h-[36px] md:h-[48px] text-textPrimary flex justify-center items-center min-w-[128px] mt-4 md:mt-0"
    >
      Contact us
    </Link>
  )
}
