import React from 'react'
import { connect } from "react-redux";
import Header from './Header';
import {  ConnectedProps } from 'react-redux';
import {  openDrawer } from '../store/slice/drawer';

type HeaderProps = ConnectedProps<typeof connector>
export const HeaderConnector = (props:HeaderProps) => {
    
    return (
        <Header openDrawer={props.openDrawer} isDrawerOpen={ props.isDrawerOpen} />
    );
}

const mapStateToProps = (state:any) => ({isDrawerOpen:state.drawer.open})

const mapDispatchToProps = (dispatch: any) => ({
    openDrawer: () => {
        dispatch(openDrawer({}))
    }

})

const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(HeaderConnector)