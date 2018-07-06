import React,{Fragment} from 'react';

import Main from './Main';
import Footer from './Footer';
import Header from './Header';
export default class App extends React.Component {
  render() {
    return (
    <Fragment>    
     	<Header />
        <Main />
        <Footer />
    </Fragment>
     );
    
  }
}

