import React from 'react'

const MenuDish = ({dish}) => {
  const {name, description, price} = dish

  return (
      <tr className="text-center">
        <td>{name}</td>
        <td><em>{description}</em></td>
        <td>{price} euro</td>
      </tr>
  )
}

export default MenuDish
