import React from 'react';
import Header from "./Header";
import Mina from "./Mina";
import 'typeface-roboto';
import MyTabs from './MyTabs';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

export default class App extends React.Component {

  state = {
    check: true,
  }

  changeTheme = () => {
    this.setState(prevState => ({
      check: !prevState.check
    }));
  }

  render() {

    const theme = createMuiTheme({
      palette: {
        type: this.state.check ? 'dark' : 'light',
        primary: {main: "#80deea"},
        secondary: {main:"#f06292"},
      }
    });

    return (
      <div>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Header changeTheme={this.changeTheme}/>
          <Mina/>
          <MyTabs repos={this.state.data}/>
        </ThemeProvider>
      </div>
    );
  }
}
