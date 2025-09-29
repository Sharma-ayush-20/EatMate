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


  ------optimizing technique--------
  lazy loading
  on demand loading
  chunkings
  dynamic bundling
  code splitting

<!-- Chunking -->
Kya hai: Apne code ko chhote-chhote pieces (chunks) me divide karna.
Kyun: Browser ek saath bada JavaScript file load karega to slow ho jayega. Chunks se sirf required part load hota hai.

<!-- Lazy Loading -->

Kya hai: Component ya module tab load hota hai jab wo UI me use ho.
Kyun: Pehle se sab load nahi karna padta → initial load fast ho jata hai.
React me: React.lazy() + Suspense

<!-- On-demand Loading -->

Kya hai: Lazy loading ka aur specific form, sirf jab user action kare tab module/component load hota hai.
Example: User “View Profile” button click kare tab profile component load ho.
Difference from lazy loading: Lazy loading mostly route-level hoti hai, on-demand loading action-specific hoti hai.

<!-- Code Splitting -->

Kya hai: App ka code multiple bundles me split karna.
Kyun: Initial load fast → small JS bundles → user experience better.
React me: Route-based ya component-based splitting:

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));

Ye basically chunking + lazy loading ka combination hai.

<!-- Dynamic Bundling -->

Kya hai: Bundles ko dynamically generate karna runtime ya build time pe based on usage.
Kyun: Sirf jo code use ho raha hai, wahi bundle me include ho → performance best.
Example: Webpack ya Vite automatically code splitting + dynamic bundling karte hain.

<!-- Higher order components  -->

React me Higher-Order Component (HOC) ek function hota hai jo ek component ko input ke roop me leta hai aur ek naya enhanced component return karta hai. Ye basically code reuse aur logic sharing ke liye use hota hai.