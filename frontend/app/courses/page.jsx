"use client"
import React, { useEffect } from "react"
import CourseCard from "./CourseCard"
import Loading from "./loading"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"

function Courses() {
  const router = useRouter()

  useEffect(() => {
    const user = Cookies.get("username")
    const token = Cookies.get("token")
    if (user && token) {
      console.log("Found")
    } else {
      router.push("/login")
    }
  }, [])

  return (
    <section className="">
      <div className="flex justify-center mt-20">
        <h1 className="text-white font-semibold underline text-2xl">
          All Courses
        </h1>
      </div>
      <CourseCard />
    </section>
  )
}

export default Courses
