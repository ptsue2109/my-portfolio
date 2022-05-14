import React from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
type Props = {};

const Error = (props: Props) => {
  return (
    <div className="err_page container">
      <Helmet>
        <title>Error page</title>
      </Helmet>
      <div className="err_page-img">
        <img
          src="https://github.githubassets.com/images/modules/notifications/filters-zero.svg"
          alt=""
        />
      </div>
      <div className="err_page-text">
        <h3>All done here!</h3>
        <p>You're caught up on this filter.</p>
        <Link to="/" className="btn btn-outline-secondary">HOME</Link>
      </div>
    </div>
  );
};

export default Error;
