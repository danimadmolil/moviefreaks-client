import React from "react";
import { connect } from 'react-redux'
import {  ConnectedProps } from 'react-redux';
import { closeDrawer, openDrawer } from "../store/slice/drawer";
import HeaderMenu from "./HeaderMenu";

type HeaderProps = ConnectedProps<typeof connector>

function HeaderMenuConnector(props:HeaderProps) {
    return <HeaderMenu closeDrawer={props.closeDrawerDispatch } isDrawerOpen={props.isDrawerOpen } />
}
const mapStateToProps = (state: any) => ({ isDrawerOpen: state.drawer.open });

const mapDispatchToProps = (dispatch: any) => ({
  closeDrawerDispatch: () => {
    dispatch(closeDrawer({}));
  },
});

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);
export {connector};
export default connector(HeaderMenuConnector)
