interface ITopbarElement {
    icon: any;
    title: string;
    selected: boolean;
}

export function TopbarElement({ icon, title, selected }: ITopbarElement) {
    return <div 
        className={`topbar-element ${selected ? 'selected' : ''}`}
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 12px",
            cursor: "pointer",
            borderBottom: selected ? "2px solid black" : "2px solid transparent",
            minWidth: "80px",
            height: "52px",
            justifyContent: "center",
        }}
    >
        <div style={{
            fontSize: "20px",
            marginBottom: "2px"
        }}>
            {icon}
        </div>
        <div style={{
            fontSize: "12px",
            fontWeight: selected ? "600" : "400",
            textAlign: "center"
        }}>
            {title}
        </div>
    </div>
}