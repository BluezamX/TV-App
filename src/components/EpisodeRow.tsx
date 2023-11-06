import { TableRow } from '@mui/material'
import React from 'react'
import Episode from '../data/Episode'

type Props = {
    episode: Episode,
    onClick: Function
}

const EpisodeRow = ({ episode, onClick }: Props) => (
    <TableRow onClick={() => onClick()} style={{ color: episode.watched ? "green" : "red" }}>
        {episode.number + ": " + episode.name}
    </TableRow>
)

export default EpisodeRow