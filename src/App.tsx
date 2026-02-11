import { Posts } from "./components/Posts";
import { RightSidebar } from "./components/RightSidebar";
import { Topbar } from "./components/Topbar";
import { LeftSidebar } from "./components/LeftSidebar";
import { Content } from "./components/Content";

import "./index.css";

export function App() {
    return (
      <div>
        <Topbar />

        <div style={{ marginLeft: "13vw", marginRight: "13w" }}>
          <div style={{ display: "flex" }}>

            <div style={{ flex: 1 }}>
              <LeftSidebar />
            </div>

            <div style={{ flex: 3 }}>
              <Posts />
              <Content />
            </div>

            <div style={{ flex: 1 }}>
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }


export default App;