"use client"
import { Box, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";
import { Button } from "@mui/base";

const Footer = () => {
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
    
    return (
        <Box className="bg-black px-10 py-10">
            <Container>
            <Box className="w-full text-center" sx={{"& svg" : {
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
          </Box>
          <Box className="text-center space-x-5 mt-5 w-full">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button className='text-white'>{item.route}</Button>
              </Link>
            ))}
          </Box>
          <Typography className="text-center mt-4" variant="body2" color="white">
            @2024 The Dragon News. Design by Mir Noman.
          </Typography>
            </Container>
        </Box>
    );
};

export default Footer;