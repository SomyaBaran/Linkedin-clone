export function Options() {
    return (
        <div style={{
            height: "13vh",
            border: "1px solid rgb(190, 189, 189)",
            borderRadius: "10px",
            marginTop: "10px",
            backgroundColor: "white",
            padding: "12px 16px",
            overflow: "hidden"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                justifyContent: "space-around"
            }}>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer"
                }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                    </svg>
                    <span style={{ fontSize: "13px", fontWeight: "500" }}>Saved items</span>
                </div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer"
                }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                    <span style={{ fontSize: "13px", fontWeight: "500" }}>Groups</span>
                </div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer"
                }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                    <span style={{ fontSize: "13px", fontWeight: "500" }}>Newsletters</span>
                </div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer"
                }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                    </svg>
                    <span style={{ fontSize: "13px", fontWeight: "500" }}>Events</span>
                </div>
            </div>
        </div>
    )
}