"use client"

import React, { useEffect } from "react"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"

function MyCourses() {
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
  return <div>MyCourses</div>
}

export default MyCourses
