export function RightSidebar() {

   const newsItems = [
      { title: "World Cup opens to record viewership", time: "13h ago", readers: "699 readers" },
      { title: "OpenAI unveils teen AI safety plan", time: "13h ago", readers: "571 readers" },
      { title: "Where Indians love travelling", time: "7h ago", readers: "368 readers" },
      { title: "SBI overtakes TCS in market cap", time: "7h ago", readers: "343 readers" },
      { title: "AI-native startups go leaner", time: "8h ago", readers: "216 readers" }
   ]

   // return <div style={{
   //    height: "60vh",
   //    border: "1px solid rgb(190, 189, 189)",
   //    borderRadius: "10px",
   //    marginLeft: "20px",
   //    marginTop: "10px",
   //    backgroundColor: "white",
   //    fontSize: "1.3rem",
   //    paddingLeft: "10px",
   //    paddingTop: "14px"
   // }}>
   //    <h4 style={{
   //       marginTop: "0", fontWeight: "500"
   //    }}>LinkedIn News</h4>
   // </div>


   return (
      <div style={{
         height: "60vh",
         border: "1px solid rgb(190, 189, 189)",
         borderRadius: "10px",
         marginLeft: "20px",
         marginTop: "10px",
         backgroundColor: "white",
         padding: "16px"
      }}>
         <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px"
         }}>
            <h4 style={{ margin: "0", fontWeight: "600", fontSize: "1.3rem" }}>
               LinkedIn News
            </h4>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ cursor: "pointer" }}>
               <circle cx="12" cy="12" r="2" />
               <circle cx="12" cy="5" r="2" />
               <circle cx="12" cy="19" r="2" />
            </svg>
         </div>


         <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
         }}>
            <h4 style={{
               margin: "0",
               fontWeight: "600",
               fontSize: "1.3rem"
            }}>
               LinkedIn News
            </h4>
         </div>
      </div>
   )
}