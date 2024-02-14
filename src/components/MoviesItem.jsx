import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";

const MoviesItem = ({ img, title, rate, release }) => {
  return (
    <Card variant="outlined" sx={{ width: 350, height: 475 }}>
      <CardOverflow>
        <AspectRatio ratio="1">
          <img
            src={`https://image.tmdb.org/t/p/w500${img}`}
            srcSet={`https://image.tmdb.org/t/p/w500${img}`}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent className="flex justify-center items-center">
        <Typography level="h3">{title}</Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography
            level="body-xs"
            fontWeight="md"
            textColor="text.secondary"
          >
            Rate: {rate.toFixed(1)}
          </Typography>
          <Divider orientation="vertical" />
          <Typography
            level="body-xs"
            fontWeight="md"
            textColor="text.secondary"
          >
            Release Date: {release}
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
};

export default MoviesItem;
