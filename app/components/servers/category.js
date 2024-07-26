import React from "react";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import SetMealIcon from "@mui/icons-material/SetMeal";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/provider/useContext";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const elements = [
  { icon: <LocalPizzaIcon key="Pizza" />, label: "Italian" },
  { icon: <LunchDiningIcon key="Burger" />, label: "American" },
  { icon: <RamenDiningIcon key="Ramen" />, label: "Thai" },
  { icon: <SetMealIcon key="setmeal" />, label: "Japanese" },
];

export default function Category() {
  const { activeFab, setActiveFab } = useGlobalContext();
  const route = useRouter();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleClick = (event) => {
    if (event === "Italian") {
      route.push("/cuisine/italian");
    } else if (event === "American") {
      route.push("/cuisine/american");
    } else if (event === "Thai") {
      route.push("/cuisine/thai");
    } else if (event === "Japanese") {
      route.push("/cuisine/japanese");
    }
    setActiveFab(event);
  };
  return (
    <Stack alignItems="center" justifyContent="center">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        gap={matches ? 10 : 5}
      >
        {elements.map((icon, index) => (
          <Box key={`${icon.label}-${index}`}>
            <Stack alignItems="center" gap={1}>
              <Fab
                onClick={() => handleClick(icon.label)}
                sx={{
                  backgroundColor:
                    activeFab === icon.label ? "#047656" : "initial",
                  color: activeFab === icon.label ? "#ffffff" : "initial",
                  "&:hover": {
                    backgroundColor:
                      activeFab === icon.label ? "#047656" : "initial",
                    color: activeFab === icon.label ? "#ffffff" : "initial",
                  },
                }}
              >
                {icon.icon}
              </Fab>
              <Typography variant="caption" display="block" gutterBottom>
                {icon.label}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
