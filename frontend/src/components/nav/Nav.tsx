// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import {NavLink} from "react-router-dom"

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

// const drawerWidth = 240;
// const navItems = [{Name:'Home', Link:"/"},{Name:'About', Link:"/"}, {Name:'Profil', Link:"/id"}];

// export default function DrawerAppBar(props: Props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//         //  <ListItem  key={item} disablePadding >
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               {/* <ListItemText primary={item} /> */}
//              </ListItemButton>
//         //   </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             <NavLink to="/">
//                 MUI
//             </NavLink>
//           </Typography>
//           {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}> */}
//             {navItems.map((item) => (
//                <Button  sx={{ color: '#fff' }}>
//                 <NavLink to={item.Link}>
                    
//                 <Button  sx={{ color: '#fff' }}>
//                     { item.Name }
//                 </Button>
//                 </NavLink>
//                 {/* { item.Name } */}
//               </Button>
//             ))}
//           {/* </Box> */}
//         </Toolbar>
//       </AppBar>
//       <Box component="nav">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//         <Typography>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
//           fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
//           aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
//           cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
//           at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
//           Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
//           numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
//           asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
//           assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
//           soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
//           ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
//           soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
//           Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
//           delectus quo eius exercitationem tempore. Delectus sapiente, provident
//           corporis dolorum quibusdam aut beatae repellendus est labore quisquam
//           praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
//           deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
//           fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
//           recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
//           debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
//           praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
//           voluptate iure labore, repellendus beatae quia unde est aliquid dolor
//           molestias libero. Reiciendis similique exercitationem consequatur, nobis
//           placeat illo laudantium! Enim perferendis nulla soluta magni error,
//           provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
//           iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
//           Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
//           reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
//           cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
//           consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
//           Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
//           dolores sunt inventore perferendis, aut sapiente modi nesciunt.
//         </Typography>
//       </Box>
//     </Box>
//   );
// }




//import { AppBar } from "@mui/material";
import { BrowserRouter, Route, Link } from "react-router-dom";

import React, { useState } from "react";
import {AppBar, Box, Menu, MenuItem, styled, Toolbar, Typography} from "@mui/material";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import {NavLink} from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/system';
import Fade from '@mui/material/Fade';
import "./nav.scss"


import {Home as HomeIcon, PersonAdd, AccountCircle, Notifications, Message, Menu as MenuIcon} from "@mui/icons-material/";
// import HomeIcon from '@mui/icons-material/Home';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MessageIcon from '@mui/icons-material/Message';
// import MenuIcon from '@mui/icons-material/Menu';
// import Menu as MenuIcon from '@mui/icons-material/Menu';
// (parameter) nav: {
//     isActive: boolean;
//     isPending: 'boolean';
// }
// ''

const Navbar = (props: any) => {
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    });
    const ItemsNav = styled(Box)({
        display: "flex",
        gap: 15,
    })
    const ItemsInNav = [{Name: <PersonAdd/>, Link:'/'},
    {Name: <Notifications/>, Link:'#'},
    {Name: <Message/>, Link:'/Chat'},
    {Name: <AccountCircle/>, Link:'/Profile'},
    ];

    const HomeBox = styled(Box)({
        display: "flex",
        gap: 15,
        
 
    })
    const HomeItems = [{Name: 'Home', Link:'/'},
    {Name: 'Versions', Link:'/versions'}
    ];
    const [open, Setopen]= useState(false);
    const [open2, Setopen2]= useState(false);


    return (
        // position={'static'}
        // position={'static'}
        <AppBar sx={{background: 'white', opacity: 0.8}}  >
            <StyledToolbar>

                {/* La barre des Items HOME */}
                <HomeBox sx={{display: {xs:'none', sm:'none', md:'flex'}}}>
                    {HomeItems.map((item)=>(

                        // <a href={item.Link} className='link'>
                        <NavLink to={`${item.Link}`} className='link'>
                    <Typography sx={{cursor: "pointer", frontSize: "14px", color:'black'}}>
                            {item.Name}
                      </Typography>
                    </NavLink>
                        //  </a>

                    // <li key={item.Link}>
                    // <Link to={item.Link}>
                    // </Link>
                    // </li>
                        // <NavLink to={item.Link} >
                         /* <Link to={item.Link} className='link'> */

                    /* /* <a href={item.Link} className={(nav) => (nav.isActivve ? "nav-active" : "")}> */
                /* className={(navi) => (navi.isActive ? "nav-active" : "")}> */ 

                        //  <Typography sx={{cursor: "pointer", frontSize: "14px", color:'black'}}> 
                        //   {item.Name}
                        //  </Typography> 
                    /* </Link>  */
                            // </NavLink>
                    ))}
                </HomeBox>
                <HomeIcon
                    sx={{
                        display: {xs:'block', sm:'block', md:'none'},color:'black'
                    }}
                    onClick={() =>Setopen(!open)}
                />


                 {/* La barre des Items NAV  */}
                <ItemsNav sx={{display: {xs:'none', sm:'none', md:'flex'}, }}>
                    {ItemsInNav.map((item)=>(
                 



                    /* <a href={item.Link} className='link'> */
                    <NavLink to={`${item.Link}`} className='link'>
                    <Typography sx={{cursor: "pointer", frontSize: "14px", color:'black'}}>
                            {item.Name}
                    </Typography>
                    </NavLink>
                    /* </a> */
                
                    ))}
                </ItemsNav>
                <MenuIcon
                    sx={{
                        display: {xs:'block', sm:'block', md:'none'},color:'black'
                    }}
                    onClick={() =>Setopen2(!open2)}
                />
            </StyledToolbar>
            
            
            {/* Pour rétrécir la bar des Items Nav */}
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open2}
                onClose={() =>Setopen2(!open2)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <Box sx={{width: 150, height:'21vh'}}>
                {ItemsInNav.map((item)=>(
                    // <a href={item.Link} className='little-link'>
                    <NavLink to={`${item.Link}`} className='little-link'>
                    <MenuItem sx={{cursor: "pointer", frontSize: "14px", color: "balck" }}>
                            {item.Name}
                    </MenuItem>
                    </NavLink>
                    // </a>
                    ))}
                </Box>
            </Menu>

                 {/* Pour rétrécir la bar des Items Home */}
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={() =>Setopen(!open)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <Box sx={{width: 150, height:'10vh'}}>
                    {HomeItems.map((item)=>(
                        // <NavLink to={item.Link} className="little-link">
                    // <a href={item.Link } className='little-link'>

                          <NavLink to={`${item.Link}`} className='little-link'>
                        <MenuItem sx={{cursor: "pointer", frontSize: "14px", color: "balck"}}>
                            {item.Name}
                        </MenuItem>
                        </NavLink>
                        /* </NavLink> */
                        // </a>
                    ))}
                </Box>
            </Menu>
        </AppBar>
    );
};

export default Navbar;
