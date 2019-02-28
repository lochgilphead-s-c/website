import React from "react";
import Logo from "../img/logo/LSC_logo-double-small.fw.png";

const NotFoundPage = () => (
  <div>
    <a className="navbar-brand js-scroll-trigger" href="/index.html">
      <img className="lsc-logo" src={Logo} alt="Lochgilphead Soccer Centre" />
    </a>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
);

export default NotFoundPage;
