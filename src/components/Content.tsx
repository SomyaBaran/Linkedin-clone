export function Content() {
    return (
        <div style={{
            height: "65vh",
            marginTop: "20px",
            marginLeft: "17px",
            borderRadius: "20px",
            border: "1px solid rgb(190, 189, 189)",
            backgroundColor: "white"
        }}>
            <div style={{
                height: "6.8vh",
                width: "4vw",
                border: "1px solid rgb(190, 189, 189)",
                marginLeft: "20px",
                marginTop: "20px",
                borderRadius: "50%",
                overflow: "hidden"
            }}>
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
            <h4 style={{
                fontSize: "17.5px",
                marginLeft: "6vw",
                marginTop: "-50px",
                color: "rgb(53, 53, 53)",
                fontWeight: "500"
            }}>
                Somya Baranwal
            </h4>
        </div>
    );
}