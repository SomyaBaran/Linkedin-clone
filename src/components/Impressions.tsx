export function Impressions() {
    return (
        <div
            style={{
                border: "1px solid rgb(190, 189, 189)",
                borderRadius: "10px",
                marginTop: "10px",
                backgroundColor: "white",
                padding: "16px",
            }}
        >
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px"
            }}>
                <p style={{
                    fontSize: "0.9rem",
                    margin: "0",
                    color: "rgb(53, 53, 53)",
                    fontWeight: "500"
                }}>
                    Profile viewers
                </p>
                <p style={{
                    fontSize: "0.9rem",
                    margin: "0",
                    color: "rgb(0, 102, 204)",
                    fontWeight: "600"
                }}>
                    171
                </p>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <p style={{
                    fontSize: "0.9rem",
                    margin: "0",
                    color: "rgb(53, 53, 53)",
                    fontWeight: "500"
                }}>
                    Post impressions
                </p>
                <p style={{
                    fontSize: "0.9rem",
                    margin: "0",
                    color: "rgb(0, 102, 204)",
                    fontWeight: "600"
                }}>
                    96
                </p>
            </div>
        </div>
    );
}