import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SongList extends Component {
    render() {
        return (
            <div>
                Song LIst
            </div>
        )
    }
}

const getMystate = (state) => {
    console.log(state);
    return state;
};

export default connect(getMystate)(SongList);
