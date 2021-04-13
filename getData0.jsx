const App = () => {
  const handler = (e) => alert(`button: ${e.target.getAttribute(index)}`);
  let a = [1,2,3,4,5]
  let list = a.map((item, index) => <MyButton index= {index}key={item} onClick={handler}></MyButton>)

  return <>{list}</>;
};
const MyButton = ({onClick, index}) => {
  let {Button} = ReactBootstrap;
  return <Button index={index} onClick={onClick}>Click Me</Button>;
};

//---------------
ReactDOM.render(<App />, document.getElementById("root"));
