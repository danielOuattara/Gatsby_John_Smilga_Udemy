import React from "react";
import setupTags from "../utils/setupTag";
import titleToSlug from "../utils/titleToSlug";
import { Link } from "gatsby";

export default function TagsList(props) {
  const tags = setupTags(props.recipes);
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {tags.map((item) => (
          <Link key={item[0]} to={`/tags/${titleToSlug(item[0])}`}>
            {item[0]} ({item[1]})
          </Link>
        ))}
      </div>
    </div>
  );
}
