import { useState } from 'react';
import './App.css';

import TitleBar from './components/TitleBar.jsx';
import Cover from './components/Cover.jsx';
import Controls from './components/Controls.jsx';
import TrackMeta from './components/TrackMeta.jsx';

function App() {
    return (
        <>
            <TitleBar/>
            <main>
                <Cover/>
                <TrackMeta/>
                <Controls/>
            </main>
        </>
    );
}

export default App;
