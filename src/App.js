import Test from './components/routes/Test';
import { Route, Switch } from 'react-router-dom';
import Navbar from 'components/layout/Navbar';

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
      <Switch>
        <Route path="/test" exact component={Test} />
      </Switch>
    </>
  );
};

export default App;
