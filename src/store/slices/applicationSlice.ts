import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ApplicationState = {
  currentStep: number
  applicationId: string | null
  isTariffSelected: boolean
  isMessageVisible: boolean
}

const initialState: ApplicationState = {
  currentStep: 1,
  applicationId: null,
  isTariffSelected: false,
  isMessageVisible: false
}

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setApplicationId(state, action: PayloadAction<string>) {
      state.applicationId = action.payload
      localStorage.setItem('applicationId', action.payload)
    },
    setCurrentStep(state, action: PayloadAction<number>) {
      state.currentStep = action.payload
      localStorage.setItem('currentStep', action.payload.toString())
    },
    initializeApplicationState(state) {
      const savedApplicationId = localStorage.getItem('applicationId')
      const savedCurrentStep = localStorage.getItem('currentStep')
      const savedIsTariffSelected = localStorage.getItem('isTariffSelected')
      const savedIsMessageVisible = localStorage.getItem('isMessageVisible')

      if (savedApplicationId) {
        state.applicationId = savedApplicationId
      }
      if (savedCurrentStep) {
        state.currentStep = parseInt(savedCurrentStep, 10)
      }
      if (savedIsTariffSelected) {
        state.isTariffSelected = savedIsTariffSelected === 'true'
      }
      if (savedIsMessageVisible) {
        state.isMessageVisible = savedIsMessageVisible === 'true'
      }
    },
    setTariffSelected(state, action: PayloadAction<boolean>) {
      state.isTariffSelected = action.payload
      localStorage.setItem('isTariffSelected', action.payload.toString())
    },
    setMessageVisible(state, action: PayloadAction<boolean>) {
      state.isMessageVisible = action.payload
      localStorage.setItem('isMessageVisible', action.payload.toString())
    },
    resetTariffSelection(state) {
      state.isTariffSelected = false
      localStorage.setItem('isTariffSelected', 'false')
    }
  }
})

export const {
  setApplicationId,
  setCurrentStep,
  initializeApplicationState,
  setTariffSelected,
  setMessageVisible,
  resetTariffSelection
} = applicationSlice.actions
export default applicationSlice.reducer
