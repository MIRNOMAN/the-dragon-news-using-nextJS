import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import topNews from "@/assets/top-news.png"
import topNews2 from "@/assets/top-news2.png"
import Image from "next/image";

const LetestNews = () => {
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
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid xs={6}>
  <Card className="my-5 m-3">
      <CardActionArea>
        <CardMedia>
            <Image src={topNews2} width={800} alt="cover"></Image>
        </CardMedia>
        <CardContent>
          <Typography className="font-bold">
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
  </Grid>
  <Grid xs={6}>
  <Card className="my-5 m-3">
      <CardActionArea>
        <CardMedia>
            <Image src={topNews} width={800} alt="cover"></Image>
        </CardMedia>
        <CardContent>
            
          <Typography className="font-bold">
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
  </Grid>
  <Grid xs={6}>
  <Card className="my-5 m-3">
      <CardActionArea>
        <CardMedia>
            <Image src={topNews2} width={800} alt="cover"></Image>
        </CardMedia>
        <CardContent>
           
          <Typography className="font-bold">
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
  </Grid>
  <Grid xs={6}>
  <Card className="my-5 m-3">
      <CardActionArea>
        <CardMedia>
            <Image src={topNews} width={800} alt="cover"></Image>
        </CardMedia>
        <CardContent>
           
          <Typography className="font-bold">
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
  </Grid>

</Grid>
        </Box>
    );
};

export default LetestNews;