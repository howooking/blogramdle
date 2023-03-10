import { DUMMY_POSTS, PostType } from "@/constants/dummy";
import Image from "next/image";
import PostPreviewCard from "./PostPrevieCard";

export default function PostPreview() {
  return (
    <div className='flex flex-col gap-5'>
      {DUMMY_POSTS.map((post) => (
        <PostPreviewCard
          createdAt={post.createdAt}
          updatedAt={post.updatedAt}
          address={post.address}
          author={post.address}
          id={post.id}
          key={post.id}
          image={post.image}
          title={post.title}
          contents={post.contents}
        />
      ))}
    </div>
  );
}
