import React, { useContext } from "react";
import { Grid, Card, Button, CardContent, Typography, CardActionArea, CardMedia, CardActions } from "@material-ui/core";
import { ResultContext } from "./App";
import PropTypes from "prop-types";

const MovieCard = ({ id, original_title, poster_path, overview, release_date, vote_average }) => {
	const { removeMovie } = useContext(ResultContext);

	return (
		<Card style={{ boxShadow: "3px 3px 5px 6px #ccc", height: "100%" }}>
			<CardActionArea>
				<CardMedia component="img" alt={original_title} height="400" image={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "https://critics.io/img/movies/poster-placeholder.png"} title={original_title} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="h4">
						{original_title}
					</Typography>
					<Typography variant="subtitle2" color="textSecondary" component="p" gutterBottom>
						Rating: {vote_average}
					</Typography>
					<Typography variant="subtitle2" color="textSecondary" component="p" gutterBottom>
						Release Date: {release_date}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{overview.length > 200 ? <span>{overview.substring(0, 200)} ...</span> : overview}
					</Typography>
				</CardContent>
				<hr style={{ border: 0, height: "1px", backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))", marginTop: "10px" }} />
				<CardActions>
					<Grid container direction="row" justify="space-around" alignItems="center">
						<Grid item>
							<Button size="small" color="primary" href={`https://www.themoviedb.org/movie/${id}`}>
								Learn More
							</Button>
						</Grid>
						<Grid item>
							<Button size="small" color="secondary" onClick={() => removeMovie(id)}>
								Remove
							</Button>
						</Grid>
					</Grid>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};

MovieCard.propTypes = {
	id: PropTypes.string.isRequired,
	original_title: PropTypes.string.isRequired,
	poster_path: PropTypes.string.isRequired,
	release_date: PropTypes.string.isRequired,
	vote_average: PropTypes.string.isRequired,
};

export const MovieList = () => {
	const { result } = useContext(ResultContext);

	return (
		<Grid container spacing={3} direction="row" justify="center" alignItems="stretch">
			{result.map((movie) => {
				const { overview, vote_average } = movie;
				if (overview.length > 50 && vote_average > 0) {
					return (
						<Grid item sm={6} md={4}>
							<MovieCard key={movie.id} {...movie} />
						</Grid>
					);
				} else {
					return <React.Fragment></React.Fragment>;
				}
			})}
		</Grid>
	);
};
