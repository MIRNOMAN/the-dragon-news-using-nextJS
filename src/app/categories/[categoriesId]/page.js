import { getCategoryNews } from '@/utils/getAllCategoryNews';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const DynamicRouteNews = async ({params, searchParams}) => {
    const {data} = await getCategoryNews(searchParams.category);
    console.log(data);
    return (
        <Box>
            <h1>Dynamic Route Page {searchParams.category} : {data.length}</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
            data.map(news => (
                <Grid key={news.id} xs={6}>
                <Card className="my-5 m-3">
                  <CardActionArea>
                    <CardMedia sx={{
                        "& img" : {
                            width: "100%",
                            height: "250px",
                        }
                    }}>
                      <Image src={news?.thumbnail_url} width={800} height={100} alt="cover"></Image>
                    </CardMedia>
                    <CardContent>
                    <span className=" bg-red-500 text-white p-2  rounded my-2">{news.category}</span>
                      <Typography variant='h6' className="font-bold mt-2 ">
                       {news.title.length>30 ? news.title.slice(0, 30) + "..." : news.title}
                      </Typography>
                      <Typography className="font-bold" gutterBottom variant="body1" component="div">
                        By {news?.author.name} - {news.author.published_date}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      {news.details.length > 200 ? news.details.slice(0, 200) + "...." : news.details}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
        }
      </Grid>
        </Box>
    );
};

export default DynamicRouteNews;