import { TableRow } from '@mui/material'
import React from 'react'
import Series from '../data/Series'

type Props = {
    series: Series,
    onClick: Function
}

const SeriesRow = ({ series, onClick }: Props) => (
    <TableRow onClick={() => onClick(series)}>
        {series.Name}
    </TableRow>
)

export default SeriesRow