const App = () => {
  const handler = (e) => alert(`button: ${e.target.getAttributeNames()}`);
  let a = [1,2,3,4,5]
  let list = a.map(item => <MyButton key={item} onClick={handler}></MyButton>)

  return <>{list}</>;
};
const MyButton = ({onClick}) => {
  let {Button} = ReactBootstrap;
  return <Button onClick={onClick}>Click Me</Button>;
};

//---------------
ReactDOM.render(<App />, document.getElementById("root"));
