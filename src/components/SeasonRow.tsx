import { TableRow } from '@mui/material'
import React from 'react'

type Props = {
    seasonNumber: number,
    seasonName?: string,
    onClick: Function
}

const SeasonRow = ({ seasonNumber, seasonName, onClick }: Props) => (
    <TableRow onClick={() => onClick()}>
        {seasonName ? seasonNumber + ": " + seasonName : seasonNumber}
    </TableRow>
)

export default SeasonRow