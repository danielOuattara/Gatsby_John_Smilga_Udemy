import React from "react";
import Layout from "./../components/Layout";
import { page, text } from "./../style/About.module.css";
import styled from "styled-components";

export default function About() {
  return (
    <Layout>
      <div className={page}>
        <h1> Title of about - styleing purpose</h1>
        <h2 className="about-heading">About heading</h2>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          placeat ratione facilis laudantium fugiat possimus explicabo, officia
          molestiae unde, dolore deleniti impedit cumque ad quae fugit aliquam
          hic aut quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          quae, deserunt pariatur eligendi expedita ad hic, iste quis quod non
          numquam mollitia accusantium! Eos nobis nostrum placeat cupiditate
          doloremque dolorum.
        </p>
      </div>
    </Layout>
  );
}

const Wrapper = styled.section``;
