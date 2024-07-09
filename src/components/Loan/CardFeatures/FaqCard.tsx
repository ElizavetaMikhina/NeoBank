import { FaqItem } from '@components/ui/FaqItem'
import {
  FaqIssuingReceivingData,
  FaqUsingCardData
} from 'data/cardFeaturesData'
import React, { useState } from 'react'

export const FaqCard: React.FC = () => {
  const [activeIndexIssuing, setActiveIndexIssuing] = useState<number | null>(
    null
  )
  const [activeIndexUsing, setActiveIndexUsing] = useState<number | null>(null)

  const handleClickIssuing = (index: number) => {
    setActiveIndexIssuing((prevIndex) => (prevIndex === index ? null : index))
    if (activeIndexUsing !== null) {
      setActiveIndexUsing(null)
    }
  }

  const handleClickUsing = (index: number) => {
    setActiveIndexUsing((prevIndex) => (prevIndex === index ? null : index))
    if (activeIndexIssuing !== null) {
      setActiveIndexIssuing(null)
    }
  }

  return (
    <>
      <h2 className="faq__title">Issuing and receiving a card</h2>
      <ul className="faq__items">
        {FaqIssuingReceivingData.map(({ question, answer }, id) => (
          <FaqItem
            key={id}
            question={question}
            answer={answer}
            className="faq"
            onClick={() => handleClickIssuing(id)}
            isActive={id === activeIndexIssuing}
          />
        ))}
      </ul>
      <h2 className="faq__title">Using a credit card</h2>
      <ul className="faq__items">
        {FaqUsingCardData.map(({ question, answer }, id) => (
          <FaqItem
            key={id}
            question={question}
            answer={answer}
            className="faq"
            onClick={() => handleClickUsing(id)}
            isActive={id === activeIndexUsing}
          />
        ))}
      </ul>
    </>
  )
}
