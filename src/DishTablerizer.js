import React from 'react'
import MenuDish from './MenuDish'

const DishTablerizer = ({menu}) => {
  const dishIterate = menu.map((dish) => (
    <MenuDish dish={dish} key={dish.name} />
  ))

  return (
    <table className='Dishes Container' id='#2'>
      <thead>
        <tr>
          <th width="100">Dish Name</th>
          <th width="250">Description</th>
          <th width="50">Price</th>
        </tr>
      </thead>
      <tbody>
        {dishIterate}
      </tbody>
    </table>
  )
}

export default DishTablerizer
