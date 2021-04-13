const App = () => {
  const handler = () => alert('hello world');
  let a = [1,2,3,4]
  let list = a.map(item => <MyButton onClick={handler}></MyButton>)

  return <>{list}</>;
};
const MyButton = ({onClick}) => {
  let {Button} = ReactBootstrap;
  return <Button onClick={onClick}>Click Me</Button>;
};

//---------------
ReactDOM.render(<App />, document.getElementById("root"));
