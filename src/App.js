import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WeOffer from "./components/WeOffer/WeOffer";
import Cases from "./components/Cases/Cases";
import Blog from "./components/Blog/Blog";
import Team from "./components/Team/Team";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Container>
      <Header />
      <main>
        <Hero />
        <WeOffer />
        <Cases />
        <Blog />
        <Team />
        <Contacts />
        <Footer />
      </main>
    </Container>
  );
}

export default App;
