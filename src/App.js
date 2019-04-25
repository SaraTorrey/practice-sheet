import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    pages: []
  }

render () {
    return (
        <Router>
          <div className="App">
            <div className="container">
              <Header />
                <Route exact path="/" render={props => (
                    <React.Fragment>
                      <LessonBook />
                      <TheoryBook />
                      <TechniqueBook />
                      <PerformanceBook />
                    </React.Fragment>
                )} />
            </div>
          </div>
        </Router>
    )
}

}

export default App;
