import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material"; // ← v7 idiomatic import
import ChatList from "../specific/ChatList";

// HOC: wraps any page component with the common shell
const AppLayout = (WrappedComponent) => {
  const ComponentWithLayout = (props) => (
    <>
      <Title />
      <Header />

      <Grid container sx={{ height: "calc(100vh - 4rem)" }}>
        {/* LEFT SIDEBAR */}
        <Grid
          size={{ sm: 4, md: 3 }} // replaces item  sm={4} md={3}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <ChatList chats={[1,2,3,4]} />
        </Grid>

        {/* MAIN */}
        <Grid size={{ xs: 12, sm: 8, md: 5, lg: 6 }}>
          <WrappedComponent {...props} />
        </Grid>

        {/* RIGHT SIDEBAR */}
        <Grid
          size={{ md: 4, lg: 3 }}
          sx={{
            display: { xs: "none", md: "block" },
            p: 2,
            bgcolor: "rgba(0,0,0,0.85)",
          }}
        />
      </Grid>
    </>
  );

  // nice‑to‑have for DevTools
  ComponentWithLayout.displayName = `AppLayout(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;
  return ComponentWithLayout;
};

export default AppLayout;
