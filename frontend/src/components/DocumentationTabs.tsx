import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { MarkdownFromFile } from './FromFile';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  this_tab: string;
}

function DocTabPanel(props: TabPanelProps) {
  const { children, value, index, this_tab, ...other } = props;
  console.log(index, value)
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${this_tab}`}
      aria-labelledby={`${this_tab}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


interface DocTabProps {
    this_tab: string;
    index: number;
  }


function a11yProps(index: number, this_tab: string) {
    return {
      id: `${this_tab}-${index}`,
      'aria-controls': `${this_tab}-${index}`,
    };
  }

export default function BasicTabs() {
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
    <Container maxWidth="sm" disableGutters={true}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="documentation tabs">
          {tab_buttons}
        </Tabs>
      </Box>
      {tab_contents}
    </Container>
  );
}