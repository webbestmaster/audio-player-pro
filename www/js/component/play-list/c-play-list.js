// @flow

import React, {useState} from 'react';

import {PlayListProvider} from '../../provider/play-list/c-play-list-context';
import {PlayListPanel} from '../../../../src/play-list-panel/c-play-list-panel';

export function PlayList(): React$Node {
    return (
        <div>
            <PlayListProvider>
                <hr/>

                <h1>try play list</h1>

                <hr/>

                <PlayListPanel/>

                <hr/>
            </PlayListProvider>
        </div>
    );
}
