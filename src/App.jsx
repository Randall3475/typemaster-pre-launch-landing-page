import GlobalStyle from './globalStyle';
import { Header, Hero, ImageSection, CardSection, Footer } from './components';
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <ImageSection />
      <CardSection />
      <Footer />
    </>
  );
};
export default App;
