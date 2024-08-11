import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Unstable_Grid2"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActionArea from "@mui/material/CardActionArea"
import Stack from "@mui/material/Stack"

import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

const items = [
  {
    href: "https://github.com/seungsunglee/",
    icon: <GitHubIcon fontSize="large" />,
    title: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/seung-sung-lee/",
    icon: <LinkedInIcon fontSize="large" />,
    title: "LinkedIn",
  },
]

export default function About() {
  return (
    <>
      <Typography variant="h6" fontWeight={400} paragraph>
        I have over five years of experience in web development, with a
        particular expertise in full stack development using React and Python. I
        constantly acquire the latest knowledge and dedicate myself to coding
        every day.
      </Typography>

      <Grid container spacing={2} mt={3}>
        {items.map((item) => (
          <Grid key={item.title} xs={6}>
            <Card>
              <CardActionArea
                component={Link}
                href={item.href}
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
                    {item.icon}
                    <Typography component="div" variant="h5">
                      {item.title}
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
