import React, { useEffect, useState } from 'react';
import '../App.css';
import { Table, TableHead, TableRow, TableCell, TableBody, Container, Stack, ListItem } from '@mui/material';
import SeriesRow from '../components/SeriesRow';
import Series from '../data/Series';
import Season from '../data/Season';
import SeasonRow from '../components/SeasonRow';
import Episode from '../data/Episode';
import EpisodeRow from '../components/EpisodeRow';

export default function ShowEpisodesPage() {
    const [series, setSeries] = useState<Series[]>(new Array<Series>());
    const [seasons, setSeasons] = useState<Season[]>(new Array<Season>());
    const [showSeasons, setShowSeasons] = useState(false);
    const [episodes, setEpisodes] = useState<Episode[]>(new Array<Episode>());
    const [showEpisodes, setShowEpisodes] = useState(false);

    useEffect(() => {
        getSeries();
    }, []);

    function getSeries() {
        const response = fetch("https://3jhuxsa1y2.execute-api.ap-northeast-1.amazonaws.com/dev/Series/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                return data.body;
            })
            .then(series => {
                setSeries(series as Series[]);
            });
    }

    function getSeriesTable(series: Series[]) {
        return series.map((serie: Series) => <SeriesRow key={serie.Id} series={serie} onClick={onClickSeries} />)
    }

    function onClickSeries(series: Series) {
        getSeasons(series.Id);
        setShowSeasons(true);
        setShowEpisodes(false);
    }

    function getSeasons(seriesId: number) {
        const response = fetch("https://3jhuxsa1y2.execute-api.ap-northeast-1.amazonaws.com/dev/{GetSeasons+}?SeriesId=" + seriesId, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
            .then(response => {
                console.log(response);
                return response.text();
            })
            .then(data => {
                console.log(data);

                data = data.split('\'').join('\"');

                console.log(data);
                return JSON.parse(data);
            })
            .then(seasons => {
                console.log(seasons);
                // setSeasons(seasons as Season[]);
            });
    }

    function getSeasonsTable(seasons: Season[]) {
        return seasons.map((season: Season) => <SeasonRow key={season.Number} seasonNumber={season.Number} seasonName={season.Name} onClick={onClickSeason} />)
    }

    function onClickSeason() {
        setEpisodes(getEpisodes());
        setShowEpisodes(true);
    }

    function getEpisodes() {
        const episodes: Episode[] = [{
            id: 0,
            number: 27,
            name: "De Aliens vallen aan!",
            description: "",
            watched: true
        }, {
            id: 0,
            number: 28,
            name: "De Raimon 11 vechten terug!",
            description: "",
            watched: false
        }]
        return episodes;
    }

    function getEpisodeTable(episodes: Episode[]) {
        return episodes.map((episode: Episode) => <EpisodeRow key={episode.number} episode={episode} onClick={onClickEpisode} />)
    }

    function onClickEpisode() {
        setShowSeasons(true);
        setShowEpisodes(true);
    }

    return (
        <Container>
            Upon loading the page, send a request to retrieve all series into the list below.
            <Stack direction="row" spacing={2}>
                <ListItem>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell onClick={getSeries}>
                                    Series
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                {getSeriesTable(series)}
                            </TableRow>
                        </TableBody>
                    </Table>
                </ListItem>
                <ListItem>
                    {showSeasons && <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Seasons
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                {getSeasonsTable(seasons)}
                            </TableRow>
                        </TableBody>
                    </Table>}
                </ListItem>
                <ListItem>
                    {showEpisodes && <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Episodes
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                {getEpisodeTable(episodes)}
                            </TableRow>
                        </TableBody>
                    </Table>}
                </ListItem>
            </Stack>
        </Container>
    );
}