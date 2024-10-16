import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import routes from "./routes/routes";
import { useRoutes } from "react-router-dom";
import { BasketContextProvider } from "./contexts/BasketContext";

function App() {
  const router = useRoutes(routes);
  return (
    <BasketContextProvider>
      <div className="app">
        <Header />
        {router}
        <Footer />
      </div>
    </BasketContextProvider>
  );
}

export default App;
