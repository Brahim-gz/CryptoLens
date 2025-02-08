import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

function Home() {
  return (
    <>
      <Header />
      <h1 className="mx-[16%] mt-8 mb-8 bg-gradient-to-r from-[#191533] to-[#9F91FA] bg-clip-text text-transparent font-nunito font-bold text-[41px] ">
        Top cryptocurrencies
      </h1>
      <Main />
      <Footer />
    </>
  );
}

export default Home;
