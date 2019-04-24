const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
      .spacing.unit * 5}px ${theme.spacing.unit * 5}px`
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto"
  }
});

export default styles;
