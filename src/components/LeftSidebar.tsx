export function LeftSidebar() {
    return (
        <div>
            <div
                style={{
                    height: "35vh",
                    marginTop: "12px",
                    borderRadius: "12px",
                    border: "1px solid rgb(190, 189, 189)",
                    fontFamily: "Arial, sans-serif",
                    backgroundColor: "#fff"
                }}
            >
                <div
                    style={{
                        height: "12vh",
                        backgroundColor: "#a3b6d0",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px"
                    }}
                ></div>

                <div
                    style={{
                        height: "9vh",
                        marginLeft: "5px",
                        marginTop: "-20px",
                        width: "5vw",
                        border: "1px solid black",
                        borderRadius: "50px",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <img
                        src="https://cdn.vectorstock.com/i/1000v/58/32/cute-cat-kawaii-chibi-drawing-style-vector-45305832.jpg"
                        alt="Cute cat"
                        style={{
                            marginBottom: "-6px",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </div>

                <div
                    style={{
                        padding: "12px",
                        position: "relative"
                    }}
                >
                    <div style={{ marginTop: "20px" }}>
                        <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                            Somya Baran
                        </div>
                        <div style={{ fontSize: "13px", color: "#555", marginBottom: "6px" }}>
                            18| MERN stack in progress | Exploring Tailwind & Figma
                        </div>
                        <div style={{ fontSize: "13px", color: "#777" }}>
                            Delhi
                        </div>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "16px",
                                fontSize: "13px"
                            }}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}