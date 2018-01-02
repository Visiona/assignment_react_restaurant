import React from 'react'

const ReservCreator = () => {


  return (
    <div className="row">
      <div className="small-3 medium-3 columns">HEHEHEHHE</div>
      <div className="small-6 medium-6 columns">


        <form>
          <label>
            Date:
            <input type="date" placeholder=".small-12.columns" aria-describedby="exampleHelpText" />
          </label>
          <p className="help-text" id="exampleHelpText">Heres how you use this input field!</p>
          <label>
            Time
            <input type="time" />
          </label>
          <label>How many People?
            <select>
              <option value="husker">2 People</option>
              <option value="starbuck">2-4 People</option>
              <option value="hotdog">4-6 People</option>
              <option value="apollo">6-10 People</option>
            </select>
          </label>
        </form>
      </div>
      <div className="small-3 medium-3 columns"></div>
  </div>
  )
}

export default ReservCreator
