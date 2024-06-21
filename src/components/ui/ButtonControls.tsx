import React, { useEffect, useRef, useState } from 'react'
import { ButtonControlsProps } from 'types/types'

export const ButtonControls: React.FC<ButtonControlsProps> = ({
  className,
  sliderRef
}) => {
  const prevButtonRef = useRef<HTMLButtonElement>(null)
  const nextButtonRef = useRef<HTMLButtonElement>(null)

  const [isPrevDisabled, setIsPrevDisabled] = useState(true)
  const [isNextDisabled, setIsNextDisabled] = useState(false)

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const updateButtons = () => {
    if (sliderRef.current && prevButtonRef.current && nextButtonRef.current) {
      const currentScroll = sliderRef.current.scrollLeft
      const maxScrollLeft =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth

      setIsPrevDisabled(currentScroll <= 0)
      setIsNextDisabled(currentScroll >= maxScrollLeft)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      updateButtons()
    }

    if (sliderRef.current) {
      sliderRef.current.addEventListener('scroll', handleScroll)
      updateButtons()
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [sliderRef])

  useEffect(() => {
    const preloadImages = [
      'images/icons/arrow-prev.svg',
      'images/icons/arrow-prev-disabled.svg',
      'images/icons/arrow-next.svg',
      'images/icons/arrow-next-disabled.svg'
    ]

    preloadImages.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  const getButtonIcon = (isDisabled: boolean, direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      return isDisabled
        ? 'images/icons/arrow-prev-disabled.svg'
        : 'images/icons/arrow-prev.svg'
    } else {
      return isDisabled
        ? 'images/icons/arrow-next-disabled.svg'
        : 'images/icons/arrow-next.svg'
    }
  }

  return (
    <div className={`${className}__button-controls`}>
      <button
        ref={prevButtonRef}
        onClick={scrollPrev}
        disabled={isPrevDisabled}
        className={`${className}__button-control ${className}__button-control--prev`}>
        <img
          src={getButtonIcon(isPrevDisabled, 'prev')}
          alt="Prev"
          className={`${className}__button-control-icon`}
        />
      </button>
      <button
        ref={nextButtonRef}
        onClick={scrollNext}
        disabled={isNextDisabled}
        className={`${className}__button-control ${className}__button-control--next`}>
        <img
          src={getButtonIcon(isNextDisabled, 'next')}
          alt="Next"
          className={`${className}__button-control-icon`}
        />
      </button>
    </div>
  )
}
