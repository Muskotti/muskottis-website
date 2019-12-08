import React from 'react';
import {Card, Box, Grid} from "@material-ui/core";
import PortfolioItem from "./PortfolioItem";

const style = {
  maxWidth: 345,
  minWidth: 345,
  minHeight: 345,
}

export default class Portfolio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/Muskotti/repos')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .then(() => console.log(this.state.data));
  }

  render() {
    if(this.state.data && this.props.value === this.props.index) {
      return (
        <div style={{maxWidth: '100vw', overflow: "hidden", paddingBottom: 100}}>
          <Box style={{paddingTop: 100, flex: 1}}/>
          <Grid container justify="center" spacing={2}>
            {this.state.data.map(data => {
              return (
                <Grid item key={data.id}>
                  <Card style={style}>
                    <PortfolioItem name={data.name} language={data.language} description={data.description} date={data.created_at}/>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </div>
      );
    }
    return (
      null
    );
  }
}
