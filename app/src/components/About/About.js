import React from 'react';

const About = (props) => {
    return (
      <h1>
       {props.match.params.name}
      </h1>
    );
  }

export default About;