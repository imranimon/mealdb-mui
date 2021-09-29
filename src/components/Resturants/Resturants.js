import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Meal from '../Meal/Meal';

const Resturants = (props) => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [props.searchText])
    return (
        <Box sx={{ width: '100%' }}>
            <Grid style={{padding: '2% 0 20px 4.5%'}} container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    meals?.map(meal=><Meal
                    key={meal?.idMeal}
                    meal={meal}>
                    </Meal>)
                }
            </Grid>
        </Box>
    );
};

export default Resturants;