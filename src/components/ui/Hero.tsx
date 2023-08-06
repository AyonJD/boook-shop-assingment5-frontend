import { Container, Grid, Box, Typography } from '@mui/material'
import Navbar from '../shared/Navbar'
import { COLORS } from '@/constant/colors'

const Hero = () => {
  return (
    <Box className="hero_section">
      <Container>
        <Navbar />
        <Grid container className="pt-4">
          <Grid item xs={12} md={8} gap={2}>
            <Box className="flex items-center ">
              <Typography
                sx={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: {
                    xs: '2rem',
                    md: '3.8rem',
                  },
                }}
              >
                Get Free Books
              </Typography>
              <Box
                sx={{
                  display: {
                    xs: 'none',
                    md: 'inline-block',
                  },
                }}
                className="h-14 w-1 bg-white ml-[auto] mr-[auto]"
              ></Box>
            </Box>

            <Box className="flex items-center ">
              <Box sx={{ display: 'inline-block', marginRight: 5 }}>
                <Typography
                  variant="body2"
                  sx={{ color: 'white', fontSize: 12 }}
                >
                  Established
                </Typography>
                <Typography
                  sx={{ color: 'white', fontSize: 27, fontWeight: '600' }}
                >
                  2019
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: {
                    xs: '2rem',
                    md: '3.8rem',
                  },
                }}
              >
                In{' '}
                <span style={{ color: `${COLORS.PRIMARY}` }}>Book Trekker</span>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                color: 'white',
                fontSize: 14,
                textAlign: 'justify',
                mt: 2,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              reiciendis exercitationem quoLorem ipsum dolor sit amet
              consectetur adipisicing adipisicing elit. Molestias
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero
