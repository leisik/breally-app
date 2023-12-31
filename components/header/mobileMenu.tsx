'use client'

import React, { useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import BurgerMenu from '@/public/burger-menu.svg'
import Image from 'next/image'
import { ContactButton } from './contactButton'
import BrallyLogoBright from '@/public/logo-bright.svg'
import { Subpage } from '@/types/subpage'
import { createNameFromUrl } from '@/utils/createNameFromUrl'
import Link from 'next/link'

interface Props {
  subPages: Subpage[]
}

export const MobileMenu = ({ subPages }: Props) => {
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 100

  const onTouchStart = (e: any) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = (
    closeFunction: (
      focusableElement?:
        | HTMLElement
        | React.MouseEvent<HTMLElement, MouseEvent>
        | React.MutableRefObject<HTMLElement>,
    ) => void,
    e: any,
  ) => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isSwipeDown = distance < minSwipeDistance

    if (isSwipeDown) {
      closeFunction()
    }
  }

  return (
    <Popover className="sm:hidden">
      {({ close }) => (
        <>
          <Popover.Button
            className={`h-8 w-8 text-white absolute top-24px right-3 flex items-center md:hidden justify-center cursor-pointer focus:outline-none`}
            id="mobile-toggler"
          >
            <Image src={BurgerMenu} alt="burger menu" className="w-6 h-6" />
          </Popover.Button>
          <Popover.Overlay
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd.bind(this, close)}
            className="fixed inset-0 bg-black opacity-30 z-[45]"
          />
          <Transition
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="translate-x-0"
            enterTo="translate-x-100"
            leave="transition ease-in duration-150"
            leaveFrom="translate-x-100"
            leaveTo="translate-x-0"
          >
            <Popover.Panel className="fixed z-50 transform -translate-x-full -right-[156px] top-0 h-screen w-[156px]">
              <div className="h-full bg-backgroundSecondary shadow md:hidden transform transition duration-150 ease-in-out z-50">
                <nav className="py-8 flex flex-col h-full items-center">
                  <Image
                    src={BrallyLogoBright}
                    alt="brally-logo"
                    width={0}
                    height={0}
                    className="text-white"
                  />
                  {subPages?.map((page) => {
                    return (
                      <Link
                        href={page?.url}
                        className="text-textSecondary cursor-pointer hover:opacity-75 mt-4 capitalize"
                        key={page?.id}
                      >
                        {createNameFromUrl(page?.url)}
                      </Link>
                    )
                  })}
                  <ContactButton />
                </nav>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
