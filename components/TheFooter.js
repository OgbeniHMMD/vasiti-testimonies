import React from "react"

import Box from "@material-ui/core/Box"
import {
  Button,
  Container,
  IconButton,
  InputBase,
  Link,
  Paper,
} from "@material-ui/core"

import { Facebook, LinkedIn, Twitter, Instagram } from "@material-ui/icons"

export default function TheFooter() {
  const LINKS = [
    {
      id: 1,
      title: "Company",
      links: [
        { title: "About Us", slug: "https://vasiti.com/about" },
        { title: "Term of Use", slug: "https://vasiti.com/terms" },
        { title: "Privacy Policy", slug: "https://vasiti.com/privacy-policy" },
        { title: "Press & Media", slug: "#/press" },
      ],
    },
    {
      id: 2,
      title: "Products",
      links: [
        { title: "Marketplace", slug: "https://vasiti.com/marketplace" },
        { title: "Magazine", slug: "https://magazine.vasiti.com/" },
        { title: "Seller", slug: "https://www.seller.vasiti.com/" },
        { title: "Wholesale", slug: "https://wholesale.vasiti.com/" },
        {
          title: "Services",
          slug: "https://vasiti.com/category/creative_services",
        },
      ],
    },
    {
      id: 3,
      title: "Career",
      links: [
        {
          title: "Become a Campus Rep",
          slug: "https://vasiti.com/campus-reps",
        },
        {
          title: "Become a Vasiti Influencer",
          slug: "https://magazine.vasiti.com/reporter",
        },
        {
          title: "Become a Campus writer",
          slug: "https://magazine.vasiti.com/",
        },
        { title: "Become an Affiliate", slug: "https://seller.vasiti.com/" },
      ],
    },
    {
      id: 4,
      title: "Get in touch",
      links: [
        { title: "Contact us", slug: "https://vasiti.com/contact" },
        { title: "Partner with us", slug: "#" },
        { title: "Advertise with us", slug: "#" },
        { title: "Help/FAQs", slug: "#" },
      ],
    },
  ]

  const linksList = (LINKS_ARRAY) =>
    LINKS_ARRAY.map((link) => (
      <a href={link.slug} key={link.id} style={{ textDecoration: "none" }}>
        <Box py={1} color="white">
          {link.title}
        </Box>
      </a>
    ))

  return (
    <Box mt={4} width={1} bgcolor="grey.900">
      <Container>
        <Box
          width={1}
          display={{ xs: "block", md: "flex" }}
          alignItems="center"
          justifyContent={{ sm: "center", md: "between" }}>
          <Box mt={-6} width={{ sm: "1", md: "1 / 2" }}>
            <img
              src="/img/subscribe-banner.png"
              style={{ maxWidth: "100%", margin: "auto 0" }}
            />
          </Box>
          <Box p={{ xs: 4, md: 8 }} width={{ sm: "1", md: "1 / 2" }}>
            <Box
              pt={2}
              fontSize="h4.fontSize"
              fontWeight="fontWeightBold"
              color="white">
              Be a member
              <br />
              of our community 🎉
            </Box>

            <Box py={2} color="grey.200">
              We’d make sure you’re always first to know what’s happening on
              Vasiti—thus, the world.
            </Box>

            <Box
              p={0.5}
              my={2}
              width={1}
              borderRadius={4}
              bgcolor="grey.600"
              display="flex"
              justifyContent="between">
              <Box flexGrow={1} px={2}>
                <InputBase
                  width={1}
                  style={{ color: "white" }}
                  placeholder="enter your email address"
                  inputProps={{ "aria-label": "enter your email address" }}
                />
              </Box>

              <Box flexShrink={1}>
                <Button
                  type="submit"
                  aria-label="search"
                  variant="contained"
                  color="secondary"
                  disableElevation
                  style={{ fontWeight: "bold" }}>
                  SUBSCRIBE
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          py={8}
          width={1}
          color="white"
          display={{ xs: "block", md: "flex" }}
          justifyContent="between"
          justifyContent={{ sm: "center", md: "between" }}>
          {LINKS.map((parent) => (
            <Box pt={2} width={{ sm: "1", md: "1 / 5" }}>
              <Box py={2} fontWeight="fontWeightBold">
                {parent.title}
              </Box>
              {linksList(parent.links)}
            </Box>
          ))}

          <Box pt={2} width={{ sm: "1", md: "1 / 5" }}>
            <Box py={2} fontWeight="fontWeightBold">
              Join our community
            </Box>
            <Box>
              <IconButton
                color="secondary"
                href="https://www.facebook.com/VasitiMarketplace/">
                <Facebook />
              </IconButton>
              <IconButton
                color="secondary"
                href="https://www.instagram.com/vasitidotcom/?hl=en">
                <Instagram />
              </IconButton>
              <IconButton
                color="secondary"
                href="https://twitter.com/vasitidotcom">
                <Twitter />
              </IconButton>
              <IconButton
                color="secondary"
                href="https://www.linkedin.com/company/vasiti.com">
                <LinkedIn />
              </IconButton>
            </Box>
            <Box py={3}>Email Newsletter</Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
