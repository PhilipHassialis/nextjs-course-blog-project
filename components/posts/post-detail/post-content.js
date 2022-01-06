import React from "react";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const DUMMY_POST = {
  slug: "getting-started",
  title: "Getting started",
  image: "gettingstarted.png",
  content: "# This is a first post",
  date: "2022-02-10",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
};

export default PostContent;
