import React from 'react'
import MenuDish from './MenuDish'

const DishTablerizer = ({menu}) => {
  const dishIterate = menu.map((dish) => (
    <MenuDish dish={dish} key={dish.name} />
  ))

  return (
    <div className='row' id='2'>
        <table className='table'>
          <thead>
            <tr>
              <th className="text-center" width="150">Dish Name</th>
              <th className="text-center" width="250">Description</th>
              <th className="text-center" width="100">Price</th>
            </tr>
          </thead>
          <tbody>
            {dishIterate}
          </tbody>
        </table>
    </div>
  )
}

export default DishTablerizer
