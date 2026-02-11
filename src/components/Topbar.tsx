import { Home, Workflow, BriefcaseBusiness, MessageCircle, Bell, CircleUserRound, Grid3x3 } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { TopbarElement } from "./TopBarElement";
import { TopbarElementWithDropdown } from "./TopbarElementWithDropdown";

export function Topbar() {
    return <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        marginLeft: "10vw",  
        marginRight: "10vw",
        height: "52px",
        borderBottom: "1px solid #e0e0e0",
        backgroundColor: "white",
        borderRadius: "10px"
    }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
                height={40}
                src={"https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"}
                alt="linkedin image"
                style={{
                    width: "40px",
                    height: "40px"
                }}
            />
            <SearchBar placeholder="Search" />
        </div>
        <div style={{ display: "flex", height: "100%" }}>
            <TopbarElement selected={true} title={"Home"} icon={<Home size={20} />} />
            <TopbarElement selected={false} title={"My Network"} icon={<Workflow size={20} />} />
            <TopbarElement selected={false} title={"Jobs"} icon={<BriefcaseBusiness size={20} />} />
            <TopbarElement selected={false} title={"Messaging"} icon={<MessageCircle size={20} />} />
            <TopbarElement selected={false} title={"Notifications"} icon={<Bell size={20} />} />

            <TopbarElementWithDropdown title={"Me"} icon={<CircleUserRound size={20} />} />
            <TopbarElementWithDropdown title={"For Business"} icon={<Grid3x3 size={20} />} />
        </div>
    </div>
}