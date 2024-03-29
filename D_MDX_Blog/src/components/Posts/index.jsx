import React from "react";
import { Post, Banner } from "./../../components";

export default function Posts(props) {
  // console.log(props);
  return (
    <section className="posts">
      <h3 className="posts-title">{props.title}</h3>
      <div className="posts-center">
        {/* --- posts column --- */}
        <article>
          {props.posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </article>

        {/* --- banner column --- */}
        <article>
          <Banner />
        </article>
      </div>
    </section>
  );
}
