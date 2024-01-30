"use client";
import React, { useState } from "react";
import { useSearch } from "@/app/api/useTanStackQuery";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import ButtonControl from "@/app/components/servers/buttons";
import { useTheme } from "@mui/material";

export default function Recipe({ params }) {
  const { recipeId } = params;
  const [activeTab, setActiveTab] = useState(false);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const { data, isFetching, isLoading } = useSearch(recipeId);
  console.log(data);

  if (isLoading)
    return (
      <Typography variant="h6" className="message">
        Loading...
      </Typography>
    );

  if (data.length === 0) {
    return (
      <Typography className="message">
        Something went wrong. Try again in a few minutes
      </Typography>
    );
  }
  return (
    <Box marginTop={5}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Stack alignItems="center">
            <Typography width={500} variant="h6" component="h1" gutterBottom>
              {isFetching ? (
                <Skeleton animation="wave" height={40} width={400} />
              ) : (
                data?.title
              )}
            </Typography>
            {isFetching ? (
              <Skeleton
                animation="wave"
                variant="rect"
                height={200}
                width={500}
                style={{ borderRadius: "8px" }}
              />
            ) : (
              <Image
                src={data?.image}
                alt={`${data?.title}-image`}
                width={500}
                height={200}
                style={{ borderRadius: "8px" }}
              />
            )}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          display="flex"
          flexDirection="column"
          alignItems={isMatch && "center"}
        >
          <Stack direction="row" gap={3}>
            <ButtonControl
              btnType={!activeTab ? "contained" : "outlined"}
              text="Instructions"
              onClick={() => setActiveTab(false)}
            />
            <ButtonControl
              btnType={activeTab ? "contained" : "outlined"}
              text="Ingredients"
              onClick={() => setActiveTab(true)}
            />
          </Stack>
          <Box marginTop={2} paddingBottom={5}>
            {isFetching ? (
              <>
                <Skeleton animation="wave" height={20} width={600} />
                <Skeleton animation="wave" height={20} width={600} />
              </>
            ) : !activeTab ? (
              <>
                <Typography
                  dangerouslySetInnerHTML={{ __html: data?.summary }}
                  maxWidth={600}
                ></Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html: data?.instructions,
                  }}
                  marginTop={2}
                  maxWidth={600}
                ></Typography>
              </>
            ) : (
              <ul>
                {data?.extendedIngredients?.map((ingredient) => (
                  <li key={ingredient?.id}>{ingredient?.original}</li>
                ))}
              </ul>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

Recipe.propTypes = {
  params: PropTypes.object,
};
