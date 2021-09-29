import { useState } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MealDetails from './components/MealDetails/MealDetails';
import Resturants from './components/Resturants/Resturants';

function App() {
  const [searchText, setSearchText] = useState('')
  return (
    <div className="App">
      <BrowserRouter>
        <Header setSearchText={setSearchText}></Header>
        <Switch>
          <Route path='/home'>
            <Resturants searchText={searchText}></Resturants>
          </Route>
          <Route exact path='/'>
            <Resturants searchText={searchText}></Resturants>
          </Route>
          <Route path='/meal-details/:idMeal'>
            <MealDetails></MealDetails>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
