import { getAllCategories } from '@/utils/getAllCategories';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const CategoryList =async () => {
    const {data: allCategories} = await getAllCategories();
    console.log(allCategories);
    return (
        <Box className="mt-5 bg-slate-200 px-5 py-3 rounded">
            <Typography className='mb-2 text-center' variant='h6'>Categories</Typography>
            <Divider ></Divider>
            <Stack rowGap={1} className='mt-3'>
                {
                    allCategories.map(category => (
                        <Button variant='outlined' key={category.id}><Link href={`/categories/news?category=${category.title.toLowerCase()}`}>{category.title}</Link></Button>
                    ))
                }
            </Stack>
        </Box>
    );
};

export default CategoryList;