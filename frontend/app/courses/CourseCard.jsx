"use client"
import Script from "next/script"
import { useEffect, useState } from "react"
import { Button, Card, CardContent, Typography, Grid } from "@mui/material"
import Loading from "./loading"
import axios from "axios"
function CourseCard() {
  const [showCard, setShowCard] = useState(false)
  const [allCourses, setAllCourses] = useState([])

  useEffect(() => {
    const getAllCourses = async () => {
      await axios
        .get("http://localhost:5000/allcourses")
        .then((res) => {
          setAllCourses(res.data)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getAllCourses()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="mt-20 grid grid-cols-4 ml-32">
      {allCourses &&
        allCourses.map((course) => (
          <div>
            {showCard ? (
              <>
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
                    <img className="max-h-60" src={course.url} alt="Course" />
                    <Typography
                      variant="h1"
                      className="font-meduim mt-9 text-lg text-gray-700"
                    >
                      {course.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      className="mt-2 mb-4 text-center"
                      sx={{ maxWidth: "250px" }}
                    >
                      {course.description}
                    </Typography>
                    <Button
                      variant="contained"
                      className="text-white font-meduim bg-purple-800 hover:bg-purple-600 hover:font-semibold"
                    >
                      Buy Course
                    </Button>
                  </CardContent>
                </Card>
              </>
            ) : (
              <div className="flex justify-center mt-40 text-white">
                <Loading />
              </div>
            )}
          </div>
        ))}
    </div>
  )
}

export default CourseCard
