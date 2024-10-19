import React from "react"; // Imported react to use jsx which is contained in the return syntax

const Card = (props) => {
  // can also destructure into props section
  // Put the properties in the function
  const { name, email, id } = props; // destructuring
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      {/* Added tachyon for styling using className */}
      <img alt="robots" src={`https://robohash.org/${id}?200x200`}></img>
      {/*Using template strings from ES6 to randomize robots*/}
      {/* Question mark to change the height */}
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
