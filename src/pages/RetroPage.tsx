import React, { useState } from 'react'

import { useParams } from 'react-router';
import { useRetroEvent } from '../RetroContext';

const RetroPage = (): JSX.Element => {
    const { id } = useParams();

    const [ohYeahCount, setOhYeahCount] = useState(0);

    useRetroEvent('AddOhYeah!', () => {
        setOhYeahCount(ohYeahCount + 1);
    })

    return <>Oh yeah count: {ohYeahCount}</>;
}

export default RetroPage;