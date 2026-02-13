export function Career() {
  return (
    <div
      style={{
        height: "5vh",
        border: "1px solid rgb(190, 189, 189)",
        borderRadius: "10px",
        marginTop: "10px",
        backgroundColor: "white",
        padding: "12px 16px"
      }}
    >
      <p
        style={{
          fontSize: "0.9rem",
          margin: "0 0 8px 0",
          color: "rgb(100, 100, 100)"
        }}
      >
        Achieve your career goals
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}
      >
        <div
          style={{
            height: "15px",
            width: "15px",
            background: "linear-gradient(135deg, #E7A33E 50%, #C4812B 50%)",
            borderRadius: "2px",
            flexShrink: 0
          }}
        />
        <p
          style={{
            margin: 0,
            fontSize: "0.8rem",
            fontWeight: "600",
            color: "#000",
          }}
        >
          Don't miss: Premium for ₹0
        </p>
      </div>
    </div>
  );
}