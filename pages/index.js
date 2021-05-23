import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

import TopNavBar from "../components/TopNavBar"
import TopNavLinks from "../components/TopNavLinks"
import HeroSection from "../components/HeroSection"
import FeaturedStory from "../components/FeaturedStory"
import TheFooter from "../components/TheFooter"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Vasiti.com is Nigeria's largest platform for students. Vasiti uses technology and social innovation to help student entrepreneurs build successful businesses, empower students and also make their lives easier by giving them quick and easy access to all they need around campus including goods, services and relevant information."
        />
      </Head>

      <main>
        <header>
          <TopNavBar />
          <TopNavLinks />
        </header>

        <section>
          <HeroSection />
          <FeaturedStory />
        </section>
        <br />
        <br />
        <br />
        <footer>
          <TheFooter />
        </footer>
      </main>
    </div>
  )
}
