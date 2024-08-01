import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tariff } from 'types/TariffCardProps'

type TariffsState = {
  topFourTariffs: Tariff[]
  selectedTariffId: number | null
  isMessageVisible: boolean
}

const initialState: TariffsState = {
  topFourTariffs: [],
  selectedTariffId: null,
  isMessageVisible: false
}

const tariffsSlice = createSlice({
  name: 'tariffs',
  initialState,
  reducers: {
    setTopFourTariffs(state, action: PayloadAction<Tariff[]>) {
      state.topFourTariffs = action.payload
    },
    selectTariff(state, action: PayloadAction<number>) {
      state.selectedTariffId = action.payload
      state.isMessageVisible = true
    },
    hideMessage(state) {
      state.isMessageVisible = false
    }
  }
})

export const { setTopFourTariffs, selectTariff, hideMessage } =
  tariffsSlice.actions
export default tariffsSlice.reducer
