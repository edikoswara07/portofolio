import Layout from "./components/Layout";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./components/NotFound";
import Tittle from "./components/Tittle";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Tittle title="Edi Koswara" />
            <Home />
          </Route>

          <Route path="/about">
            <Tittle title="About" />
            <About />
          </Route>

          <Route path="*">
            <Tittle title="404 Bree" />
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
