import Head from "next/head"
import styles from "../styles/Home.module.css"

import TopNavBar from "../components/TopNavBar"
import TopNavLinks from "../components/TopNavLinks"
import HeroSection from "../components/HeroSection"
import FeaturedStory from "../components/FeaturedStory"
import Testimony from "../components/Testimony"
import TheFooter from "../components/TheFooter"

import { Box, Container, Typography } from "@material-ui/core"

export default function Home() {
  const Testimonies = [
    {
      id: 1,
      name: "Joseph Ike",
      category: "CUSTOMER",
      location: "in Ikeja",
      avatar: "/img/avatar-joseph.png",
      story:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    },
    {
      id: 2,
      name: "Joseph Ike",
      category: "CUSTOMER",
      location: "in Ikeja",
      avatar: "/img/avatar-joseph.png",
      story:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    },
    {
      id: 3,
      name: "Joseph Ike",
      category: "VENDOR",
      location: "in Ikeja",
      avatar: "/img/avatar-joseph.png",
      story:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    },
  ]

  const testimonies = Testimonies.map((testimony) => (
    <Testimony
      key={testimony.id}
      name={testimony.name}
      category={testimony.category}
      location={testimony.location}
      story={testimony.story}
    />
  ))

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

          <Container>
            <Box display="flex" justifyContent="between">
              {testimonies}
            </Box>
          </Container>

          <FeaturedStory
            category="vendor"
            title="Josiah’s Experience"
            eclipse="/img/ellipse-light.png"
            photo="/img/woman-shoppingbag-card.png"
            story="I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!"
          />

          <Container>
            <Box display="flex" justifyContent="between">
              {testimonies}
            </Box>
          </Container>
        </section>

        <footer>
          <TheFooter />
        </footer>
      </main>
    </div>
  )
}
