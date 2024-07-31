import Grid from "@mui/material/Unstable_Grid2"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"

import Image from "next/image"

const Items = [
  {
    src: "/icons/html.png",
    title: "HTML",
  },
  {
    src: "/icons/css.png",
    title: "CSS",
  },
  {
    src: "/icons/javascript.png",
    title: "JavaScript",
  },
  {
    src: "/icons/jquery.png",
    title: "jQuery",
  },
  {
    src: "/icons/react.png",
    title: "React",
  },
  {
    src: "/icons/redux.png",
    title: "Redux",
  },
  {
    src: "/icons/nextjs.png",
    title: "Next.js",
  },
  {
    src: "/icons/mui.png",
    title: "MUI",
  },
  {
    src: "/icons/python.png",
    title: "Python",
  },
  {
    src: "/icons/django.png",
    title: "Django",
  },
  {
    src: "/icons/php.png",
    title: "PHP",
  },
  {
    src: "/icons/mysql.png",
    title: "MySQL",
  },
  {
    src: "/icons/linux.png",
    title: "Linux",
  },
  {
    src: "/icons/photoshop.png",
    title: "Photoshop",
  },
]

export default function Skills() {
  return (
    <Grid container spacing={2}>
      {Items.map((item) => (
        <Grid xs={4} sm={3} md={2} key={item.title}>
          <Card>
            <CardContent sx={{ paddingBottom: "16px!important" }}>
              <Box
                sx={{
                  position: "relative",
                  paddingTop: "66.67%",
                  marginBottom: 2,
                }}
              >
                <Image
                  src={item.src}
                  fill
                  sizes="(max-width:600px)100vw, (max-width:900px)50vw"
                  alt=""
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography component="div" fontWeight="bold" textAlign="center">
                {item.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
