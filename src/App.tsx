import React, { FC } from 'react';
import { Container, CssBaseline, styled } from '@mui/material';
interface AppProps {
}
const Root = styled(Container)(() => ({
  background: "black",
  maxWidth: "1920px"
}))
let App: FC<AppProps> = function App() {
  return (
    <Root >
      <CssBaseline />
    </Root>
  );
}
// export default App;
export default App
