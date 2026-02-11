interface ITopbarElement {
    icon: any;
    title: string;
}

export function TopbarElementWithDropdown({icon, title}: ITopbarElement) {
    return <div style={{padding: 5, margin: 5}}>

        <div style={{display: "flex", justifyContent: "center"}}>
            {icon}
        </div>
        <div>
            {title}
            <img src={"https://cdn-icons-png.flaticon.com/512/25/25623.png"} width={10} alt="image" />
        </div>
    </div>
}