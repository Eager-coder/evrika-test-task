import React from "react"

const Carousel = () => {
	return (
		<div className="relative">
			<img src="/hero.png" alt="" />
			<div className="absolute flex items-center space-x-4 bottom-6 left-1/2 -translate-x-1/2">
				<ArrowLeftIcon />
				<span className="text-white">1</span>
				<div className="flex">
					<div className="h-0.5 w-4 rounded-lg bg-white"></div>
					<div className="h-0.5 w-5 rounded-lg bg-orange-500"></div>
				</div>
				<span className="text-white">5</span>
				<ArrowRightIcon />
			</div>
		</div>
	)
}

const ArrowLeftIcon = () => (
	<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle r="13" transform="matrix(-1 0 0 1 13 13)" fill="white" />
		<circle r="12.5" transform="matrix(-1 0 0 1 13 13)" stroke="white" strokeOpacity="0.2" />
		<path
			d="M9.46967 13.5303C9.17678 13.2374 9.17678 12.7626 9.46967 12.4697L14.2426 7.6967C14.5355 7.40381 15.0104 7.40381 15.3033 7.6967C15.5962 7.98959 15.5962 8.46447 15.3033 8.75736L11.0607 13L15.3033 17.2426C15.5962 17.5355 15.5962 18.0104 15.3033 18.3033C15.0104 18.5962 14.5355 18.5962 14.2426 18.3033L9.46967 13.5303ZM11 13.75H10V12.25H11V13.75Z"
			fill="#FB791B"
		/>
	</svg>
)
const ArrowRightIcon = () => (
	<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="13" cy="13" r="13" fill="white" />
		<circle cx="13" cy="13" r="12.5" stroke="white" strokeOpacity="0.2" />
		<path
			d="M16.5303 13.5303C16.8232 13.2374 16.8232 12.7626 16.5303 12.4697L11.7574 7.6967C11.4645 7.40381 10.9896 7.40381 10.6967 7.6967C10.4038 7.98959 10.4038 8.46447 10.6967 8.75736L14.9393 13L10.6967 17.2426C10.4038 17.5355 10.4038 18.0104 10.6967 18.3033C10.9896 18.5962 11.4645 18.5962 11.7574 18.3033L16.5303 13.5303ZM15 13.75H16V12.25H15V13.75Z"
			fill="#FB791B"
		/>
	</svg>
)
export default Carousel
