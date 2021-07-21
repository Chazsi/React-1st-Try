import Header from "./header";
import Footer from "./footer";
import PageHome from "./pages/pagehome";
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import PageAbout from "./pages/pageabout";
import PageContact from "./pages/pagecontact";
import PagePortfolio from "./pages/pageportfolio";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/about' component={PageAbout} />
        <Route path='/contact' component={PageContact} />
        <Route path='/portfolio' component={PagePortfolio} />
        <Route path='/' component={PageHome} />
      </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
