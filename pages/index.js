import React from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started",
    title: "Getting started",
    image: "gettingstarted.png",
    excerpt: "NextJS is a React SSR framework",
    date: "2022-02-10",
  },
  {
    slug: "getting-started2",
    title: "Getting started",
    image: "gettingstarted.png",
    excerpt: "NextJS is a React SSR framework",
    date: "2022-02-10",
  },
  {
    slug: "getting-started3",
    title: "Getting started",
    image: "gettingstarted.png",
    excerpt: "NextJS is a React SSR framework",
    date: "2022-02-10",
  },
  {
    slug: "getting-started4",
    title: "Getting started",
    image: "gettingstarted.png",
    excerpt: "NextJS is a React SSR framework",
    date: "2022-02-10",
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
