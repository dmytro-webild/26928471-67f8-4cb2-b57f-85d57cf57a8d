"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';

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
        {
          name: "Home",          id: "#hero"},
        {
          name: "Our Story",          id: "#about"},
        {
          name: "Menu",          id: "#products"},
        {
          name: "Order Now",          id: "#contact"},
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/realistic-burger-packaging-mockup_58466-18336.jpg"
      logoAlt="P3&E Street Eats Logo"
      brandName="P3&E Street Eats"
      button={{
        text: "Find Us"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="P3&E Street Eats"
      description="Get ready to experience the juiciest, most creative smash burgers on wheels! Hand-smashed patties, secret sauces, and fresh ingredients for a flavor explosion."
      buttons={[
        {
          text: "View Menu",          href: "#products"},
        {
          text: "Find Our Truck",          href: "#contact"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CJnQJYMSiA6jhejhdDXPX2Rx55/uploaded-1780370577435-0gj35pxu.png"
      imageAlt="P3&E Street Eats food truck with a delicious burger hero shot"
      showDimOverlay={true}
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


  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "The Classic Smash",          price: "$12.00",          variant: "Single/Double Patty",          imageSrc: "http://img.b2bpic.net/free-photo/hands-holding-tasty-cheeseburger_23-2148374911.jpg",          imageAlt: "A classic smash burger with cheese, lettuce, and tomato"},
        {
          id: "p2",          name: "Spicy Jalapeño Smash",          price: "$13.50",          variant: "With Pepper Jack Cheese",          imageSrc: "http://img.b2bpic.net/free-photo/creative-arrangement-with-hamburger_23-2148614114.jpg",          imageAlt: "A spicy smash burger with jalapeños and melted cheese"},
        {
          id: "p3",          name: "BBQ Bacon Beast",          price: "$14.00",          variant: "Smoky BBQ & Crispy Bacon",          imageSrc: "http://img.b2bpic.net/free-photo/grilled-gourmet-cheeseburger-with-fresh-vegetables-fries-generated-by-ai_188544-38732.jpg",          imageAlt: "A large BBQ bacon smash burger with onion rings"},
        {
          id: "p4",          name: "Mushroom Swiss Delight",          price: "$13.00",          variant: "Sautéed Mushrooms & Swiss",          imageSrc: "http://img.b2bpic.net/free-photo/street-food-still-life_23-2151535236.jpg",          imageAlt: "A smash burger topped with sautéed mushrooms and Swiss cheese"},
        {
          id: "p5",          name: "The Garden Smash",          price: "$11.00",          variant: "Plant-Based Patty",          imageSrc: "http://img.b2bpic.net/free-photo/hamburger-chopping-board-with-spinach-tomatoes-avocado-wooden-board_23-2148165610.jpg",          imageAlt: "A vegetarian smash burger with fresh toppings"},
        {
          id: "p6",          name: "Loaded Chili Cheese Fries",          price: "$8.00",          variant: "Crispy & Delicious",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-french-fries-with-sauces-dark-background-fast-food-meal-potato-dish-burger_140725-96448.jpg",          imageAlt: "Golden loaded chili cheese fries"},
      ]}
      title="Our Smash-tastic Menu"
      description="Prepare your taste buds for an unforgettable burger experience. Each creation is a work of art!"
    />
  </div>



  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Get Smashed!"
      title="Ready for the Ultimate Burger?"
      description="Follow us on social media for our weekly locations, special events, and menu updates! Catering options available too."
      inputPlaceholder="Enter your email"
      buttonText="Order Now!"
      termsText="By ordering you agree to our yummy terms."
      onSubmit={() => alert("Order submitted!")}
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
