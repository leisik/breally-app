import Image from 'next/image'

export default function Hero({ heroData }: any) {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center bg-backgroundPrimary pt-[64px] sm:pt-[128px] pb-0: imageSize:pb-[152px]">
      <p className="w-full max-w-[516px] text-3xl md:text-5xl text-center md:text-left text-textPrimary leading-[40px] md:leading-[64px] pr-0 md:pr-6 pb-6 md:pb-0 px-3">
        {heroData.text}
      </p>
      <Image
        src={heroData.img}
        alt="hero image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full max-w-[516px] max-h-[384px] object-cover"
      />
    </div>
  )
}
