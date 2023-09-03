import { Card, CardContent } from "@mui/material"
import Link from "next/link"
import React from "react"

function Navbar() {
  return (
    <Card elevation={2} className="bg-gray-800">
      <CardContent className="p-3 ">
        <header class="body-font mt-2 text-white ">
          <div class="container gap-9 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span class="learnify ml-3 text-purple-400 font-bold text-3xl">
                Learnify
              </span>
            </a>
            <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 font-semibold	flex flex-wrap items-center text-base justify-center cursor-pointer">
              <a href="/" class="mr-5 hover:text-purple-500">
                Home
              </a>
              <a href="/courses" class="mr-5 hover:text-purple-500">
                Courses
              </a>
              <a class="mr-5 hover:text-purple-500"></a>
              <a class="mr-5 hover:text-purple-500"></a>
            </nav>
            <button class="inline-flex items-center bg-purple-500 border-0 py-2 px-3 focus:outline-none transition duration-200 hover:bg-white hover:text-black rounded text-base font-semibold mt-4 md:mt-0">
              Login
            </button>
          </div>
        </header>
      </CardContent>
    </Card>
  )
}

export default Navbar
