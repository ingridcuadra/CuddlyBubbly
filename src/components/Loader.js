import React from 'react';
import { Metronome } from '@uiball/loaders'

const Loader = () => {
    return (
        <div className="loader">
            <Metronome size={40} speed={1.6} color="#a3a3cee0" />
        </div>
    );
}

export default Loader;