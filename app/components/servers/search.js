import { Box, InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/provider/useContext";

export default function SearchInput() {
  const route = useRouter();
  const { setActiveFab } = useGlobalContext();
  const [search, setSearch] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    route.push("/search/" + search);
    setSearch("");
    setActiveFab(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack alignItems="center">
        <TextField
          className="search-inp"
          type="search"
          placeholder="search"
          variant="outlined"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </form>
  );
}
