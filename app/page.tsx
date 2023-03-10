import Container from "./components/Container";
import PostPreview from "./components/PostPreview";

export default function Home() {
  return (
    <main>
      <Container>
        <div className='main-img-ratio relative overflow-hidden'>
          <h1 className='absolute z-10 flex h-full w-full items-center justify-center font-bold text-white sm:text-3xl'>
            협찬없는 내돈내산 맛집블로그
          </h1>
          <div className='main-bg' />
          <div className='absolute inset-0 bg-black/50' />
        </div>
        <PostPreview />
      </Container>
    </main>
  );
}
