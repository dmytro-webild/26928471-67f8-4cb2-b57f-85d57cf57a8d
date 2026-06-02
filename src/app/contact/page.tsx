"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import ContactCenter from "@/components/sections/contact/ContactCenter";

export default function ContactPage() {
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

        <div id="contact" data-section="contact">
          <ContactCenter
            useInvertedBackground={true}
            background={{
              variant: "plain"
            }}
            tag="Get Smashed!"
            title="Ready for the Ultimate Burger?"
            description="Follow us on social media for our weekly locations, special events, and menu updates! Catering options available too."
            inputPlaceholder="Enter your email"
            buttonText="Order Now!"
            termsText="By ordering you agree to our yummy terms."
            onSubmit={() => alert("Order submitted!")}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
