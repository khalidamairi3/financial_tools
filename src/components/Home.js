import React from "react";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Grid from "@mui/material/Grid";

const mainFeaturedPost = {
  title: "Amayri Financial Tools",
  description:
    "Basic Financial tools and calculators to help you plan and prepare for your future business and investment",
  image:
    "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Currency converter",
    description:
      "Calculate live currency and foreign exchange rates with the free Currency Converter tool we provide. Convert between all major global currencies",
    image:
      "https://images.unsplash.com/photo-1591033594798-33227a05780d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=759&q=80",
    link: "/Currency-Converter",
  },
  {
    title: "Compound Interest Calculator",

    description:
      "Use our compound interest calculator to see how your savings or investments might grow over time using the power of compound interest.",
    image:
      "https://images.unsplash.com/photo-1601382270349-49c15bddf738?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    link: "/compound-interest",
  },
];

function Home() {
  return (
    <div>
      <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
      </main>
    </div>
  );
}

export default Home;
