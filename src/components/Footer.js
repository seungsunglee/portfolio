import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"

import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

export default function Footer() {
  return (
    <Container
      maxWidth={"md"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: { xs: 8, sm: 10 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography variant="body2" color="text.secondary" mt={1}>
          {"Copyright © "}
          <Link href="/">Seung Sung Lee&nbsp;</Link>
          {new Date().getFullYear()}
        </Typography>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/seungsunglee/portfolio/"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/seung-sung-lee/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  )
}
