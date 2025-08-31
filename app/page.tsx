import React from "react";
import Layout from "./components/Layout";
import { AppSidebar } from "./components/AppSidebar";
import { Posts } from "./components/Posts";
import { PostInput } from "./components/posts/PostInput";

export default function Home() {
  return (
    <Layout>
      <PostInput />
      <Posts />
    </Layout>
  );
}
