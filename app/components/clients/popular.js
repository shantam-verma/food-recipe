import React, { useEffect, useState } from "react";
import { GetPopular, getPopular, usePopular } from "@/app/api/useTanStackQuery";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Skeleton } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
import Link from "next/link";

export default function Popular() {
  const { data, isFetching } = usePopular();

  return (
    <>
      <Typography variant="h6" component="h1" gutterBottom marginY={2.5}>
        Popular Picks
      </Typography>
      <Splide
        options={{
          type: "loop",
          focus: "center",
          updateOnMove: true,
          perPage: 3,
          arrows: false,
          drag: true,
          gap: "1rem",
          breakpoints: {
            600: {
              perPage: 1,
            },
            806: {
              perPage: 2,
            },
            992: {
              perPage: 3,
            },
          },
        }}
      >
        {isFetching ? (
          // Display skeleton initially
          <SplideSlide>
            <Card sx={{ maxWidth: 500, mb: 6 }}>
              <CardActionArea>
                <Skeleton variant="rounded" height={250} />
                <CardContent>
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </SplideSlide>
        ) : (
          // Display actual content when data is fetched
          data?.map((recipes) => (
            <SplideSlide key={recipes.id}>
              <Link href={`/recipe/${recipes.id}`}>
                <Card sx={{ maxWidth: 500, mb: 6 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="250"
                      image={recipes?.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="subtitle2"
                        component="div"
                      >
                        {recipes?.title.length > 120
                          ? (recipes?.title).slice(0, 120) + "..."
                          : recipes?.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {(recipes?.summary).slice(0, 40) + "..."}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </SplideSlide>
          ))
        )}
      </Splide>
    </>
  );
}
