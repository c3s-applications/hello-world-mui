import { AppBar, Box, Divider, Grid, styled, Toolbar } from "@mui/material";
import { LogoBanner, ThisAppLogo } from "./Logos";
import { MarkdownFromFile } from "./FromFile";

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

export const FooterBar = () => {
  return (
    <StyledFootBar color="secondary" position="static">
      <Toolbar variant="dense">
        <Grid container columns={1} justifyContent="center" textAlign='left' >
          <Grid item sx={{ width: 3/4 }}><LogoBanner mode='negative' class="logo-resize"/></Grid>
          <Grid item sx={{ width: 3/4 }} >
            <Divider light={true}/>
            <MarkdownFromFile markdown_file="markdown/implemented-by.md"/>
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