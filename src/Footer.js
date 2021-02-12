import React from "react";


let year = new Date().getFullYear();
const Footer = () => {
    return <>
        <div className="footer">
            <p>Copyright &copy;{ year}</p>
      </div>
  </>;
};

export default Footer;
