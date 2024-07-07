import Navbar from "./components/navbar";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
    <main className="px-48">
    <Navbar/>
    <div className="h-lvh">
      <p className=" py-52 text-wrap text-justify text-5xl">Customize your youTube recommendations with<span className="font-bold textHighlight1 text-8xl"> personalizer </span>to your preferences</p>
    </div>
    <Footer/>
    </main>
    </>
  );
}
