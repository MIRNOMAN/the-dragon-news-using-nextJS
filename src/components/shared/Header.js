import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import DragonNews from "@/assets/The Dragon News.png"
import { getCurrentDate } from '@/utils/GetCurrentDate';

const Header = () => {
    const currentDate = getCurrentDate();
    return (
        <Box className='text-center'>
           <Container>
            <Image className='mx-auto mt-5'  src={DragonNews} height={400} width={400} alt='logo'></Image>
            <Typography className="text-center mt-3 font-semibold" variant="body1" color="black">
            Journalism Without Fear or Favour
          </Typography>
          <Typography className="text-center mt-1 mb-6 font-semibold" variant="h6" color="black">
          {currentDate}
          </Typography>
           </Container>
        </Box>
    );
};

export default Header;