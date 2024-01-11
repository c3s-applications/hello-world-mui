import React from 'react'
import { Grid } from "@mui/material"
// import Grid from '@mui/material/Grid'; // Grid version 1
// import ImageList, ImageListItem from '@mui/material';


const Logo = ({organisation, mode = 'positive', href='.', target="", ...props}) => (
    <a href={`${href}`} target={`${target}`}>
        <img
            src={`logos/${organisation}-${mode}.png`}
            className={`logo ${organisation}`}
            alt={`${organisation} Logo`}
            loading="lazy"
            {...props}
        />
    </a>
)

export const LogoBanner = (props) => (
    <Grid container columns={4} wrap='nowrap' columnSpacing={2} alignItems="center" justifyContent="flex-end">
        <Grid item sx={{width: 1/4}}><C3SLogo {...props}/></Grid>
        <Grid item sx={{width: 1/4}}><ECMWFLogo {...props}/></Grid>
        <Grid item sx={{width: 1/4}}><CopernicusLogo {...props}/></Grid>
        <Grid item sx={{width: 1/4}}><EULogo {...props}/></Grid>
    </Grid>
)
export const ThisAppLogo = (props) => (
    <Logo organisation='this-app' {...props}/>
)

export const C3SLogo = (props) => (
    <Logo organisation='c3s' href='https://climate.copernicus.eu/' target="_blank" {...props}/>
)

export const ECMWFLogo = (props) => (
    <Logo organisation='ecmwf' href='https://www.ecmwf.int/' target="_blank" {...props}/>
)

export const CopernicusLogo = (props) => (
    <Logo organisation='copernicus' href='https://www.copernicus.eu/en' target="_blank" {...props}/>
)

export const EULogo = (props) => (
    <Logo organisation='eu' href='https://www.copernicus.eu/en' target="_blank" {...props}/>
)