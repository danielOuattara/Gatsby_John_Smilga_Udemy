import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

export default function Seo(props) {
  return <Helmet title={props.title}></Helmet>;
}
