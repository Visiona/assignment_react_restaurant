import React from 'react'

const MenuDish = ({dish}) => {
  const {name, description, price} = dish

  return (
      <tr className=''>
        <td>{name}</td>
        <td>{description}</td>
        <td>{price} euro</td>
      </tr>
  )
}

export default MenuDish
