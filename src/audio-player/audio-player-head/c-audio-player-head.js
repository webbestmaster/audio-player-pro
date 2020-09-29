// @flow

import React, {Component, type Node} from 'react';
import classNames from 'classnames';

import type {PlayerPlayingStateType, PlayerRepeatingStateType} from '../audio-player-type';

import {AudioPlayerHeadPlayingBar} from './audio-player-head-playing-bar/c-audio-player-head-playing-bar';
import {AudioPlayerHeadControls} from './audio-player-head-controls/c-audio-player-head-controls';

import audioPlayerHeadStyle from './audio-player-head.scss';

type PropsType = {|
    +onClickShuffle: () => mixed,
    +onClickRepeat: () => mixed,
    +onClickPrevTrack: () => mixed,
    +onClickPlay: () => mixed,
    +onClickNextTrack: () => mixed,
    +onClickTrackList: () => mixed,
    +onClickMuteVolume: () => mixed,

    +playingState: PlayerPlayingStateType,
    +isShuffleOn: boolean,
    +repeatingState: PlayerRepeatingStateType,
|};

type StateType = {};

export class AudioPlayerHead extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    render(): Node {
        const {props} = this;
        const {
            onClickShuffle,
            onClickRepeat,
            onClickPrevTrack,
            onClickPlay,
            onClickNextTrack,
            onClickTrackList,
            onClickMuteVolume,

            playingState,
            isShuffleOn,
            repeatingState,
        } = props;

        return (
            <div className={audioPlayerHeadStyle.audio_player_head}>
                <AudioPlayerHeadControls
                    isShuffleOn={isShuffleOn}
                    onClickNextTrack={onClickNextTrack}
                    onClickPlay={onClickPlay}
                    onClickPrevTrack={onClickPrevTrack}
                    onClickRepeat={onClickRepeat}
                    onClickShuffle={onClickShuffle}
                    onClickTrackList={onClickTrackList}
                    playingState={playingState}
                    repeatingState={repeatingState}
                />

                <AudioPlayerHeadPlayingBar onClickMuteVolume={onClickMuteVolume}/>
            </div>
        );
    }
}
