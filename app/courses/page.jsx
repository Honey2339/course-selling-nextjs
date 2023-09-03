import React, { Suspense } from "react"
import CourseCard from "./CourseCard"
import Loading from "./loading"

function Courses() {
  return (
    <section className="">
      <div className="flex justify-center mt-20">
        <h1 className="text-white font-semibold underline text-2xl">
          All Courses
        </h1>
      </div>
      <Suspense fallback={<Loading />}>
        <CourseCard />
      </Suspense>
    </section>
  )
}

export default Courses
