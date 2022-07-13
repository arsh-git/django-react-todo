import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../css/App.css';
import { Link } from "react-router-dom";
export default function Footer() {
  return (
      <>
   <footer className="mainfooter" role="contentinfo">
    <div className="footer-middle">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="footer-pad">
            <h4>Heading 1</h4>
            <ul className="list-unstyled">
              <li><Link to="#"></Link></li>
              <li><Link to="#">Payment Center</Link></li>
              <li><Link to="#">Contact Directory</Link></li>
              <li><Link to="#">Forms</Link></li>
              <li><Link to="#">News and Updates</Link></li>
              <li><Link to="#">FAQs</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">

          <div className="footer-pad">
            <h4>Heading 2</h4>
            <ul className="list-unstyled">
              <li><Link to="#">Website Tutorial</Link></li>
              <li><Link to="#">Accessibility</Link></li>
              <li><Link to="#">Disclaimer</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">FAQs</Link></li>
              <li><Link to="#">Webmaster</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">

          <div className="footer-pad">
            <h4>Heading 3</h4>
            <ul className="list-unstyled">
              <li><Link to="#">Parks and Recreation</Link></li>
              <li><Link to="#">Public Works</Link></li>
              <li><Link to="#">Police Department</Link></li>
              <li><Link to="#">Fire</Link></li>
              <li><Link to="#">Mayor and City Council</Link></li>
              <li>
                <Link to="#"></Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <h4>Follow Us</h4>
              <ul className="social-network social-circle">
              <li><Link to="#" className="icoFacebook" title="Facebook"> <FontAwesomeIcon className ='font-awesome' icon={faFacebook} /></Link></li>
              <li><Link to="#" className="icoLinkedin" title="Linkedin"><FontAwesomeIcon className ='font-awesome'  icon={faLinkedin} /></Link></li>
              </ul>				
      </div>
      </div>



    </div>
    </div>
  </footer>
      </>
  );
}
