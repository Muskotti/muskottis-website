import React from 'react';
import {CardContent, Divider, Typography} from "@material-ui/core";
import Icon from '@mdi/react'
import { mdiLanguageJava  } from '@mdi/js'
import { mdiLanguageJavascript } from '@mdi/js';
import { mdiLanguageCsharp } from '@mdi/js';
import { mdiLanguageSwift } from '@mdi/js';

export default class PortfolioItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      icon: mdiLanguageJava,
      date: null
    }
  }

  componentDidMount() {
    if(this.props.language === 'Java'){
      this.setState({
        icon: mdiLanguageJava
      })
    } else if (this.props.language === 'JavaScript') {
      this.setState({
        icon: mdiLanguageJavascript
      })
    } else if (this.props.language === 'C#') {
      this.setState({
        icon: mdiLanguageCsharp
      })
    }  else if (this.props.language === 'Swift') {
      this.setState({
        icon: mdiLanguageSwift
      })
    }
    this.setState({
      date: this.formatDate(this.props.date)
    })
  }

  formatDate(date) {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();

    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }

    return day + '-' + month + '-' + year;
  }

  render() {
    if(this.props.value === this.props.index) {
      return (
        <CardContent style={{padding: 0}}>
          <div style={{padding: 12}}>
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center", minHeight: 70}}>
              {this.props.name}
            </Typography>
            <div align={'center'}>
              <Icon path={this.state.icon}
                    title="User Profile"
                    size={5}
                    color="#80deea"
              />
            </div>
            <Divider style={{marginBottom: 12}} />
            <Typography variant="body2" color="textSecondary" component="p" style={{paddingBottom: 12}}>
              {this.state.date}
            </Typography>
            <Typography variant="body2" component="p">
              Description:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{paddingBottom: 12}}>
              {this.props.description}
            </Typography>
          </div>
        </CardContent>
      );
    }
    return (
      null
    );
  }
}
