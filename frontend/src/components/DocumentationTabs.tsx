import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container, styled } from '@mui/material';
import { MarkdownFromFile } from './FromFile';
import theme from '../theme';

const StyledDocPanel = styled(Box)(({ theme }) => `
  zIndex: 1;
  background: ${theme.palette.background.default};
`);

const StyledDocBackground = styled(Box)(({ theme }) => `
  zIndex: 1;
  background: ${theme.palette.secondary.main};
  color: ${theme.palette.secondary.contrastText};
`);

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  this_tab: string;
}

function DocTabPanel(props: TabPanelProps) {
  const { children, value, index, this_tab, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${this_tab}`}
      aria-labelledby={`${this_tab}`}
      {...other}
    >
      {value === index && (
        <StyledDocPanel position="static" textAlign='left' sx={{p:2}} >
            <Typography color="#121212">{children}</Typography>
        </StyledDocPanel>
      )}
    </div>
  );
}

function a11yProps(index: number, this_tab: string) {
    return {
      id: `${this_tab}-${index}`,
      'aria-controls': `${this_tab}-${index}`,
    };
  }

export default function DocumentationTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabs = ["methodology", "attribution", "about"];
  const tab_buttons = [];
  const tab_contents = [];
  for (let i=0; i < tabs.length; i++){
    tab_buttons.push(
        <Tab label={`${tabs[i]}`} {...a11yProps(i, `${tabs[i]}`)}/>
    )
    tab_contents.push(
        <DocTabPanel this_tab={tabs[i]} value={value} index={i}>
            <MarkdownFromFile markdown_file={`markdown/documentation-tabs/${tabs[i]}.md`}/>
        </DocTabPanel>
    )
  }
  return (
    <Container maxWidth="md" >
        <StyledDocBackground sx={{p:2, borderTop: 2, borderRadius: 1, borderColor: theme.palette.primary.main}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="documentation tabs">
                    {tab_buttons}
                </Tabs>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                {tab_contents}
            </Box>
        </StyledDocBackground>
        <p></p>
    </Container>
  );
}