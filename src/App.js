import Layout from "./components/Layout";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
