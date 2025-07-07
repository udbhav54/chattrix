import { Grid } from "@mui/material";
import Header from "./Header";
import Title from "../shared/Title";
import ChatList from "../specific/ChatList";
import { samepleChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom"; // 👈 add this
import Profile from "../specific/Profile";

const AppLayout = (WrappedComponent) => {
  const ComponentWithLayout = (props) => {
    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("Delete chat", _id, groupChat);
    };

    return (
      <>
        <Title />
        <Header />

        <Grid container sx={{ height: "calc(100vh - 4rem)" }}>
          {/* LEFT SIDEBAR */}
          <Grid
            size={{ sm: 4, md: 3 }}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <ChatList
              chats={samepleChats}
              chatId={chatId} // ← now dynamic
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>

          {/* MAIN */}
          <Grid size={{ xs: 12, sm: 8, md: 5, lg: 6 }}>
            <WrappedComponent {...props} chatId={chatId} />
          </Grid>

          {/* RIGHT SIDEBAR */}
          <Grid
            size={{ md: 4, lg: 3 }}
            sx={{
              display: { xs: "none", md: "block" },
              p: 2,
              bgcolor: "rgba(0,0,0,0.85)",
            }}
          >
            <Profile />
          </Grid>
        </Grid>
      </>
    );
  };

  ComponentWithLayout.displayName = `AppLayout(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;
  return ComponentWithLayout;
};

export default AppLayout;
