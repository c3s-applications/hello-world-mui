import { AppBar, Box, Divider, Grid, styled, Toolbar, Typography } from "@mui/material";
import ReactMarkdown from 'react-markdown'
// import Breadcrumbs from "../Breadcrumbs";
import { LogoBanner, ThisAppLogo } from "./Logos";
import { useEffect, useState } from "react";

const StyledHeadBar = styled(AppBar)(({ theme }) => `
  zIndex: 0;
  
  &.MuiPaper-root {
    background: ${theme.palette.navigation.main};
    color: ${theme.palette.navigation.contrastText};
  }
`);

const StyledFootBar = styled(AppBar)(({ theme }) => `
  zIndex: 0;
  
  &.MuiPaper-root {
    background: ${theme.palette.secondary.main};
    color: ${theme.palette.secondary.contrastText};
  }
`);

const StyledTypography = styled(Typography)(({ theme }) => `
  margin-bottom: ${theme.spacing(3)};
`)

export const HeaderBar = () => {
  return (
    <StyledHeadBar color="primary" position="static">
      <Toolbar variant="dense">
        <Box sx={{ width: 1/3 }}><ThisAppLogo mode='negative' class="logo-resize"/></Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ width: 1/2 }} ><LogoBanner mode='negative' class="logo-resize" /></Box>
      </Toolbar>
    </StyledHeadBar>
  )
}

const MarkdownFromFile = ({markdown_file="text.md"}) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(markdown_file)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);
  return (
    <div>
      <ReactMarkdown children={content}/>
    </div>
  );
}

export const FooterBar = () => {
  return (
    <StyledFootBar color="secondary" position="static">
      <Toolbar variant="dense">
        <Grid container columns={1} justifyContent="center" textAlign='left' >
          <Grid item sx={{ width: 3/4 }}><LogoBanner mode='negative' class="logo-resize"/></Grid>
          <Grid item sx={{ width: 3/4 }} >
            <Divider light={true}/>
            <MarkdownFromFile markdown_file="standard-texts/implemented.md"/>
          </Grid>
        </Grid>
      </Toolbar>
    </StyledFootBar>
  )
}



{/* <Grid container columns={2}>
<Grid item m={2}><ThisAppLogo mode='negative' class='max-width-100'/></Grid>
<Grid item m={8}><LogoBanner mode='negative' class='max-width-100'/></Grid>
</Grid> */}