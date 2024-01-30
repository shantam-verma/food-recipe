"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import SkeletonCard from "@/app/components/servers/skeletonCard";
import Cards from "@/app/components/servers/cards";
import { useSearch } from "@/app/api/useTanStackQuery";

export default function Searched({ params }) {
  const { searchId } = params;

  const { data, isFetching, isLoading } = useSearch(searchId);

  if (isLoading)
    return (
      <Typography variant="h6" className="message">
        Loading...
      </Typography>
    );

  if (data?.length === 0 && isFetching === false && isFetching === false)
    return <Typography className="message">No Data Found</Typography>;

  return (
    <>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        paddingY={5}
      >
        {isFetching || data === undefined
          ? data?.map((items) => <SkeletonCard key={items.id} />)
          : data?.map((items) => (
              <Cards key={items.id} title={items.title} image={items.image} />
            ))}
      </Grid>
    </>
  );
}
Searched.propTypes = {
  params: PropTypes.object,
};
