import React from 'react'
import { TariffCard } from './TariffCard'
import axios from 'axios'
import { tariffsData } from 'data/tariffsData'
import { Tariff } from 'types/TariffCardProps'
import { convertTariffForApi } from '@utils/tariffUtils'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/store'
import {
  setMessageVisible,
  setTariffSelected
} from 'store/slices/applicationSlice'
import { Message } from './Message'
import { preliminaryDecisionMessage } from 'data/messageData'

export const TariffSelection: React.FC = () => {
  const dispatch = useDispatch()
  const { isMessageVisible } = useSelector(
    (state: RootState) => state.application
  )

  const scrollToCardInfo = () => {
    const cardInfoSection = document.getElementById('card-info')
    if (cardInfoSection) {
      const yOffset =
        cardInfoSection.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: yOffset, behavior: 'smooth' })
    }
  }

  const handleSelectClick = async (id: number) => {
    const selectedTariff = tariffsData.find(
      (tariff: Tariff) => tariff.id === id
    )
    if (!selectedTariff) {
      console.error('Тариф не найден')
      return
    }

    const payload = convertTariffForApi(selectedTariff)

    try {
      dispatch(setMessageVisible(true))
      dispatch(setTariffSelected(true))
      scrollToCardInfo()
      await axios.post('http://localhost:8080/application/apply', payload)
    } catch (error) {
      console.error('Ошибка при отправке данных:', error)
    }
  }

  if (isMessageVisible) {
    return <Message data={preliminaryDecisionMessage} />
  }

  return (
    <>
      <section id="tariff-selection" className="tariff-selection">
        {tariffsData.map((tariff) => (
          <TariffCard
            id={tariff.id}
            key={tariff.id}
            requestedAmount={tariff.requestedAmount}
            totalAmount={tariff.totalAmount}
            term={tariff.term}
            monthlyPayment={tariff.monthlyPayment}
            rate={tariff.rate}
            insuranceIncluded={tariff.insuranceIncluded}
            salaryClient={tariff.salaryClient}
            onSelect={() => handleSelectClick(tariff.id)}
            className="tariff-card"
          />
        ))}
      </section>
    </>
  )
}
