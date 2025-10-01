# function components

- useEffect(() => {
- APi call
- }, [name, location])

# class-based components

- this.state.userInfo.name => current state
- prevState.userInfo.name => change hone se pahile

# function components

- function MyComponent() {
- useEffect(() => {
-     const timer = setInterval(() => {
-       console.log("Interval chal raha hai");
-     }, 1000);

-     - cleanup function (componentWillUnmount ke equal)
-     return () => {
-       clearInterval(timer);
-       console.log("Component will unmount");
-     };
- }, []); - empty dependency array = sirf mount & unmount par chalega

- return <h1>Function Component</h1>;
- }

# class-based components

- this.timer = setInterval(() => {
-     console.log("Interval chal raha hai")
- }, 1000)
- componentWillUnmount(){
- clearInterval(this.timer)
- console.log("Component will unmount - this console when my components is unmounted and display another pages in ui")
- }

# Constructor -> super Keyword

- React.Component(parent) => inherit hote hai in About

- means
- class About extends React.Component {
- => constructor(props){ } => without super ye React.component ke constructor ko overwrite kar raha hai
- => JavaScript rule: agar child class apna constructor banati hai, to usko parent ka constructor call karna zaruri hai before using this.
- (Ye kaam super() karta hai).
- => correct way
- => constructor(props){ super(props); this.state = {name: "DummyName"} }
- }

# useEffect ke andar async keyword kyu nhi likhte

- Directly async useEffect me nahi likh sakte kyunki wo Promise return karega, React ko sirf cleanup function chahiye hota hai.
- Isliye useEffect ke andar ek inner async function banake usko call karte hain.

# optimizing technique

- lazy loading
- on demand loading
- chunkings
- dynamic bundling
- code splitting

# Chunking

- Kya hai: Apne code ko chhote-chhote pieces (chunks) me divide karna.
- Kyun: Browser ek saath bada JavaScript file load karega to slow ho jayega. Chunks se sirf - required part load hota hai.

# Lazy Loading

- Kya hai: Component ya module tab load hota hai jab wo UI me use ho.
- Kyun: Pehle se sab load nahi karna padta → initial load fast ho jata hai.
- React me: React.lazy() + Suspense

# On-demand Loading

- Kya hai: Lazy loading ka aur specific form, sirf jab user action kare tab module/component -> load hota hai.
- Example: User “View Profile” button click kare tab profile component load ho.
- Difference from lazy loading: Lazy loading mostly route-level hoti hai, on-demand loading -> action-specific hoti hai.

# Code Splitting

- Kya hai: App ka code multiple bundles me split karna.
- Kyun: Initial load fast → small JS bundles → user experience better.
  React me: Route-based ya component-based splitting:

- const Home = React.lazy(() => import("./Home"));
- const About = React.lazy(() => import("./About"));

- Ye basically chunking + lazy loading ka combination hai.

# Dynamic Bundling

- Kya hai: Bundles ko dynamically generate karna runtime ya build time pe based on usage.
- Kyun: Sirf jo code use ho raha hai, wahi bundle me include ho → performance best.
- Example: Webpack ya Vite automatically code splitting + dynamic bundling karte hain.

# Higher order components

- React me Higher-Order Component (HOC) ek function hota hai jo ek component ko input ke roop
- me leta hai aur ek naya enhanced component return karta hai. Ye basically code reuse aur
- logic sharing ke liye use hota hai.

# controlled and unControlled components

- controlled components -> means parent components controlled there children components using uplifting the state -> passing the props to there children

- unControlled components -> means children components have there own controlled using states

# Uplifting the State (State Uplifting)

- Jab do ya do se zyada components ko ek hi data (state) chahiye hota hai, toh us state ko unke common parent me upar (uplift) kar dete hain.
- Phir wo parent us data ko props ke through children components ko pass karta hai.

- 👉 Iska matlab: state ko neeche se upar lekar jana taaki multiple child components ek hi data share kar saken.

- import React, { useState } from "react";

- Child 1: Input Component
- function InputBox({ onInputChange }) {
- return (
- <input
-      type="text"
-     placeholder="Type here..."
-      onChange={(e) => onInputChange(e.target.value)}
- />
- );
- }

- Child 2: Display Component
- function DisplayText({ text }) {
- return <h3>You typed: {text}</h3>;
- }

- Parent Component
- function App() {
- const [inputValue, setInputValue] = useState("");

- return (
- <div>
- <h2>Uplifting State Example</h2>
- {/_ Input se value upar parent me jaayegi _/}
- <InputBox onInputChange={setInputValue} />

-       {/* Parent se value dusre child ko milegi */}
-       <DisplayText text={inputValue} />
-     </div>

- );
- }

- export default App;

# Kaise kaam kar raha hai?

- InputBox me user type karega → onInputChange ke through value parent (App) ke state me store ho jaayegi.

- DisplayText ko parent ke state ka value milega → wo text show karega.

- ➡️ Agar state har child me alag rakhta toh dono alag data use karte. Uplifting se common source of truth ban gaya.

# Props Drilling

- Jab ek data ko bahut neeche ke nested component me bhejna ho, aur beech ke components us data ka use nahi karte, - phir bhi unko props ke through pass karna padta hai → is process ko props drilling kehte hain.

- 👉 Problem ye hai ki beech ke components unnecessary props handle karte hain.

# Example of Props Drilling

- import React from "react";

- function ChildC({ user }) {
- return <h3>User: {user}</h3>;
- }

- function ChildB({ user }) {

- ChildB use nahi kar raha user, sirf aage pass kar raha hai
- return <ChildC user={user} />;
- }

- function ChildA({ user }) {
- ChildA bhi use nahi kar raha user
-    return <ChildB user={user} />;
-  }

- function App() {
- const user = "Ayush Sharma";

- return (
- <div>
- <h2>Props Drilling Example</h2>
- <ChildA user={user} />
- </div>
- );
- }

- export default App; 

- App me user data hai.

- Wo ChildA → ChildB → ChildC tak pass ho raha hai.

- Sirf ChildC ko zarurat hai, lekin beech ke sab components ko props dene pade.

# ➡️ Ye props drilling ka problem hai. 

- Props Drilling Problem ka Solution

- Props drilling avoid karne ke liye:

- React Context API use karte hain

- State Management libraries (Redux, Zustand, Jotai, etc.)

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our own store
- connect our store to our app
- Create a Slice (Cart Slice)
- dispatch(action)
- selector
