import React from "react";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useInputValidation } from "6pp";
import UserItem from "../shared/UserItem";
import { useState } from "react";
import { sampleUsers } from "../../constants/sampleData";


const Search = () => {
  const search = useInputValidation("");
  const addFriendHandler = (id) => {
    console.log(id);
  }
 let isLoadingSendFriendRequest = false;
 const [users, setUsers] = useState(sampleUsers)

  return (
    <Dialog open>
      <Stack p="2rem" spacing={2} width="25rem">
        <DialogTitle textAlign="center">Find People</DialogTitle>

        <TextField
          label="Search users"
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          /* 👇 new way – replaces deprecated InputProps */
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />

        <List>
          {users.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
