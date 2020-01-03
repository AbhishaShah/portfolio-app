import React from 'react';
import projects from './project-content'


const ProjectDetail = ({match}) => {
  const current_project = projects.find(project =>  project.pid === parseInt(match.params.id));
  return( 
        <div>
        <section className="sample-text-area">
          <div className="container">
            <h3 className="text-heading title_color">{current_project.title}</h3>
            <p className="sample-text">
              
                <img src={`/img/gallery/${current_project.name}${current_project.imgext}`} alt="" className="img-fluid" />
            
            </p>
          </div>
        </section>  
       
        <div className="whole-wrap">
          <div className="container"> 
            <div className="section-top-border">
              <h3 className="mb-30 title_color">Project Overview</h3>
              <div className="row">
                <div className="col-lg-12">
                  <blockquote className="generic-blockquote">
                     {current_project.content} 
<br/>
                     <p className="text-heading tech-title h4"> Technologies Used: 
                         {current_project.tools.map(tool => 
                      <span className="btn btn-dark btn-sm ml-2 rounded-pill ">{tool}</span>

                     )}</p>
                  </blockquote>
                  { current_project.github_url.length > 0 &&
                        <div className="button-group-area">
                        <a href={current_project.url} target="_blank" rel="noopener noreferrer" className="genric-btn info">View Live Site</a>
                        <a href={current_project.github_url} target="_blank" rel="noopener noreferrer" className="genric-btn primary">View on Github</a>
                    </div>              
                }
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    )
}

export default ProjectDetail;