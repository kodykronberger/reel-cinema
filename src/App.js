import Test from './components/routes/Test';
import { Route, Switch } from 'react-router-dom';
import Navbar from 'components/layout/Navbar';
import Home from 'components/routes/Home';
import ByCategory from 'components/routes/ByCategory';
import Details from 'components/routes/Details';

/**
 * This function is used to simulate performance benchmarking.
 *
 * Should you choose to complete this step, this
 * function should be called only on first page load.
 **/
export const trackInitialLoad = () => {
  console.log('First page load');
};

/**
 * This function is used to simulate performance benchmarking.
 *
 * Should you choose to complete this step, this
 * function should be called only once the page has completely
 * loaded.
 **/
export const trackPageCompletedLoading = () => {
  console.log('Page done loading');
};

const App = () => {
  return (
    <>
      <Navbar />
      <div className="px-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/categories/:category" exact component={ByCategory} />
          <Route path="/details/:movie" exact component={Details} />
          <Route path="/test" exact component={Test} />
        </Switch>
      </div>
    </>
  );
};

export default App;
