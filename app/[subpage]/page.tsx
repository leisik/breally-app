import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-backgroundPrimary text-textPrimary">
      <p>Nothing is here. Go back to homepage</p>
      <Link href="/">
        <button className="px-3 py-1 rounded-[24px] bg-backgroundSecondary text-textSecondary mt-2">
          Go back
        </button>
      </Link>
    </div>
  )
}
