import { Row } from "antd";

import WebcodeDetails from "./WebcodeDetails";
import WebcodeName from "./WebcodeName";

const Class = () => {
  return (
    <Row>
      <WebcodeName />
      <WebcodeDetails />
    </Row>
  );
};

export default Class;
