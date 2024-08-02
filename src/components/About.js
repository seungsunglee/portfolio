import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Unstable_Grid2"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActionArea from "@mui/material/CardActionArea"
import Stack from "@mui/material/Stack"

import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

export default function About() {
  return (
    <>
      <Typography variant="h6" paragraph>
        I am a web developer from Japan, currently staying in Sydney. I have
        over five years of experience in web development, with a particular
        expertise in frontend development using React.
        <br />
        <br />
        In the past, I built and operated a classified website from scratch
        using React and Next.js for the frontend and Python and Django for the
        backend. The website you are viewing now is also built with React and
        Next.js. The source code can be found{" "}
        <Link
          href="https://github.com/seungsunglee/portfolio/"
          target="_blank"
          rel="noopener"
        >
          here.
        </Link>
        <br />
        <br />
        While I do not have business experience in web development, I constantly
        acquire the latest knowledge and dedicate myself to coding every day.
      </Typography>

      <Grid container spacing={2} mt={3}>
        <Grid xs={6}>
          <Card>
            <CardActionArea
              component={Link}
              href="https://github.com/seungsunglee/portfolio/"
              target="_blank"
              rel="noopener"
              underline="none"
            >
              <CardContent
                sx={{
                  padding: 3,
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <GitHubIcon fontSize="large" />
                  <Typography component="div" variant="h5">
                    GitHub
                  </Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid xs={6}>
          <Card>
            <CardActionArea
              component={Link}
              href="https://www.linkedin.com/in/seung-sung-lee/"
              target="_blank"
              rel="noopener"
              underline="none"
            >
              <CardContent
                sx={{
                  padding: 3,
                }}
              >
                <Stack direction="row" spacing={2}>
                  <LinkedInIcon fontSize="large" />
                  <Typography component="div" variant="h5">
                    LinkedIn
                  </Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
