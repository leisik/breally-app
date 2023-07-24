export default function Newsletter() {
  return (
    <div className="h-[50vh] flex justify-center py-[5%] bg-backgroundPrimary">
      <div className="flex-col flex justify-around max-w-[624px]">
        <p className="text-[40px] leading-[56px] text-center text-textPrimary">
          Sign up for Newsletter
        </p>
        <div className="flex text-textPrimary">
          <input
            placeholder="type your email"
            className="w-[416px] h-[48px] bg-textSecondary rounded-[24px] px-8"
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
