//----function components
  // useEffect(() => {
  //   // APi call
  // }, [name, location])

  //-----class-based components
  //this.state.userInfo.name => current state
  //prevState.userInfo.name => change hone se pahile

  //----function components
  //   function MyComponent() {
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       console.log("Interval chal raha hai");
  //     }, 1000);

  //     // cleanup function (componentWillUnmount ke equal)
  //     return () => {
  //       clearInterval(timer);
  //       console.log("Component will unmount");
  //     };
  //   }, []); // empty dependency array = sirf mount & unmount par chalega

  //   return <h1>Function Component</h1>;
  // }

  //-----class-based components
  //  this.timer = setInterval(() => {
  //     console.log("Interval chal raha hai")
  //   }, 1000)
  //  componentWillUnmount(){
  //   clearInterval(this.timer)
  //   console.log("Component will unmount - this console when my components is unmounted and display another pages in ui")
  // }

  //----Constructor -> super Keyword
  //React.Component(parent) => inherit hote hai in About
  // means
  // class About extends React.Component {
  // => constructor(props){  } => without super ye React.component ke constructor ko overwrite kar raha hai
  // => JavaScript rule: agar child class apna constructor banati hai, to usko parent ka constructor call karna zaruri hai before using this.
  // (Ye kaam super() karta hai).
  // => correct way
  // => constructor(props){ super(props); this.state = {name: "DummyName"} }
  // }

  //useEffect ke andar async keyword kyu nhi likhte
  // Directly async useEffect me nahi likh sakte kyunki wo Promise return karega, React ko sirf cleanup function chahiye hota hai.
  // Isliye useEffect ke andar ek inner async function banake usko call karte hain.