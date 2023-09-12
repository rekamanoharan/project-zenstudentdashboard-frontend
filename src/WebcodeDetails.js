import { Divider, Row } from "antd";

const WebcodeDetails = () => {
  return (
    <Row
      style={{
        flexDirection: "column",
        gap: "20px",
        padding: "30px",
        width: "75%",
        background: "#fff",
        border: "1px solid #eee",
        borderRadius: "8px",
      }}
    >
      <h2 className="session-heading__primary">
        Reka Mano (B48WD Tamil- First Webcode) Ice and Fire API
      </h2>
      <h4 className="session-heading__secondary product-font-color">
        Description : Implement the Ice and Fire API using async/await with
        fetch.
      </h4>
      <Divider style={{ margin: 0 }} />
      <h4 className="session-heading__secondary">Constraints:</h4>
      <h4 className="session-heading__secondary product-font-color">
        <ul>
          <li>All your HTML elements should be created with DOM.</li>
          <li> Use the async/await. Use try catch to handle errors.</li>
          <li>Use fetch() to get the data from Ice and Fire Api</li>
          <li>
            All JavaScript codes should be in a script file named script.js
            which has to be imported in your HTML page.
          </li>
          <li>
            Project should contain either search filter(which should highlight
            the text) or pagination(shouldn't use any library).
          </li>
        </ul>
      </h4>
      <h4 className="session-heading__secondary">
        How do I process the API data?
      </h4>
      <h4 className="session-heading__secondary product-font-color">
        <ul>
          <li> Display around 10 books.</li>
          <li>
            Display the name and isbn of each book. Display the number of pages
            in the book.
          </li>
          <li>
            Also display the authors of the book. Display the publisher name and
            the released date.
          </li>
          <li> Also display at least 5 characters for each book.</li>
        </ul>
      </h4>
      <h4 className="session-heading__secondary"> Any basic hints to solve?</h4>
      <h4 className="session-heading__secondary product-font-color">
        <ul>
          <li>https://anapioficeandfire.com/</li>
          <li>https://anapioficeandfire.com/Documentation</li>
          <li> https://anapioficeandfire.com/About </li>
        </ul>
      </h4>
      <h4 className="session-heading__secondary">Terms and Conditions?</h4>
      <h4 className="session-heading__secondary product-font-color">
        <ul>
          <li>
            You have 24 hours to complete before the deadline Raise a query
            ticket only in the Zen portal and get your doubts resolved.
          </li>
          <li>
            You agree to not share this confidential document with anyone.
          </li>
          <li>
            You agree to open-source your code (it may even look good on your
            profile!).
          </li>
        </ul>
      </h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="session-heading__secondary">
              Submission
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="session-heading__secondary product-font-color">
              Front-end Source code
            </td>
            <input type="text" class="codeSubmission"></input>
          </tr>
          <tr>
            <td class="session-heading__secondary product-font-color">
              Front-end Deployed URL
            </td>
            <input type="text" class="codeSubmission"></input>
          </tr>
        </tbody>
      </table>
      <button class="btn" id="submit" type="button">
        Submit
      </button>
    </Row>
  );
};
export default WebcodeDetails;
