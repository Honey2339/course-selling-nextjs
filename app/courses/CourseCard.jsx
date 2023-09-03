import React from "react"
import { Button, Card, CardContent, Typography, Grid } from "@mui/material"

function CourseCard() {
  return (
    <div className="mt-20 grid grid-cols-4 ml-32">
      <Card
        className="rounded-xl"
        sx={{
          maxWidth: "300px",
          mt: "20px",
          transition: "box-shadow 0.2s ease-in-out",
          "&:hover": {
            boxShadow: "0px 20px 20px rgba(255,255,255, 0.3)",
          },
        }}
        elevation={2}
      >
        <CardContent className="p-0 bg-white flex flex-col items-center">
          <img className="max-h-60" src="../images/img1.jpg" alt="Course" />
          <Typography
            variant="h1"
            className="font-meduim mt-9 text-lg text-gray-700"
          >
            5 MERN Projects
          </Typography>
          <Typography
            variant="body1"
            className="mt-2 mb-4 text-center"
            sx={{ maxWidth: "250px" }}
          >
            These 5 projects will give you an unfair advantage
          </Typography>
          <Button
            variant="contained"
            className="text-white font-meduim bg-purple-800 hover:bg-purple-600 hover:font-semibold"
          >
            Buy Course
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default CourseCard
