import React, { useContext } from "react";
import { Grid, Card, Button, CardContent, Typography, CardActionArea, CardMedia, CardActions } from "@material-ui/core";
import { ResultContext } from "./App";

const MovieCard = ({ id, original_title, poster_path, overview, release_date, vote_average }) => {
	const { removeMovie } = useContext(ResultContext);
	return (
		<Grid container item sm={6} md={4} spacing={0}>
			<Card style={{ boxShadow: "3px 3px 5px 6px #ccc" }}>
				<CardActionArea>
					<CardMedia component="img" alt={original_title} height="400" image={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "https://critics.io/img/movies/poster-placeholder.png"} title={original_title} />
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{original_title}
						</Typography>
						<Typography variant="subtitle2" color="textSecondary" component="p" gutterBottom>
							Rating: {vote_average}
						</Typography>
						<Typography variant="subtitle2" color="textSecondary" component="p" gutterBottom>
							Release Date: {release_date}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{overview.substring(0, 200)}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary" href={`https://www.themoviedb.org/movie/${id}`}>
						Learn More
					</Button>
					<Button size="small" color="secondary" onClick={() => removeMovie(id)}>
						Remove
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export const MovieList = () => {
	const { result } = useContext(ResultContext);

	return (
		<Grid container spacing={3} justify="space-between" alignItems="flex-start">
			{result.map((movie) => {
				return <MovieCard key={movie.id} {...movie} />;
			})}
		</Grid>
	);
};
