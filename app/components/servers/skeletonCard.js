import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import CardActionArea from "@mui/material/CardActionArea";
import styles from "@/styles/cards.module.css";

export default function SkeletonCard() {
  return (
    <Grid item className={styles.display} xs={12} sm={6} md={4} lg={3}>
      <Card className={styles.skeleton_card}>
        <CardActionArea>
          <Skeleton variant="rounded" width={345} height={140} />
          <CardContent>
            <Skeleton variant="rounded" width="60%" />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
