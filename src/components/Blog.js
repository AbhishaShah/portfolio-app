import React from 'react';

const Blog = () => {
    return(
        <div className="p_20">
        <section className="blog_categorie_area">
        <div className="container">
        <div className="main_title">
        <h2>Blog Page</h2>
        <p> (Under development yet)</p>
            </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="categories_post">
                <img src="img/blog/post-img2.jpg" alt="post" />
                <div className="categories_details">
                  <div className="categories_text">
                    <a href="blog-details.html"><h5>Cooding Life</h5></a>
                    <div className="border_line" />
                    <p>Enjoy your Coding life together</p>
                  </div>
                </div>
              </div>
            </div>
           
            
          </div>
        </div>
      </section>
            </div>
    )
}

export default Blog;