
import React, { useRef } from 'react';
import {Box, Typography} from "@mui/material"
import HomesImage from "../../styles/asset/gif_pong.gif"
import Versions from "../../components/versions/Versions";
import Navbar from '../../components/nav/Nav';
import "./home.scss"


// import Navbar from '../components/Nav';

// const styles = {
//   paperContainer: {
//      height: 750,
//      width:'100%',
//     backgroundImage: `url(${HomesImage})`,
//     backgroundRepeat: 'no-repeat',
//     backgrounPosition:'left',
//     backgroundSize: '37%',
//     //  backgroundAttachment:'fixed',
//     backgroundColor: 'red',
//     display:'flex',
//     justifyContent:'left'
//   }
// };





  const Home = (data: any) => {
  


    // return (
    //     <div className="home-container">
    //         <Nav />

    //         <Box> Home</Box>

    //         <div>
    //             <label htmlFor="home"> nbr de publi</label>       
    //         </div>
    //     </div>sx={{width: {xs:'100%', sm:'50%', md:'40%'}}}
    // )
    // className="body"
    


    return (
      <React.Fragment >
        <Navbar />
      {/* // <Box sx={{width:'100%', padding: 0}}>

    // <Box style={styles.paperContainer}  > */}
    {/* <Box > */}
        {/* <Navbar /> */}
        {/* <Typography align ="center" variant="h3" sx={{fontWeight:900}} >
            <b style={{color:'white'}}>Po</b>
            <b style={{color:'red'}}>ng</b>
        </Typography> */}
        


         {/* <img src={GifPong} alt="image"  className="pong"/>
         <img src={Clavier} alt="image" className="clavier"/> */}
      {/* </Box> */}
        
        {/* // </Box> */}

        <Box 
        sx={{
          backgroundImage:`url(${HomesImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition:'center',
          backgroundSize: 'cover',
          //  backgroundAttachment:'fixed',
          backgroundColor: 'black',
          display:'flex',
          justifyContent:'center',
          height: 750,
          width:'100%',
          // position:'absolute'
          // overflow:'auto',

          
        }}
        >
          <Box sx={{width: {xs:"100%", sm:"50%", md:"40%"}, padding: {xs:3, sm:2, md:20}}}>
            <Box sx={{background:"white", opacity:"0.8"}}>
    
              <Typography align ="center" variant="h1" sx={{fontWeight:900}} >
                  <b style={{color:'black'}}>Pong</b>
              </Typography>
          
            <Typography align ="center" variant={"h2"} pt={8}>
                 Règles :
             </Typography>
            <Typography align ="center" variant={"body1"} pt={8}>
                 Utilisez les commandes pour déplacer la raquette vers le haut ou le bas de manière à renvoyer la balle à votre adversaire, en l'empêchant de passer. 
                 Celui qui remporte le match est bien entendu celui qui marque le plus de points.
             </Typography>
            </Box>
            
             {/* <img src={GifPong} alt="image"  className="pong" /> */}
            {/* <img src={Clavier} alt="image" className="clavier"/> */}
           {/* <img  src={HomesImage} alt="image" width='40%' height='30%'/> */}
    
          </Box>

        </Box>
          <Versions />
      </React.Fragment>
    );
 };

 export default Home;

