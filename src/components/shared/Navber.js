"use client" 

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from "@/assets/logo.png"
import { IconButton, Stack } from '@mui/material';

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

const navItems = [
    {
        route: "Home",
        pathname: "/",
    },
    {
        route: "Pages",
        pathname: "/pages",
    },
    {
        route: "Category",
        pathname: "/category",
    },
    {
        route: "News",
        pathname: "/news",
    },
    {
        route: "About",
        pathname: "/about",
    },
    {
        route: "Contact",
        pathname: "/contact",
    },
]


function 
Navber() {
 

  return (
    <AppBar position="static" className='bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} width={150} height={150} alt='logo'></Image>
          
          <Box className="text-center w-full">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button className='text-white'>{item.route}</Button>
              </Link>
            ))}
          </Box>

          <Box>
           <Stack direction="row" sx={{"& svg" : {
            color: "white",
           }}}>
           <IconButton>
               <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
               <TwitterIcon></TwitterIcon>
            </IconButton>
            <IconButton>
               <LinkedInIcon></LinkedInIcon>
            </IconButton>
            <IconButton>
              <InstagramIcon></InstagramIcon>
            </IconButton>
           </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navber;