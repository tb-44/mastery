import React from 'react';

const About = (props) => {
    return (
      <h1>
       {props.match.params.name}
       This is the about page
      </h1>
    );
  }

export default About;