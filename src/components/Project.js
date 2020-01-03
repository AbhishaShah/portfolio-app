import React from 'react';
import { Link } from 'react-router-dom';
import projects from './project-content';

const Project = () => {
    return(
        <div className="container">
            <div className="gallery_f_inner row imageGallery1">
                {
                    projects.map(project => (
                        <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design print" key={project.pid}>
                        <div className="h_gallery_item">
                          <div className="g_img_item">
                            <img className="img-fluid" src={`img/gallery/${project.name}.png`} alt="" />
                            <Link className="light" to={`/work/${project.pid}`}><img src="img/gallery/icon.png" alt="" /></Link>
                          </div>
                          <div className="g_item_text">
                             <h4>{project.title}</h4>
                          </div>
                        </div>
                      </div>
                    ))
                    }
            </div>
            <div className="more_btn d-none">
              <a className="main_btn" href=".">Load More Items</a>
            </div>
          </div>
       
    )
}

export default Project;