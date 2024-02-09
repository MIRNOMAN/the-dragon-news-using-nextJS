import { Box, ButtonBase, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import topNews from "@/assets/side-top-news.png";
import topNews2 from "@/assets/airfocus-K_VeavYEfdA-unsplash.jpg";
import corporate_event from "@/assets/corporate-event-4.jpg";
import corporate from "@/assets/corporate-event-6.jpg";
import lifestyle from "@/assets/lifestyle.jpg";
import side_bottom_img from "@/assets/side-bottom-img.png";
import Image from "next/image";

const SideBar = () => {
    return (
        <Box>
       <Card className="my-5">
      <CardActionArea>
        <CardMedia>
            <Image src={topNews} width={800} alt="cover"></Image>
        </CardMedia>
        <CardContent>
            <p className="w-[100px] bg-red-500 text-white p-1 rounded my-3">Technology</p>
          <Typography className="font-bold" gutterBottom variant="h5" component="div">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
          </Typography>
          <Typography className="font-bold" gutterBottom variant="body1" component="div">
          By Mir Abdullah Al Noman - Mar 5 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military ......
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  
  <Box className="mb-5">
  <Grid className="flex gap-4 bg-slate-300 p-4" item xs={12}>
    <Grid xs={4} >
        <Image className="rounded" src={topNews2} height={200} width={200} alt="image"></Image>
    </Grid>
    <Grid xs={8}>
        <h3 className="text-sm font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
        <span className="text-xs">Mar 5 2024</span>
        <p className="text-xs">Tag Cloud Tags: Biden, EU, Euro,</p>
    </Grid>
  </Grid>
  </Box>
  <Box className="mb-5">
  <Grid className="flex gap-4 bg-slate-300 p-4" item xs={12}>
    <Grid xs={4} >
        <Image className="rounded" src={corporate_event} height={200} width={200} alt="image"></Image>
    </Grid>
    <Grid xs={8}>
        <h3 className="text-sm font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
        <span className="text-xs">Mar 5 2024</span>
        <p className="text-xs">Tag Cloud Tags: Biden, EU, Euro,</p>
    </Grid>
  </Grid>
  </Box>
  <Box className="mb-5">
  <Grid className="flex gap-4 bg-slate-300 p-4" item xs={12}>
    <Grid xs={4} >
        <Image className="rounded" src={corporate} height={200} width={200} alt="image"></Image>
    </Grid>
    <Grid xs={8}>
        <h3 className="text-sm font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
        <span className="text-xs">Mar 5 2024</span>
        <p className="text-xs">Tag Cloud Tags: Biden, EU, Euro,</p>
    </Grid>
  </Grid>
  </Box>
  <Grid className="flex gap-4 bg-slate-300 p-4 " item xs={12}>
    <Grid xs={4} >
        <Image className="rounded" src={lifestyle} height={200} width={200} alt="image"></Image>
    </Grid>
    <Grid xs={8}>
        <h3 className="text-sm font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
        <span className="text-xs">Mar 5 2024</span>
        <p className="text-xs">Tag Cloud Tags: Biden, EU, Euro,</p>
    </Grid>
  </Grid>

  <Box className="mt-4">
    <Image src={side_bottom_img} height={400} width={400} alt="Picture of the author"></Image>
  </Box>
  
        </Box>
    );
};

export default SideBar;