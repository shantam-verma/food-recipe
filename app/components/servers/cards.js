import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import styles from "@/styles/cards.module.css";

export default function Cards({ title, image, id }) {
  return (
    <Grid className={styles.display} item xs={12} sm={6} md={4} lg={3}>
      <Link href={`/recipe/${id}`}>
        <Card className={styles.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={styles.image}
              image={image}
              alt={title}
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}
