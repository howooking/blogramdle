import { DUMMY_POSTS, PostType } from "@/constants/dummy";
import Container from "../components/Container";
import PostPreview from "../components/PostPreview";

export default function Posts() {
  return (
    <Container>
      <PostPreview />
    </Container>
  );
}
