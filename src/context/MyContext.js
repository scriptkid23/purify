import React, { Component }  from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {

  render() {
    return <MyContext.Provider value={null}>{this.props.children}</MyContext.Provider>;
  }
}

export {MyContext, MyProvider};
