import React from 'react'


const AboutUsCreator = () => {

  return (
          <div className="orbit" role="region" aria-label="Favorite Text Ever" id='#1'>

            <ul className="orbit-container" >

              <button className="orbit-previous" aria-label="previous"><span className="show-for-sr">Previous Slide</span>&#9664;</button>
              <button className="orbit-next" aria-label="next"><span className="show-for-sr">Next Slide</span>&#9654;</button>

              <li className="is-active orbit-slide">
                <div className="docs-example-orbit-slide">
                  <p><strong>This is dodgerblue.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </li>

              <li className="orbit-slide">
                <div className="docs-example-orbit-slide">
                  <p><strong>This is rebeccapurple.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </li>

              <li className="orbit-slide">
                <div className="docs-example-orbit-slide">
                  <p><strong>This is darkgoldenrod.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </li>

              <li className="orbit-slide">
                <div className="docs-example-orbit-slide">
                  <p><strong>This is lightseagreen.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </li>

            </ul>

            <nav className="orbit-bullets">
              <button className="is-active" data-slide="0"><span className="show-for-sr">First slide details.</span><span className="show-for-sr">Current Slide</span></button>
              <button data-slide="1"><span className="show-for-sr">Second slide details.</span></button>
              <button data-slide="2"><span className="show-for-sr">Third slide details.</span></button>
              <button data-slide="3"><span className="show-for-sr">Fourth slide details.</span></button>
            </nav>

          </div>  )
}

export default AboutUsCreator
