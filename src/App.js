import React, { Component } from 'react';
import { BrowserView, MobileView} from 'react-device-detect';
import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserView>
          <Desktop/>
        </BrowserView>
        <MobileView>
            <Mobile/>
        </MobileView>
      </div>
    );
  }
}

export default App;
