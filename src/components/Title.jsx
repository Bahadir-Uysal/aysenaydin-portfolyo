/* eslint-disable react/prop-types */

function Title({ color, text, textSize,className }) {

  return <h1 className={`${textSize} ${color} font-bold ${className}`}>{text}</h1>;
}
export default Title;
