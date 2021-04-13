const App = () => {
  const handler = () => alert('hello world');

  return <MyButton onClick={handler}></MyButton>
};
const MyButton = ({onClick}) => {
  let {Button} = ReactBootstrap;
  return <Button onClick={onClick}>Click Me</Button>;
};

//---------------
ReactDOM.render(<App />, document.getElementById("root"));
