import { Link, Typography } from "@material-ui/core";

export const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
        {'Copyright © '}
        <Link color="inherit">
          Suffragium
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }