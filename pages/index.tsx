import type { NextPage } from "next"
import About from "../components/About"
import Companies from "../components/Companies"
import FeaturedProducts from "../components/FeaturedProducts"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<Hero />
			<FeaturedProducts />
			<Companies />
			<About />
			<Footer />
		</>
	)
}

export default Home
