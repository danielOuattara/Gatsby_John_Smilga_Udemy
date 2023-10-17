import React from "react";
import Post from "./Post";
import Banner from "../Banner";

export default function Posts(props) {
  console.log(props);
  return (
    <section className="posts">
      <h3 className="posts-title">{props.title}</h3>
      <div className="posts-center">
        {/* --- posts column --- */}
        <article>
          {props.posts.map((post) => (
            <Post key={post.id} {...post}></Post>
          ))}
        </article>

        {/* --- banner column --- */}
        <article>banner</article>
      </div>
    </section>
  );
}
