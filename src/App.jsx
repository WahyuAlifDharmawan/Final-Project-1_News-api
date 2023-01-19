import { useState } from "react";
import reactLogo from "./assets/react.svg";
import NewsListIndonesia from "./components/pages/indonesia/newsListIndonesia";
import NewsListTech from "./components/pages/programming/newsListTech";
import NewsListCovid from "./components/pages/covid/newsListCovid";
import NewsListSaved from "./components/pages/saved/newsListSaved";
import Header from "./components/organisms/header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/organisms/footer/Footer";
import NewsListAbout from "./components/pages/about/newsListAbout";
import SearchPage from "./components/pages/search/SearchPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="App">
        <div className="bg-cyan-100">
          <Header />

          <Routes>
            <Route path="/" element={<NewsListIndonesia />} />
            <Route path="/programming" element={<NewsListTech />} />
            <Route path="/covid" element={<NewsListCovid />} />
            <Route path="/about" element={<NewsListAbout />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/saved" element={<NewsListSaved />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
