import React from 'react';

const Card = (props) => {
  const {name, email, id} = props;
  console.log(props);
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt='robots' src={`https://robohash.org//${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;

// var a = "Udemy.The.Complete.JavaScript.Course.Build.a.Real.World.Project.2017";
// var b  = a.replace(/\./g, ' ');

// function replace(str) {
//   return str.replace(/\./g, ' ')
// }
//
// replace("JavaScript.Essential.Training")
//
//
//
// let numObjs = {x:1, y:2, z:3};
//
// let {x:a, y:b, z:c} = numObjs;
// console.log('a ',a,'b ', b,'c ',c);




let obj = {
  start: {x:1, y:2},
  end: {x:'xEnd', y:'yEnd'}
};

const  {start: {x : startX, y: startY}} = obj;
console.log(startX);
