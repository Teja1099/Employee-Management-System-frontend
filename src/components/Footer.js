import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faFacebookF,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.module.css";

function Footer() {
  const linkADP =
    "https://www.vista.adp.com/vista/index.html?TYPE=33554433&REALMOID=06-00056349-5d04-1f8a-bae3-1b780aca0000&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=-SM-2PZcgxfasaByM85o0PQjgCdeNLFKO0bt1Cvh2QNqwbwSryAKScVMsAtmoh9wl%2Fbh&TARGET=-SM-https:%2F%2Fwww.vista.adp.com%2FESS4%2FESSV5%2Fmyprofile%2Fpersonalinformation;";
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="offset-1 col-4 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://prokarma001.sharepoint.com/Pages/home.aspx"
                  target="_blank"
                >
                  PKonnect
                </a>
              </li>
              <li>
                <a
                  href="https://prokarma001.sharepoint.com/sites/PKComms"
                  target="_blank"
                >
                  PK Comms
                </a>
              </li>
              <li>
                <a
                  href="https://www.intacct.com/ia/acct/login.phtml"
                  target="_blank"
                >
                  sage Intacct
                </a>
              </li>
              <li>
                <a href="https://app.reviewsnap.com/login" target="_blank">
                  Reviewsnap
                </a>
              </li>
              <li>
                <a href={linkADP} target="_blank">
                  ADP Portal
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google"
                href="https://pkglobal.com/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faPinterestP} />
              </a>

              <a
                className="btn btn-social-icon btn-twitter"
                href="https://twitter.com/prokarma"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>

              <a
                className="btn btn-social-icon btn-facebook"
                href="https://www.facebook.com/thePKGlobal/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a
                className="btn btn-social-icon btn-linkedin"
                href="https://www.linkedin.com/company/pkglobal/mycompany/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
