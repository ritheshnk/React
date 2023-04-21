import React from "react"

function Greet(){
  const day=new Date();
  const hour=day.getHours();

  let wish;

  if(hour>=0 && hour<12){
    wish="Good morning";
  }else if(hour>=12 && hour<16){
    wish="Good afternoon";
  }else if(hour>=16 && hour<19){
    wish="Good evening";
  }else{
    wish="Good night";
  }
  return <h1>{wish}</h1>;
}

export default Greet;