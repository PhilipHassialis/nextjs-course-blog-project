import React from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

const HomePage = (props) => {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>Philip&apos;s Blog</title>
        <meta name="description" content="My personal development blog" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getServerSideProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
