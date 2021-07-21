import Header from "./header";
import Footer from "./footer";
import PageHome from "./pages/pagehome";
import {BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={PageHome} />
      </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
