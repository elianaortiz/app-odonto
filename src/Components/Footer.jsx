import React from 'react'


const Footer = () => {

  return (
    <footer>
      <div>
        <p>POWERED BY</p>
        <img className="logo" src="/public/DH.ico" alt="DH-logo" />
      </div>
      <div>
        <a href="www.facebook.com">
          {" "}
          <img className="redes" src="/public/images/ico-facebook.png" alt="Facebook" />
        </a>
        <a href="www.instagram.com">
          {" "}
          <img className="redes" src="/public/images/ico-instagram.png" alt="Instagram" />
        </a>
        <a href="www.whatsapp.com">
          {" "}
          <img className="redes" src="/public/images/ico-whatsapp.png" alt="WhatsApp" />
        </a>
        <a href="www.tiktok.com">
          {" "}
          <img className="redes" src="/public/images/ico-tiktok.png" alt="TikTok" />
        </a>
      </div>
    </footer>
  );
};

export default Footer
