export default function Newsletter() {
  return (
    <div className="w-full flex justify-center py-[128px] bg-backgroundPrimary px-3">
      <div className="w-full flex-col flex justify-around max-w-[624px]">
        <p className="text-[32px] md:text-[40px] leading-[44px] md:leading-[56px] text-center text-textPrimary mb-16">
          Sign up for Newsletter
        </p>
        <div className="flex flex-col md:flex-row items-center text-textPrimary mb-12">
          <input
            placeholder="type your email"
            className="w-full sm:w-[416px] max-w-[416px] h-[48px] bg-textSecondary rounded-[24px] px-8 mb-6 md:mb-0"
          />
          <button className="bg-buttonPurple rounded-[24px] w-[192px] h-[48px] ml-4">
            Submit
          </button>
        </div>
        <p className="text-helpTextGreen text-[14px] leading-[22px] text-center">
          Thank you for signing up for the Breally newsletter.
        </p>
      </div>
    </div>
  )
}
