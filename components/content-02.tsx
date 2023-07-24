import QuotationMark from '@/public/quotation-mark.svg'
import Image from 'next/image'

export default function Content02() {
  return (
    <div className="flex justify-center bg-backgroundSecondary px-3 py-[64px] sm:py-[128px]">
      <div className="flex flex-col items-start justify-around max-w-[416px] lg:max-w-[900px] text-xl md:text-2xl">
        <Image src={QuotationMark} alt="quotation-mark" />
        <p className="text-textSecondary leading-[32px] md:leading-[40px] text-justify mt-[68px] mb-[96px]">
          Torquatos nostros? quos dolores eos, qui studiose antiqua persequeris,
          claris et quasi naturalem. In quo enim inter mediocrem animadversionem
          atque insitam in malis dolor, non numquam. At vero eos et dolore suo
          sanciret.
        </p>
        <p className="text-textTertiaty leading-[29px]">
          John Doe, Street Artist
        </p>
      </div>
    </div>
  )
}
