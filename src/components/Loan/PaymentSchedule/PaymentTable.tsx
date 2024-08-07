import React, { useState } from 'react'
import { FaSortUp, FaSortDown } from 'react-icons/fa'

type PaymentTableProps = {
  columns: string[]
  data: {
    number: number
    date: string
    totalPayment: number
    interestPayment: number
    debtPayment: number
    remainingDebt: number
  }[]
}

export const PaymentTable: React.FC<PaymentTableProps> = ({
  columns,
  data
}) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const columnKeys = columns.map((column) => column.replace(/ /g, ''))

  if (!Array.isArray(data)) {
    return <div>Error: Invalid data format</div>
  }

  const handleSort = (columnKey: string) => {
    const isAsc = sortColumn === columnKey && sortDirection === 'asc'
    setSortDirection(isAsc ? 'desc' : 'asc')
    setSortColumn(columnKey)
  }

  const sortedData = [...data].sort((a, b) => {
    if (sortColumn === null) return 0

    const aValue = a[sortColumn as keyof typeof a]
    const bValue = b[sortColumn as keyof typeof b]

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue
    } else if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    } else {
      return 0
    }
  })

  return (
    <div className="payment-table">
      <table className="payment-table__table">
        <thead className="payment-table__head">
          <tr className="payment-table__row">
            {columns.map((column, index) => {
              const columnKey = column.replace(/ /g, '')
              return (
                <th
                  key={index}
                  className="payment-table__header-cell"
                  onClick={() => handleSort(columnKey)}>
                  {column.toUpperCase()}
                  {sortColumn === columnKey ? (
                    sortDirection === 'asc' ? (
                      <FaSortUp className="payment-table__sort-icon" />
                    ) : (
                      <FaSortDown className="payment-table__sort-icon" />
                    )
                  ) : (
                    <FaSortUp className="payment-table__sort-icon" />
                  )}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className="payment-table__body">
          {sortedData.map((row, rowIndex) => (
            <tr key={rowIndex} className="payment-table__row">
              {columnKeys.map((column) => (
                <td key={column} className="payment-table__cell">
                  {row[column as keyof typeof row]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
