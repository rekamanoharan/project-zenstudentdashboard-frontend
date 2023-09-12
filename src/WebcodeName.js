import React from "react";
import "./Card.css";
import WebcodeDetails from "./WebcodeDetails";

// import { List } from "antd";
// const data = [
//   {
//     title: "Reka",
//   },
// ];
// const WebcodeName = () => (
//   <List
//     itemLayout="horizontal"
//     dataSource={data}
//     renderItem={(item, index) => (
//       <List.Item>
//         <List.Item.Meta
//           title={item.title}
//           description="(B48WD Tamil- First Webcode)
//           Ice and Fire API"
//         />
//       </List.Item>
//     )}
//   />
// );
const WebcodeName = () => {
  return (
    <div className="card-container" onClick={WebcodeDetails}>
      <h1 className="card-title">Reka</h1>
      <p className="card-description">
        (B48WD Tamil- First Webcode) Ice and Fire API
      </p>
    </div>
  );
};

export default WebcodeName;
