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
          <FeaturedStory
            dark
            category="Customer"
            eclipse="/img/ellipse-dark.png"
            title="Tolu & Joy’s Experience"
            photo="/img/black-beautiful-ladies-smiling.png"
            story="I had the best experience shopping with Vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!"
          />
          <FeaturedStory
            category="vendor"
            title="Josiah’s Experience"
            eclipse="/img/ellipse-light.png"
            photo="/img/woman-shoppingbag-card.png"
            story="I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!"
          />
        </section>

        <footer>
          <TheFooter />
        </footer>
      </main>
    </div>
  )
}
