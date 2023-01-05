// import React from 'react';
// import {Stack, Typography,  Button, ButtonGroup} from "@mui/material"
// import Version1 from "../styles/components/asset/gif_pong.gif"
// import Version2 from "../styles/components/asset/Version2.gif"
// import Version3 from "../styles/components/asset/Version3.gif"

// // import * as React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// const StyledBox = styled(Box)({
//   height:280,
//   width:'100%',
//   cusor: "pointer",
//   backgroundRepeat:'no-repeat',
//   backgroundPosition:'center',
//   backgroundSize:'cover',

// });
// const StyledTypographie = styled(Typography)({
//   margin:'25% 50px 25% 50px',
//   // marginTop:'100px',
//   background: 'white',
//   backgroundPosition:'center',

//   color:'black',
//   opacity: '0.8',
  
// })


// export default function Play() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 3, md: 18 }}>
//         {/* {Array.from(Array(6)).map((_, index) => ( */}
//           <Grid item xs={6} >
//             {/* <Item>xs=2</Item> */}
//             <StyledBox sx={{backgroundImage:`url(${Version1})`}}>   
//             <StyledTypographie align='center' variant='h3'>
//                 Version1
//             </StyledTypographie>
//             </StyledBox>
//             <Button variant="contained" sx={{align:'bottom' }}>PLAY</Button >
//         </Grid>
       
       
       
       
       
//         <Grid item xs={6}  >
//             <Item>xs=3</Item>
//             <Item>PLAY</Item>
//         </Grid>
//         <Grid item xs={6}  >

//             <Item>xs=5</Item>
//             <Item>PLAY</Item>
//           </Grid>
//         {/* ))} */}
//       </Grid>
//     </Box>
//   );
// }
import Version1 from "../../styles/asset/gif_pong.gif";
import Version2 from "../../styles/asset/Version2.gif";
import Version3 from "../../styles/asset/Version3.gif";
import {Link, NavLink} from "react-router-dom";


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { AirlineSeatReclineNormalSharp } from "@mui/icons-material";
import Navbar from "../nav/Nav"

const images = [
  {
    url: Version1,
    title: 'Play1',
    width: '33.33%',
    
  },
  {
    url: Version2,
    title: 'Play2',
    width: '33.33%',
   
  },
  {
    url: Version3,
    // url: '/static/images/buttons/camera.jpg',
    title: 'Play3',
    width: '33.33%',
  
   
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundPosition: 'center 4%',
  
 

});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  border: '5px solid',
  borderColor: 'white',
  // padding: '10px 12px',
  
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
  return (
    <React.Fragment>
        <Navbar />

    <Box>
    <Typography align ="center" variant="h1" sx={{fontWeight:900}} >
                  <b style={{color:'black'}}>Versions</b>
    </Typography>
    <Typography align ="center" variant={"body1"} pt={8}>
                 Choisissez votre version du jeu !!
             </Typography>
    </Box>

    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 100, width: '100%', }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >

{/* `url(${Version2})` */}
          {/* <ImageSrc style={{ backgroundImage: `url(${ananas})` }} />
          <ImageSrc style={{ backgroundImage: `url(${Version2})` }} /> */}
         
          {/* <ImageSrc style={{ backgroundImage: `url(${cerise})` }} /> */}
         
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }}/>


          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
          <NavLink to='/jeux' >
                             {/* {item.Name} */}
            {/* <a href={'http://localhost:3000/jeux'}> */}
            <Typography
              component="span"
              variant="subtitle1"
              color="white"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}

              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
       {/* </a>  */}
      </NavLink>

          </Image>
        </ImageButton>
      ))}
    </Box>
    {/* </NavLink> */}
          </React.Fragment>
  );
}