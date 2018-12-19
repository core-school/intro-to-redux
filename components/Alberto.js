import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { dateUnaVuelta } from '../redux/actionCreators';


const _Alberto = ({misVueltas, dispatch}) => {
    return (
        <div style={{border:'1px solid red', padding:'10px'}}>
            <p>Hola Alberto</p>
            <p>has dado <b>{misVueltas}</b> vueltas.</p>
            <button 
            onClick={() => dispatch(dateUnaVuelta())}
            >¡Date una vuelta Alberto!</button>
        </div>
    )
}
export const Alberto = connect(state => ({
    misVueltas: state.vueltas
}))(_Alberto);