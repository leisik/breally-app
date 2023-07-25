import { addToNewsletter } from '@/api'
import { useState } from 'react'
import { emailRegex } from '@/utils/emailRegex'
import Image from 'next/image'
import Loader from '@/public/oval.svg'
import Checkmark from '@/public/check-mark.svg'

export default function Newsletter() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleAddToNewsletter = async (email: string) => {
    setIsSubmitting(true)
    if (isInputAnEmail) {
      setIsLoading(true)
      try {
        const res = await addToNewsletter(email)
        if (res.status === 200) submitSuccess()
      } catch (error) {
        console.error(error)
      }
      setIsSubmitting(false)
      setIsLoading(false)
      setEmail('')
    }
  }
  const isInputAnEmail = emailRegex.test(email)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setIsSubmitting(false)
  }

  const submitSuccess = () => {
    setSent(true)
    setTimeout(function () {
      setSent(false)
    }, 4000)
  }

  return (
    <div className="w-full flex justify-center py-[128px] bg-backgroundPrimary px-3">
      <div className="w-full flex-col flex justify-around max-w-[624px]">
        <p className="text-[32px] md:text-[40px] leading-[44px] md:leading-[56px] text-center text-textPrimary mb-16">
          Sign up for Newsletter
        </p>
        <div className="flex flex-col md:flex-row items-center text-textPrimary mb-12 relative">
          <input
            placeholder="type your email"
            className="w-full sm:w-[416px] max-w-[416px] h-[48px] bg-textSecondary rounded-[24px] px-8 mb-6 md:mb-0"
            value={email}
            onChange={handleChange}
          />
          {!isInputAnEmail && isSubmitting && (
            <p className="absolute left-[calc(50%-148px)] top-12 w-[148px] text-center text-red-700 text-sm bg-transparent-main rounded-lg px-2 mt-1.5 pt-1 pb-0.5 -mb-2 animate-pulse">
              Wrong email format
            </p>
          )}
          <button
            onClick={() => {
              handleAddToNewsletter(email)
            }}
            className="bg-buttonPurple rounded-[24px] w-[192px] h-[48px] ml-4 flex justify-center items-center"
          >
            {isLoading ? (
              <Image
                src={Loader}
                alt="loader"
                className="w-6 h-6"
                width={0}
                height={0}
                sizes="100vh"
              />
            ) : sent ? (
              <div className="flex justify-center items-center text-textPrimary">
                <p>Sent</p>
                <Image
                  src={Checkmark}
                  alt="loader"
                  className="w-4 h-4 ml-1.5"
                  width={0}
                  height={0}
                  sizes="100vh"
                />
              </div>
            ) : (
              'Submit'
            )}
          </button>
        </div>
        <p className="text-helpTextGreen text-[14px] leading-[22px] text-center">
          Thank you for signing up for the Breally newsletter.
        </p>
      </div>
    </div>
  )
}
