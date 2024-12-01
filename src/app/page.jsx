import { AppBar, Toolbar, Typography, Button, Box, Container, Grid } from '@mui/material'
import Image from 'next/image'
import treesImg from '../../public/trees.jpg'
import Link from 'next/link'
import AboutUs from './components/aboutUsSection'

const fontWeight = '800'

const Home = () => {
  return (
    <>
      {/* Fixed and Rounded Navigation Bar */}
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          width: '100svw', // Adjust width to account for margins
          boxShadow: 3, // Add shadow for better design
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Water Tree
          </Typography>
          <Link href='/login' style={{color:'white', marginLeft:'10px', marginRight:'10px', textDecoration:'none'}}>Entrar a la cuenta</Link>
          <Link href='/register' style={{color:'white', marginLeft:'10px', marginRight:'10px', textDecoration:'none'}}>Registrate</Link>
        </Toolbar>
      </AppBar>

      {/* Main Section */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start', // Align text to the left
          padding: 6, // Add padding for spacing
          paddingTop: '96px', // Adjust for NavBar height + margins
          backgroundImage: 'url(/public/trees.jpg)', // Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff', // Ensure text is visible on the background
        }}
      >
        <Image alt='Trees'
          src={treesImg}
          fill 
          sizes='100vw'
          style={{
            objectFit:'cover',
            filter:'brightness(.5)',
            zIndex: -1
          }}
        ></Image>
        <Typography variant="h2" gutterBottom >
          Somos water tree
        </Typography>
        <Typography variant="h6" gutterBottom>
          Discover our amazing features and services.
        </Typography>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, backgroundColor: '#ffffff' }}>
        <Container>
          <Typography style={{fontWeight:(fontWeight + 300)}} variant="h4" gutterBottom align="center">
            ¿Por qué water tree?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center', padding: 2 }}>
                <Typography variant='h6' style={{fontWeight:fontWeight}}>Eficiente</Typography>
                <Typography>
                  Elaboramos productos sustentables que ayudan al medio ambiente.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center', padding: 2 }}>
                <Typography variant="h6" style={{fontWeight:fontWeight}}>Economico</Typography>
                <Typography>
                  Con water tree planeamos proveer a mas de <span>100,000</span> de personas llegando a lugares donde no cualquier metodo funcionaria
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center', padding: 2 }}>
                <Typography variant="h6" style={{fontWeight:fontWeight}}>Conveniente</Typography>
                <Typography>
                  Con water tree surgé una gran propuesta hacia socios y colaboradores para promover las energias renovables y 
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>


      {/* About Section */}
      <AboutUs/>

      {/* Contact Section */}
      <Box sx={{ py: 8, backgroundColor: '#ffffff' }}>
        <Container>
          <Typography variant="h4" gutterBottom align="center">
            Contactanos
          </Typography>
          <Typography align="center">
            Have questions? Feel free to reach out to us.
          </Typography>
        </Container>
      </Box>
    </>
  )
}


export default Home