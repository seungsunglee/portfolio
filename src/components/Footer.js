import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

export default function Footer() {
  return (
    <Box sx={{ pt: 15, pb: 3 }}>
      <Container maxWidth="md">
        <Typography textAlign="center">
          © 2024 Seung Sung Lee. All rights reserved
        </Typography>
      </Container>
    </Box>
  )
}
