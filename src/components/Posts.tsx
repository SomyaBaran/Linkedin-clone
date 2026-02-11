import { Video, Image, FileText } from "lucide-react";

export function Posts() {
    return (
        <div style={{
            marginLeft: "20px",
            marginTop: "12px",
            borderRadius: "12px",
            border: "1px solid rgb(190, 189, 189)",
            padding: "20px",
            backgroundColor: "white"
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "15px"
            }}>
                <img
                    src="https://cdn.vectorstock.com/i/1000v/58/32/cute-cat-kawaii-chibi-drawing-style-vector-45305832.jpg"
                    alt="Cute cat"
                    style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "1px solid black"
                    }}
                />
                <input
                    placeholder="Start a post"
                    className="bold-placeholder"
                    style={{
                        flex: 1,
                        height: "50px",
                        borderStyle: "solid",
                        borderColor: "gray",
                        borderWidth: "1px",
                        borderRadius: "35px",
                        padding: "0 20px",
                        color: "black",
                        fontSize: "14px",
                        fontWeight: "600",
                        cursor: "pointer"
                    }}
                />
            </div>

            <div style={{
                display: "flex",
                justifyContent: "space-around",
                paddingTop: "10px",
                borderTop: "1px solid rgb(230, 230, 230)"
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#666",
                    padding: "8px 16px"
                }}>
                    <Video size={20} color="#378fe9" fill="#378fe9" />
                    <span>Video</span>
                </div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#666",
                    padding: "8px 16px"
                }}>
                    <Image size={20} color="#378fe9" />
                    <span>Photo</span>
                </div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#666",
                    padding: "8px 16px"
                }}>
                    <FileText size={20} color="#e16745" />
                    <span>Write article</span>
                </div>
            </div>
        </div>
    )
}