import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DishTablerizer from './DishTablerizer'
import NavbarCreator from './NavbarCreator'
import AboutUsCreator from './AboutUsCreator'
import ReservCreator from './ReservCreator'

const menu = [
  {
    name: 'Beef Lasagne',
    description: 'Layers of meaty sauce with cheese and béchamel sauce, topped with more glorious cheese',
    price: 12.00
  },
  {
    name: 'Shepherds Pie',
    description: 'A meat pie with a topping of mashed potato',
    price: 13.50
  },
  {
    name: 'Potato beetroot and herring salad',
    description: 'This classic Russian salad is traditionally served during every Russian holiday. Grated potatoes, onion, carrots, beetroots, mayonnaise and herring are layered on top of each other.',
    price: 16
  },
  {
    name: 'Skillet Calzone',
    description: 'A ground beef recipe in a cast iron skillet transforming a calzone into a hearty kid-friendly casserole',
    price: 21.50
  }
]



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarCreator  />
        <AboutUsCreator />
        <ReservCreator />
        <DishTablerizer menu={menu} />
      </div>
    );
  }
}

// Header - include an image and a heading at a minimum (e.g., jumbotron)
// Reservation form - create the form and input markup though it will not be functional yet. Later in the course, you can try your hand at making in work.

export default App;
