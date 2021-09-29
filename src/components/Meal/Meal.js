import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const { idMeal, strMeal, strCategory, strArea, strMealThumb } = props.meal
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card style={{ height: '350px', position: 'relative' }} sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="150"
                    image={strMealThumb}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {strMeal}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Category: {strCategory}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Origin: {strArea}
                    </Typography>
                </CardContent>
                <CardActions style={{ position: 'absolute', bottom: '0', left: '30%' }}>
                    <Link style={{textDecoration: 'none'}} 
                    to={`/meal-details/${idMeal}`}>
                        <Button  variant="outlined" size="small">Show Details</Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Meal;