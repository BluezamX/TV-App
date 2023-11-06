import React, { useEffect, useState } from 'react';
import Episode from '../data/Episode';
import { Container } from '@mui/material';

export default function UpdateDatabasePage() {
    useEffect(() => {
        googleDriveUtilsExample();
    }, [])

    // Google Drive Utils examples
    function googleDriveUtilsExample() {
        const { UtilsGDrive } = require('utils-google-drive');
        const utilsGDrive = new UtilsGDrive({
            pathCredentials: './resources/credentials.json',
            pathToken: './resources/token.json'
        });

        // get id of file in Google Drive whose name is 'todos.txt'
        // and whose parent folder is named 'lists'
        utilsGDrive.getFileId({
            fileName: 'Inazuma Eleven',
            parentName: 'Series'
        }).then((fileId: any) => {
            console.log(fileId);
        });

        // make a batch request
        const requests = [
            {
                url: 'https://www.googleapis.com/drive/v3/files?q=name%20%3D%20%22FILE%22',
                method: 'GET',
            },
            {
                url: 'https://www.googleapis.com/drive/v3/files/fileId/watch',
                method: 'POST',
                data: {
                    'kind': 'api#channel',
                    'id': 'channelId'
                }
            }
        ];

        utilsGDrive.batch(requests).then((responses: any) => {
            console.log(responses);
        });
    };

    return (
        <Container>
            DatabasePage :
        </Container>
    )
}
