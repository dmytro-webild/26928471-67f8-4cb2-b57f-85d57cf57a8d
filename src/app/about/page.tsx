"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import MediaAbout from "@/components/sections/about/MediaAbout";

export default function AboutPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="mediumSizeLargeTitles"
      background="noise"
      cardStyle="solid"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Home", href: "/" },
              { name: "Menu", href: "/products" },
              { name: "About Us", href: "/about" },
              { name: "Find Our Truck", href: "/contact" }
            ]}
            logoSrc="http://img.b2bpic.net/free-photo/realistic-burger-packaging-mockup_58466-18336.jpg"
            logoAlt="P3&E Street Eats Logo"
            brandName="P3&E Street Eats"
            button={{
              text: "Find Us",              href: "/contact"
            }}
          />
        </div>

        <div id="about" data-section="about">
          <MediaAbout
            useInvertedBackground={false}
            title="Our Smash-tastic Story"
            description="Born from a passion for perfect patties and a love for local communities, P3&E Street Eats is more than just a food truck – it's a flavor revolution! We believe in fresh, quality ingredients and the simple joy of a perfectly seared, juicy burger. Join us on our journey to smash blandness and bring smiles!"
            tag="About Us"
            imageSrc="http://img.b2bpic.net/free-photo/grilled-salami-slices-grill-grid-wooden-table-with-vegetable_114579-88655.jpg"
            imageAlt="Chef preparing smash burgers on a griddle"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
