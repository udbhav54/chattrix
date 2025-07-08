import { IconButton, Skeleton, Stack } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";
import React, { Fragment, useRef } from "react";
import { homeBgColor, primary } from "../constants/color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import FileMenu from "../components/dialogs/FileMenu";
import { InputBox } from "../components/styles/StyledComponents";
import { sampleMessage } from "../constants/sampleData";
import MessageComponent from "../components/shared/MessageComponent";

const user = {
  _id: "sadcscs",
  name: "Udbhav"
}

const Chat = () => {
  const containerRef = useRef(null);
  return (
    <>
      <Fragment>
        <Stack
          ref={containerRef}
          boxSizing={"border-box"}
          padding={"1rem"}
          spacing={"1rem"}
          bgcolor={homeBgColor}
          height={"90%"}
          sx={{
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          {/* Message Render */}
          {
            sampleMessage.map(i => (
              <MessageComponent key={i._id} message={i} user={user} />
            ))
          }
        </Stack>

        <form
          style={{
            height: "10%",
          }}
        >
          <Stack
            direction={"row"}
            height={"100%"}
            padding={"1rem"}
            alignItems={"center"}
            position={"relative"}
          >
            <IconButton
              sx={{
                position: "absolute",
                left: "1.5rem",
                rotate: "30deg",
              }}
              
            >
              <AttachFileIcon />
            </IconButton>

            <InputBox placeholder="Type Message Here..." />

            <IconButton
              type="submit"
              sx={{
                rotate: "-30deg",
                bgcolor: primary,
                color: "white",
                marginLeft: "1rem",
                padding: "0.5rem",
                "&:hover": {
                  bgcolor: "error.dark",
                },
              }}
            >
              <SendIcon />
            </IconButton>
          </Stack>
        </form>
        <FileMenu />
      </Fragment>
    </>
  );
};

const WrappedChat = AppLayout(Chat);
export default WrappedChat;
