import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const Header = () => {
  const socialMediaLinks = {
    instagram: "https://www.instagram.com/barcaboybiren",
    facebook: "https://www.facebook.com/barcaboybiren",
    twitter: "https://www.twitter.com/barcaboybiren",
  };
  return (
    <>
      <div className="header">
        <h1>World Of Football</h1>
        <div className="social_media_links">
          <h2>Follow us On:</h2>
          <div className="social_media_logo">
            <a
              href={socialMediaLinks.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon>
                <img src="" alt="Instagram" />
              </InstagramIcon>
            </a>
            <a
              href={socialMediaLinks.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon>
                <img src="" alt="facebook" />
              </FacebookIcon>
            </a>
            <a href={socialMediaLinks.twitter} target="_blank" rel="noreferrer">
              <TwitterIcon>
                <img src="" alt="Twitter" />
              </TwitterIcon>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
