import React from 'react';
import Project from './Project'

const Work = () => {
    return(
        <section className="home_gallery_area p_120">
          <div className="container">
            <div className="main_title">
              <h2>Latest Featured Projects</h2>
            </div>
            <div className="isotope_fillter d-none">
              <ul className="gallery_filter list">
                <li className="active" data-filter="*"><a href=".">All</a></li>
                <li data-filter=".brand"><a href=".">Vector</a></li>
                <li data-filter=".manipul"><a href=".">Raster</a></li>
                <li data-filter=".creative"><a href=".">UI/UX</a></li>
                <li data-filter=".design"><a href=".">Printing</a></li>
              </ul>
            </div>
          </div>
          <Project />
          </section>
    )
}

export default Work