import "bulmaswatch/cyborg/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./state";

import CodeCell from "./components/code-cell";
import TextEditor from "./components/text-editor";
import CellList from "./components/cell-list";
import TopNav from "./components/top-nav";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TopNav />
        <CellList />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
