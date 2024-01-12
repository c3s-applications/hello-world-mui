import { Box, CssBaseline, styled } from '@mui/material';
import viteLogo from '/vite.svg'
import './App.css'
// import { ECMWFLogo, LogoBanner, LogoBox } from './components/Logos' 
import {FooterBar, HeaderBar} from './components/BorderBars'
import DocumentationTabs from './components/DocumentationTabs';
import { PlotlyChartInline, PlotlyChartFromFile } from './components/PlotlyChart';

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
        <p></p>
        <a href="https://en.wikipedia.org/wiki/Christopher_Walken" target="_blank">
          <img src="for-fun/walken.gif" className="walken" alt="Walken" />
        </a>
        <p></p>
      </div>
      <div><PlotlyChartInline/></div>
      <div><PlotlyChartFromFile/></div>
      <div><DocumentationTabs/></div>
      <div>
        <FooterBar/>
      </div>
    </AppContainer>
  )
}

export default App
