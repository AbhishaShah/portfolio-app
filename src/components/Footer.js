import React from 'react';

const Footer = () => {
    return(
        <footer className="footer_area">
        <div className="container">
          <div className="row footer_inner">
            <div className="col-lg-12 col-sm-6 text-center">
                <p>Made with <i className="fa fa-heart" aria-hidden="true"></i> and <i className="fa fa-coffee" aria-hidden="true"></i>
                <br/> Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration
                </p>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;