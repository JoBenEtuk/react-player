import React from 'react';
import PlaylistItems from './PlaylistItems';
import Nightmode from '../Nightmode';
import PlaylistHeader from '../PlaylistHeader';
import StyledPlaylist from '../styles/StyledPlaylist';


const Playlist = ({ videos, active, nightModeCallback, nightMode }) => (
    <StyledPlaylist>
        <Nightmode nightModeCallback={nightModeCallback} nightMode={nightMode} />
        <PlaylistHeader active={active} total={videos.length} />
        <PlaylistItems videos={videos} active={active} />
    </StyledPlaylist>
)

export default Playlist
