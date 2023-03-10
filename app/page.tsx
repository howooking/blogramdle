import Container from "./components/Container";
import Test from "./components/Test";

export default function Home() {
  return (
    <main>
      <Container>
        <div className='main-img-ratio relative overflow-hidden'>
          <div className='main-bg h-screen bg-cover bg-fixed bg-center' />
          <div className='absolute inset-0 bg-black/50' />
        </div>
      </Container>
      {/* <Test /> */}
    </main>
  );
}
