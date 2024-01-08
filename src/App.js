import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// const RestaurantCard = (props) => {
//   console.log(props)
//   return (
//     <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//       <img
//         className="res-logo"
//         alt="res-logo"
//         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/slheenytwb3iaypqf4yd"
//       />
//       <h3>{props.resName}</h3>
//       <h5>{props.cuisine}</h5>
//       <h5>4.5 stars</h5>
//       <h5>35 minutes</h5>
//     </div>
//   );
// };

//Using de-structuring



// const RestaurantCard = (props) => {

//   const { resData } = props;

//   return (
//     <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//       <img
//         className="res-logo"
//         alt="res-logo"
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//           resData.info.cloudinaryImageId
//         }
//       />
//       <h3>{resData.info.name}</h3>
//       <h5>{resData.info.cuisines.join(", ")}</h5>
//       <h5>{resData.info.avgRating} stars</h5>
//       <h5>{resData.info.costForTwo}</h5>
//       <h5>{resData.info.sla.deliveryTime} minutes</h5>
//     </div>
//   );
// };

// Optimised way to write above code


// Not using keys (not acceptable) <<<< index as a key <<<<<< use unique id as a key (Best practice)


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
