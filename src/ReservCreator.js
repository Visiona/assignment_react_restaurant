import React from 'react'

const ReservCreator = () => {


  return (
    <div className="reservation-caontainer" id='3'>
    <h3>Booking Form</h3>
      <form>
        <div className="form-group">
          <input type="date" className="form-control" id="date1" />
        </div>
        <div className="form-group">
          <input type="time" className="form-control" id="time1" />
        </div>
        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            How many people?
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a href="#">0-2</a></li>
            <li><a href="#">2-4</a></li>
            <li><a href="#">4-6</a></li>
            <li><a href="#">6-8</a></li>
          </ul>
        </div>
        <button type="submit" className="btn btn-default">Make a Reservation</button>
      </form>
    </div>

  )
}

export default ReservCreator
