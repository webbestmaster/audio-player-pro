// @flow

import type {SavedTrackType, TrackType} from '../../audio-player-type';

// eslint-disable-next-line complexity
export function getActualContent(track: SavedTrackType | TrackType): React$Node | string {
    const {content, mediaMetadata, src} = track;

    if (content) {
        return content;
    }

    const mediaTitle = mediaMetadata && mediaMetadata.title;

    if (mediaTitle) {
        return mediaTitle;
    }

    const fileName = src.split('/').pop();

    if (!fileName) {
        return '';
    }

    const indexOfExtension = fileName.lastIndexOf('.');

    if (indexOfExtension > 0) {
        return fileName.slice(0, indexOfExtension);
    }

    return fileName;
}
