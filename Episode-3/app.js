import { getElementById } from "domutils";
import React from "react";
import ReactDOM from "react-dom/client";
import My_Pic from "./My_Pic.jpg";
import logo from "./logo.jpg";

//const root = ReactDOM.createRoot(document.getElementById("root"));

// const heading = <h1 id="heading">Namaste Manish using JSX</h1>;

// console.log(heading);

//React Functional Component
// const Title1 = () => <h1 id="title"> This is title 1</h1>;
// const Title2 = () => <h1 id="title"> This is title 2</h1>;

// const Heading1 = () => {
//   return (
//     <div>
//       {<Title1 />}
//       {Title2()}
//       {heading}
//       <h1 id="heading" className="heads">
//         Namaste Bro 1
//       </h1>
//     </div>
//   );
// };

// // root.render(heading);
// root.render(<Heading1 />);

//ASSIGNMENT - PART I
// const heading1 = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", {key :"h1"}, "This is heading 1 with React.creatElement"),
//   React.createElement("h2", {key :"h2"}, "This is heading 2 with React.createElement"),
//   React.createElement("h3", {key :"h3"}, "This is heading 3 with React.createElement"),
// ]);

// root.render(heading1);

// const root2 = ReactDOM.createRoot(document.getElementById("root2"));

// const H1 = () => <h1 key ="h1">This is heading 1 with JSX</h1>;
// const H2 = <h2 key ="h2">This is heading 2 with JSX</h2>;
// const DIVI = <div></div>;

// const Heading2 = () => {
//   const H3 = <h3 key ="h3"> This is heading 3 with JSX</h3>;
//   return (
//     <div className="title">
//       {<H1 />}
//       {H2}
//       {H3}
//     </div>
//   );
// };

// console.log(Heading2);

// root2.render(<Heading2 />);

//ASSIGNMENT - PART II
const Navbar = () => {return (
  <div className="navbar">
    <div className="logo">
      <img src={logo} alt="my-logo" />
    </div>
    <div className="search-bar">
      <input type="text" className="search-input" placeholder="Search..." />
    </div>
    <div className="user-icon">
      <img src={My_Pic} alt="myPic" />
    </div>
  </div>
)};

const root3 = ReactDOM.createRoot(document.getElementsByTagName("body")[0]);
console.log(root3);

root3.render(<Navbar />);
