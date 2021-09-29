import React, { useEffect, useState } from 'react';
import './MealDetails.css'
import { useParams } from 'react-router';
import { Box } from '@mui/system';
import { Button, ButtonGroup, Grid } from '@mui/material';
import Image from 'material-ui-image'
import YouTubeIcon from '@mui/icons-material/YouTube';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';


const MealDetails = () => {
    const { idMeal } = useParams();
    const [meal, setMeal] = useState([])
    const { strMeal, strInstructions, strMealThumb, strYoutube } = meal;
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [idMeal])
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            border: '2px solid #7878b3',
            borderRadius: '10px',
            p: 1,
            m: 5,
            bgcolor: 'background.paper',
        }}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6}>
                    <Image src={strMealThumb} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="details-header">
                        <h1>Meal Details</h1>
                    </div>
                    <div className="details-body">
                        <p><span className="text-size">Name:</span> {strMeal}</p>
                        <p><span className="text-size">Instructions:</span> {strInstructions}</p>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                            <ButtonGroup variant="outlined" aria-label="outlined button group">
                                <a target="_blank" rel='noreferrer' href={strYoutube}>
                                    <Button>
                                        <YouTubeIcon sx={{ fontSize: 50, color: 'red' }} />
                                    </Button>
                                </a>
                                <Link to='/home'>
                                    <Button>
                                        <HomeIcon sx={{ fontSize: 50, color: 'secondary' }} />
                                    </Button>
                                </Link>
                            </ButtonGroup>
                        </Box>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MealDetails;