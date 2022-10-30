import React, { FC } from 'react';
import { Container, Box,CssBaseline, styled } from '@mui/material';
import Header from './parts/Header';
import {Provider} from "react-redux"
import store from "./store"
import HeaderConnector from './parts/HeaderConnector';
interface AppProps {
}
const Root = styled(Box)(() => ({
  background: "#131720",
  maxWidth: "1920px",
  width: "100%",
  margin:"0 auto"
}));

let App: FC<AppProps> = function App() {
  return (
  <Provider store={store}>
    <Root >
      <CssBaseline />
      <HeaderConnector/>
      </Root>
      </Provider>
  );
}
// export default App;
export default App
