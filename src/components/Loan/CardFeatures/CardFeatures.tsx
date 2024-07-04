import React, { useState } from 'react'
import { AboutCard } from './AboutCard'
import { RatesCard } from './RatesCard'
import { CashbackCard } from './CashbackCard'
import { FaqCard } from './FaqCard'

type CardFeaturesProps = {}

export const CardFeatures: React.FC<CardFeaturesProps> = () => {
  const [selectedTab, setSelectedTab] = useState<string>('about')

  const renderContent = () => {
    switch (selectedTab) {
      case 'about':
        return <AboutCard />
      case 'rates':
        return <RatesCard />
      case 'cashback':
        return <CashbackCard />
      case 'faq':
        return <FaqCard />
      default:
        return null
    }
  }

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab)
  }

  return (
    <section className="card-feature">
      <nav className="card-feature__nav">
        <ul className="card-feature__nav-items">
          <li className="card-feature__nav-item">
            <a
              href="#about"
              onClick={() => handleTabClick('about')}
              className={`card-feature__nav-link ${selectedTab === 'about' ? 'card-feature__nav-link--selected' : ''}`}>
              About card
            </a>
          </li>
          <li className="card-feature__nav-item">
            <a
              href="#rates"
              onClick={() => handleTabClick('rates')}
              className={`card-feature__nav-link ${selectedTab === 'rates' ? 'card-feature__nav-link--selected' : ''}`}>
              Rates and conditions
            </a>
          </li>
          <li className="card-feature__nav-item">
            <a
              href="#cashback"
              onClick={() => handleTabClick('cashback')}
              className={`card-feature__nav-link ${selectedTab === 'cashback' ? 'card-feature__nav-link--selected' : ''}`}>
              Cashback
            </a>
          </li>
          <li className="card-feature__nav-item">
            <a
              href="#faq"
              onClick={() => handleTabClick('faq')}
              className={`card-feature__nav-link ${selectedTab === 'faq' ? 'card-feature__nav-link--selected' : ''}`}>
              FAQ
            </a>
          </li>
        </ul>
      </nav>
      <div className="card-feature__container">{renderContent()}</div>
    </section>
  )
}
