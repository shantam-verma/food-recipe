"use client";
import React from "react";
import { useCuisine } from "@/app/api/useTanStackQuery";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import SkeletonCard from "@/app/components/servers/skeletonCard";
import Cards from "@/app/components/servers/cards";
import { Typography } from "@mui/material";

export default function Cuisines({ params }) {
  const { cuisineId } = params;
  const { data, isFetching, isLoading } = useCuisine(cuisineId);

  if (isLoading)
    return (
      <Typography variant="h6" className="message">
        Loading...
      </Typography>
    );

  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      paddingY={5}
    >
      {isFetching
        ? data?.map((items) => <SkeletonCard key={items.id} />)
        : data?.map((items) => (
            <Cards
              key={items.id}
              id={items.id}
              title={items.title}
              image={items.image}
            />
          ))}
    </Grid>
  );
}

Cuisines.propTypes = {
  params: PropTypes.object,
};
