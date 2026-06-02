"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import HeroLogo from "@/components/sections/hero/HeroLogo";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";

export default function LandingPage() {
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

        <div id="hero" data-section="hero">
          <HeroLogo
            logoText="P3&E Street Eats"
            description="Get ready to experience the juiciest, most creative smash burgers on wheels! Hand-smashed patties, secret sauces, and fresh ingredients for a flavor explosion."
            buttons={[
              {
                text: "View Menu",                href: "/products"
              },
              {
                text: "Find Our Truck",                href: "/contact"
              }
            ]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CJnQJYMSiA6jhejhdDXPX2Rx55/uploaded-1780370577435-0gj35pxu.png"
            imageAlt="P3&E Street Eats food truck with a delicious burger hero shot"
            showDimOverlay={true}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            logoText="P3&E Street Eats"
            columns={[]}
            ariaLabel="Site footer"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
