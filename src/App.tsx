import Header from "./components/layout/Header";
import NewsListing from "./components/NewsListing";
import WeatherWidget from "./components/WeatherWidget";

function App() {
  return (
    <div className="news__app bg-gray-900 min-h-screen px-10">
      <Header />

      <main className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start lg:space-x-6 py-10">
        <div className="flex-1">
          <NewsListing />
        </div>

        <div className="lg:sticky lg:top-72 w-full max-w-xs mb-10 lg:mb-0">
          <WeatherWidget />
        </div>
      </main>
    </div>
  );
}

export default App;
