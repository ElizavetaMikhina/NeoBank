import React, { useEffect } from 'react'
import { ButtonControlsProps } from 'types/types'

export const ButtonControls: React.FC<ButtonControlsProps> = ({
  className,
  sliderRef,
  currentIndex,
  setCurrentIndex,
  maxIndex
}) => {
  const scrollNext = () => {
    if (sliderRef.current) {
      const newIndex = Math.min(currentIndex + 1, maxIndex)
      setCurrentIndex(newIndex)
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  const scrollPrev = () => {
    if (sliderRef.current) {
      const newIndex = Math.max(currentIndex - 1, 0)
      setCurrentIndex(newIndex)
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

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
        onClick={scrollPrev}
        disabled={currentIndex === 0}
        className={`${className}__button-control ${className}__button-control--prev`}>
        <img
          src={getButtonIcon(currentIndex === 0, 'prev')}
          alt="Prev"
          className={`${className}__button-control-icon`}
        />
      </button>
      <button
        onClick={scrollNext}
        disabled={currentIndex === maxIndex - 2}
        className={`${className}__button-control ${className}__button-control--next`}>
        <img
          src={getButtonIcon(currentIndex === maxIndex - 2, 'next')}
          alt="Next"
          className={`${className}__button-control-icon`}
        />
      </button>
    </div>
  )
}
