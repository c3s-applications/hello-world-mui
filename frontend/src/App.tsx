import { Box, CssBaseline, styled } from '@mui/material';
import viteLogo from '/vite.svg'
import './App.css'
// import { ECMWFLogo, LogoBanner, LogoBox } from './components/Logos' 
import {FooterBar, HeaderBar} from './components/BorderBars'

const AppContainer = styled(Box)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

function App() {

  return (
    <AppContainer>
    <CssBaseline />
      <div>
        <HeaderBar/>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div>
        <FooterBar/>
      </div>
    </AppContainer>
  )
}

export default App
