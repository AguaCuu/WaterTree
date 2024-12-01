// pages/AboutUs.js

import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import teamImage from '../../../favicon_io/logo.png'

const AboutUs = () => {
    return (
        <Container maxWidth="lg" sx={{ marginTop: 4 }}>
            <Typography variant="h1" align="center" gutterBottom>
                About Us
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
                    <Typography variant="h2">Who We Are</Typography>
                    <Typography paragraph>
                        We are a passionate team dedicated to providing the best services to our clients. Our mission is to innovate and inspire through our work.
                    </Typography>
                    <Typography variant="h2">Our Mission</Typography>
                    <Typography paragraph>
                        To deliver high-quality products that meet the needs of our customers while maintaining a commitment to sustainability and community engagement.
                    </Typography>
                    <Typography variant="h2">Our Values</Typography>
                    <ul>
                        <li>Integrity</li>
                        <li>Innovation</li>
                        <li>Collaboration</li>
                        <li>Excellence</li>
                    </ul>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutUs;