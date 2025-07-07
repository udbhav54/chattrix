import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom"

export const VisuallyHiddenInput =
  styled("input")({
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
  });

  export const Link = styled(LinkComponent)`
    text-decoration: none;
    color: black;
    padding: 1rem;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  `;


