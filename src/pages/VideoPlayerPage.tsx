import React, { useState } from 'react';
import Episode from '../data/Episode';
import { Container } from '@mui/material';

export default function VideoPlayerPage(_episode: Episode) {
    const [episode, setEpisode] = useState(_episode);

    return (
        <Container>

        </Container>
    )
}