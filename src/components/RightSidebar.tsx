export function RightSidebar() {

   const newsItems = [
      { title: "World Cup opens to record viewership", time: "13h ago", readers: "699 readers" },
      { title: "OpenAI unveils teen AI safety plan", time: "13h ago", readers: "571 readers" },
      { title: "Where Indians love travelling", time: "7h ago", readers: "368 readers" },
      { title: "SBI overtakes TCS in market cap", time: "7h ago", readers: "343 readers" },
      { title: "AI-native startups go leaner", time: "8h ago", readers: "216 readers" }
   ];

   return (
      <div style={{
         border: "1px solid rgb(190, 189, 189)",
         borderRadius: "10px",
         marginLeft: "20px",
         marginTop: "10px",
         backgroundColor: "white",
         padding: "16px",
      }}>

         <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
         }}>
            <h4 style={{
               margin: "0",
               fontWeight: "600",
               fontSize: "1.3rem",
               color: "rgb(50, 50, 50)"
            }}>
               LinkedIn News
            </h4>

            <svg width="20" height="20" viewBox="0 0 24 24"
               fill="currentColor" style={{ cursor: "pointer" }}>
               <circle cx="12" cy="12" r="2" />
               <circle cx="12" cy="5" r="2" />
               <circle cx="12" cy="19" r="2" />
            </svg>
         </div>

         <h5 style={{
            marginTop: "6px",
            fontWeight: "500",
            fontSize: "1rem",
            color: "rgb(102, 102, 102)"
         }}>
            Top Stories
         </h5>
         <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {newsItems.map((item, index) => (
               <div key={index} style={{ cursor: "pointer" }}>
                  <div style={{
                     fontWeight: "600",
                     fontSize: "0.95rem",
                     lineHeight: "1.2"
                  }}>
                     {item.title}
                  </div>
                  <div style={{
                     fontSize: "0.8rem",
                     color: "rgb(102, 102, 102)"
                  }}>
                     {item.time} • {item.readers}
                  </div>
               </div>
            ))}
         </div>

         <div style={{
            marginTop: "24px",
            paddingTop: "24px",
            borderTop: "1px solid rgb(230, 230, 230)"
         }}>
            <h4 style={{
               margin: "0 0 12px 0",
               fontWeight: "600",
               fontSize: "1.2rem",
               color: "rgb(50, 50, 50)"
            }}>
               Today's puzzles
            </h4>

            <div style={{
               display: "flex",
               alignItems: "center",
               padding: "12px 0",
               borderBottom: "1px solid #f0f0f0",
               cursor: "pointer"
            }}>
               <div style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "#ff6b35",
                  border: "2px solid #d85a2c",
                  borderRadius: "12px",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  justifyContent: "center"
               }}>

               </div>

               <div style={{
                  flex: 1,
                  marginLeft: "12px"
               }}>
                  <div style={{ fontWeight: "600", fontSize: "1rem", color: "#000" }}>Zip #333</div>
                  <div style={{ fontSize: "0.85rem", color: "#666" }}>9 connections played</div>
               </div>
            </div>

            <div style={{
               display: "flex",
               alignItems: "center",
               padding: "12px 0",
               borderBottom: "1px solid #f0f0f0",
               cursor: "pointer"
            }}>
               <div style={{
                  width: "25px",
                  height: "25px",
                  border: "2px solid #00a67e",
                  backgroundColor: "#00a67e",
                  borderRadius: "12px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gridTemplateRows: "1fr 1fr",
                  gap: "2px",
                  padding: "6px"
               }}>
               </div>
               <div style={{ flex: 1, marginLeft: "12px" }}>
                  <div style={{ fontWeight: "600", fontSize: "1rem", color: "#000" }}>Mini Sudoku #186</div>
                  <div style={{ fontSize: "0.85rem", color: "#666" }}>3 connections played</div>
               </div>
            </div>

            <div style={{
               display: "flex",
               alignItems: "center",
               padding: "12px 0",
               borderBottom: "1px solid #f0f0f0",
               cursor: "pointer"
            }}>
               <div style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#5b9bd5",
                  border: "2px solid #ccc",
                  borderRadius: "12px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gridTemplateRows: "1fr 1fr",
                  gap: "2px",
                  padding: "4px"
               }}>
               </div>
               <div style={{ flex: 1, marginLeft: "12px" }}>
                  <div style={{ fontWeight: "600", fontSize: "1rem", color: "#000" }}>Tango #494</div>
                  <div style={{ fontSize: "0.85rem", color: "#666" }}>3 connections played</div>
               </div>
            </div>

            <div style={{
               display: "flex",
               alignItems: "center",
               padding: "12px 0",
               cursor: "pointer"
            }}>
               <div style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#b4a7d6",
                  border: "2px solid #ccc",
                  borderRadius: "12px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gridTemplateRows: "1fr 1fr 1fr",
                  gap: "1px",
                  padding: "4px"
               }}>
               </div>
               <div style={{ flex: 1, marginLeft: "12px" }}>
                  <div style={{ fontWeight: "600", fontSize: "1rem", color: "#000" }}>Queens #654</div>
                  <div style={{ fontSize: "0.85rem", color: "#666" }}>3 connections played</div>
               </div>
               <div style={{ color: "#999", fontSize: "20px" }}>›</div>
            </div>
         </div>
      </div>
   )
}