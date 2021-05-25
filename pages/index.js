import Head from "next/head"

import React from "react"
import { useSelector } from "react-redux"

import { Box, Container, Grid } from "@material-ui/core"
import TopNavBar from "../components/TopNavBar"
import TopNavLinks from "../components/TopNavLinks"
import HeroSection from "../components/HeroSection"
import FeaturedStory from "../components/FeaturedStory"
import Testimony from "../components/Testimony"
import TheFooter from "../components/TheFooter"

import StaticTestimonies from "../src/assets/stories2.json"

export default function Home() {
  const staticTestimonies = StaticTestimonies

  const statefulTestimonies = useSelector((state) => state)

  const testimonies = (JSON_FILE) =>
    JSON_FILE.map((testimony, index) => (
      <Testimony
        key={index}
        name={testimony.name}
        story={testimony.story}
        avatar={testimony.avatar}
        category={testimony.category}
        location={testimony.location}
      />
    ))

  return (
    <div>
      <Head>
        <title>Testimonies</title>
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
            <Box py={4}>
              <Grid container spacing={4}>
                {testimonies(statefulTestimonies)}
              </Grid>
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
            <Box py={4}>
              <Grid container spacing={4}>
                {testimonies(staticTestimonies)}
              </Grid>
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
