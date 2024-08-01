import { Tariff } from 'types/TariffCardProps'

export const convertTariffForApi = (tariff: Tariff) => ({
  applicationId: tariff.id,
  requestedAmount: parseInt(tariff.requestedAmount.replace(/\D/g, '')),
  totalAmount: parseInt(tariff.totalAmount.replace(/\D/g, '')),
  term: parseInt(tariff.term.split(' ')[0]),
  monthlyPayment: parseFloat(tariff.monthlyPayment.replace(/\D/g, '')),
  rate: parseFloat(tariff.rate.replace('%', '')),
  isInsuranceEnabled: tariff.insuranceIncluded,
  isSalaryClient: tariff.salaryClient
})
