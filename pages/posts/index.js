import Head from "next/head";
import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = (props) => {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>All posts</title>
        <meta name="description" content="All posts page" />
      </Head>
      <AllPosts posts={posts} />;
    </>
  );
};

export const getServerSideProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
