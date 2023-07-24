import Image from 'next/image'
import Content01Image from '@/public/content01.png'

export default function Content01() {
  return (
    <div className="py-[10%] flex w-full justify-center items-center bg-backgroundPrimary">
      <p className="max-w-[516px] text-5xl text-left text-textPrimary leading-[64px] pr-6">
        In oculis quidem rerum facilis est et aperta.
      </p>
      <Image
        src={Content01Image}
        alt="content01"
        width={0}
        height={0}
        className="w-full h-full max-w-[516px] max-h-[384px] object-cover"
      />
    </div>
  )
}
