import React from "react";

function About(props) {
function display(){
  if(props.bio && props.bio !== ""){
    return <p>{props.bio}</p>
  } else {
    return null;
  }
}
  return (
    <div id="about">
      <h2>About Me</h2>
      {display()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
  function Links (props){
    return (
    <div>
      <h3>Links</h3>
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
    </div>
    );
  }
}

export default About;
