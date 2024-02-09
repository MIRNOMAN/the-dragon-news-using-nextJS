import LetestNews from '@/components/ui/LetestNews/LetestNews';
import SideBar from '@/components/ui/SideBar/SideBar';
import { Grid } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
  <Grid item xs={8}>
   <h1>Letest News</h1>
   <LetestNews></LetestNews>
  </Grid>
  <Grid item xs={4}>
    <h1>SideBar</h1>
    <SideBar></SideBar>
  </Grid>
</Grid>
    </>
  );
};

export default HomePage;