
function Title({ color, text, textSize }) {

  return <h1 className={`${textSize} ${color} font-bold`}>{text}</h1>;
}
export default Title;
