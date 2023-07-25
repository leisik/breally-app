'use client'
import { useEffect } from 'react'

const useOutsideClick = (
  ref: React.MutableRefObject<HTMLDivElement>,
  callback: Function,
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return document.removeEventListener('click', handleClick)
  })
}

export { useOutsideClick }
