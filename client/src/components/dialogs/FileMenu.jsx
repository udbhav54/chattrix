import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchorEl }) => {
  return (
    <Menu anchorE1={anchorEl} open={false}>
      <div
        style={{
          width: "10rem",
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        reprehenderit consequatur voluptates fugit voluptate, cum explicabo
        consequuntur aliquid illum commodi?
      </div>
    </Menu>
  );
};

export default FileMenu;
