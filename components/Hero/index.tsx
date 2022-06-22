import React from "react"
import Carousel from "./Carousel"
import Sidebar from "./Sidebar"

const Hero = () => {
	return (
		<div className="max-w-screen-2xl mx-auto pt-6 px-4 2xl:px-0 flex space-x-8">
			<Sidebar />
			<Carousel />
		</div>
	)
}

export default Hero
