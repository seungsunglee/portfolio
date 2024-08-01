"use client"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Image from "next/image"
import Link from "@mui/material/Link"

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: { xs: 5, md: 10 },
      }}
    >
      <Stack spacing={3} sx={{ width: "100%", marginBottom: 4 }}>
        <Typography component="h1" variant="h3" fontWeight="bold">
          {`Hi,`}
          <br />
          {`My Name is`}
          <br />
          <Typography
            component="span"
            variant="h3"
            fontWeight="bold"
            sx={{
              background: "#AB5DFF",
              background: "linear-gradient(to right, #AB5DFF 0%, #1B7DB1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >{`Seung Sung Lee`}</Typography>
          <br />
          {`I'm a Web Developer`}
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: 260,
            width: 260,
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Image
            src="/herome.jpg"
            fill
            alt=""
            sizes="(max-width:600px)100vw, (max-width:900px)50vw"
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Box>
  )
}
