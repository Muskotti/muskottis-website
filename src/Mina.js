import React from 'react';
import {Typography} from "@material-ui/core";
import avatar from './images/ToniV.png'

export default function Mina() {
  return (
    <div style={{alignItems: "center", paddingTop: 100}}>
      <img src={avatar} alt="Toni Vänttinen" style={{borderRadius: '50%', alignItems: "center",display: 'block', margin: 'auto', marginBottom: 100, border: 'thick solid white'}}/>
      <Typography variant="h1" align={"center"} style={{paddingBottom: 100}}>
        Toni Vänttinen
      </Typography>
    </div>
  );
}
