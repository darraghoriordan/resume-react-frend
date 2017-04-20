import React from 'react';
import {Route} from 'react-router-dom'
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import AvoCalculatorPage from './components/avoCalculator/AvoCalculatorPage';
import CoursePage from './components/courses/CoursePage';

class AppRoutes extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/courses" component={CoursePage}/>
        <Route path="/howmanyavos" component={AvoCalculatorPage}/>
      </div>
    )
  }
}
export default AppRoutes