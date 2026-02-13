import { Posts } from "./components/Posts";
import { RightSidebar } from "./components/RightSidebar";
import { Topbar } from "./components/Topbar";
import { LeftSidebar } from "./components/LeftSidebar";
import { Content } from "./components/Content";
import { Career } from "./components/Career";
import { Impressions } from "./components/Impressions";
import { Options } from "./components/Options";

import "./index.css";

export function App() {
    return (
      <div>
        <Topbar />

        <div style={{ marginLeft: "13vw", marginRight: "13vw" }}>
          <div style={{ display: "flex" }}>

            <div style={{ flex: 1.3 }}>
              <LeftSidebar />
              <Career />
              <Impressions />
              <Options />
            </div>

            <div style={{ flex: 3 }}>
              <Posts />
              <Content />
            </div>

            <div style={{ flex: 1.7 }}>
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }


export default App;