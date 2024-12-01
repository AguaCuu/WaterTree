import { AppBar, Toolbar, Typography, Button, Box, Container, Grid } from '@mui/material'
import Image from 'next/image'
import treesImg from '../../public/trees.jpg'

const Home = () => {
  return (
    <>
      {/* Fixed and Rounded Navigation Bar */}
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          borderRadius: 3, // Rounded corners
          margin: 2, // Margin around the NavBar
          width: 'calc(100% - 32px)', // Adjust width to account for margins
          boxShadow: 3, // Add shadow for better design
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Landing Page
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Signup</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
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
          <Typography variant="h4" gutterBottom align="center">
            ¿Por queé water tree?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center', padding: 2 }}>
                <Typography variant="h6"></Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center', padding: 2 }}>
                <Typography variant="h6">Feature 2</Typography>
                <Typography>
                  Curabitur pulvinar euismod turpis, eget placerat augue.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center', padding: 2 }}>
                <Typography variant="h6">Feature 3</Typography>
                <Typography>
                  Quisque sed tortor sit amet justo cursus gravida.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
        <Container>
          <Typography variant="h4" gutterBottom align="center">
            Sobre water tree
          </Typography>
          <Typography align="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti, accusamus ex voluptates magni, rem placeat qui cumque perferendis eveniet amet deserunt nihil mollitia eos a numquam sed facere, soluta suscipit necessitatibus quisquam velit ullam iure? Ex illo neque a.
          </Typography>
        </Container>
      </Box>

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