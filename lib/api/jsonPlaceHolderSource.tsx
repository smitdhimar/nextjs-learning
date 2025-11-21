import { apiClient } from "./apiClient";

const baseUrl = process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_GATEWAY;
export const getPosts = (postId?: Number) => {
  return apiClient(`/posts/${postId || ""}`, {
    baseUrl: baseUrl,
    // next: {
    //   revalidate: 30,
    // },
    // cache: "no-store"
  });
};