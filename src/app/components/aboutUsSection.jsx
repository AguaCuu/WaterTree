// pages/AboutUs.js

import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import teamImage from '../../../favicon_io/logo.png'

const AboutUs = () => {
    return (
        <Container maxWidth="lg" sx={{ marginTop: 4 }}>
            <Typography variant="h1" align="center" gutterBottom>
                Sobre nosotros
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <Image 
                            src={teamImage} 
                            alt="Our Team" 
                            layout="responsive" 
                            width={500} 
                            height={300} 
                            quality={100}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h2">Quienes somos</Typography>
                    <Typography paragraph>
                        Somos un grupo de personas apsaionados por el sustento de nuestros ecosistemas y la gran ganaderia que se da en nuestro hermoso estado Chihuahua
                    </Typography>
                    <Typography variant="h2">Nuestra mision</Typography>
                    <Typography paragraph>
                        Entregar a nuestros clientes un producto que solucione la escazes radical en nuestro estado proponiendo una inversion a largo plazo que permita tener una obtencion de agua mas responsable y eficiente
                    </Typography>
                    <Typography variant="h2">Nuestros valores</Typography>
                    <ul>
                        <li>Integridad</li>
                        <li>Inovacion</li>
                        <li>Colaboracion</li>
                        <li>Excelencia</li>
                    </ul>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutUs;