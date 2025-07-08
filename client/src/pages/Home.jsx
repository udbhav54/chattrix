// import React from "react";
// import AppLayout from "../components/layout/AppLayout";
// import { Box, Typography } from "@mui/material";
// import { homeBgColor } from "../constants/color";

// const Home = () => {
//   return (
//     <Box bgcolor={homeBgColor} height={"100%"}>
//       <Typography p={"2rem"} variant="h5" textAlign={"center"}>
//         Select a friend to chat
//       </Typography>
//     </Box>
//   );
// };

// // ✅ Correct usage of HOC
// export default AppLayout(Home);

// src/pages/Home.jsx
import { Box, Typography } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";
import { homeBgColor } from "../constants/color";

const HomeBase = () => (
  <Box bgcolor={homeBgColor} height="100%">
    <Typography p="2rem" variant="h5" textAlign="center">
      Select a friend to chat
    </Typography>
  </Box>
);

// wrap and **name** the new component
const Home = AppLayout(HomeBase);
Home.displayName = "Home";

export default Home;
