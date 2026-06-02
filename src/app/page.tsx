"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Cog, Leaf, Smile } from "lucide-react";

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
          name: "Reviews",          id: "#testimonials"},
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

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",          title: "Fresh, Local Ingredients",          description: "We source the freshest produce and premium beef from local suppliers, ensuring quality and supporting our community.",          tag: "Quality",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cheeseburger-hot-dog_23-2148258459.jpg",          imageAlt: "Fresh vegetables and burger ingredients"},
        {
          id: "f2",          title: "Signature Secret Sauce",          description: "Our legendary house-made sauce adds an irresistible tangy kick that perfectly complements every smash burger. You'll crave it!",          tag: "Flavor",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cheesy-meat-burger-with-seasonings-dark-surface-bun-sandwich-fast-food_140725-82151.jpg",          imageAlt: "Secret sauce being drizzled on a burger"},
        {
          id: "f3",          title: "The Perfect Sizzle & Sear",          description: "Each patty is meticulously smashed on a scorching griddle, creating a caramelized crust and locking in maximum juiciness.",          tag: "Technique",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-cutting-burger-with-egg_23-2148678847.jpg",          imageAlt: "Perfectly seared smash burger patty on a griddle"},
      ]}
      title="Why Our Smash Burgers Reign Supreme"
      description="Discover the delicious difference in every bite – from sizzling sear to gourmet toppings."
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

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          value: "10,000+",          title: "Patties Smashed",          description: "Every single one grilled to perfection.",          icon: Cog,
        },
        {
          id: "m2",          value: "5,000+",          title: "Happy Customers",          description: "Making taste buds sing, one burger at a time.",          icon: Smile,
        },
        {
          id: "m3",          value: "100%",          title: "Freshness Guaranteed",          description: "Only the finest, locally sourced ingredients.",          icon: Leaf,
        },
      ]}
      title="Our Flavorful Achievements"
      description="Bringing smiles and deliciousness to every street corner!"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      animationType="slide-up"
      speed={40}
      topMarqueeDirection="left"
      testimonials={[
        {
          id: "t1",          name: "Burger Bob", handle: "@burgerbob", testimonial: "Absolutely incredible! The patties are juicy, the sauce is to die for, and the bun is perfectly toasted. A must-try!",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-woman-taking-selfie-photo-winking_1262-18343.jpg",          imageAlt: "Bob's avatar"},
        {
          id: "t2",          name: "Patty Queen", handle: "@pattyqueen", testimonial: "Every bite is a burst of flavor. The Spicy Jalapeño Smash is my favorite, perfectly balanced heat. Can't wait for my next visit!",          imageSrc: "http://img.b2bpic.net/free-photo/black-man-casual-wear-checks-email-reads-world-news-electronic-device-drinks-morning-coffee-croissants_273609-8909.jpg",          imageAlt: "Patty's avatar"},
        {
          id: "t3",          name: "Grill Master Mike", handle: "@grillmikester", testimonial: "The retro theme is spot on, and the burgers transport you straight to a classic diner. High quality ingredients, friendly service. My new go-to!",          imageSrc: "http://img.b2bpic.net/free-photo/crazy-man-funny-expression_1194-3202.jpg",          imageAlt: "Mike's avatar"},
        {
          id: "t4",          name: "Hungry Holly", handle: "@hollyeats", testimonial: "I'm obsessed with the BBQ Bacon Beast! It's huge, flavorful, and incredibly satisfying. Worth every penny and every calorie!",          imageSrc: "http://img.b2bpic.net/free-photo/woman-chef-standing-with-crossed-arms-white-uniform-looking-confident_176474-43376.jpg",          imageAlt: "Holly's avatar"},
        {
          id: "t5",          name: "Veggie Valerie", handle: "@valerieveggie", testimonial: "As a vegetarian, finding a delicious smash burger is a dream. The Garden Smash is fresh, packed with flavor, and totally hit the spot!",          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-brunette-woman-wearing-casual-sweater-standing-red-background-pointing-fingers-camera-with-happy-funny-face-good-energy-vibes_839833-6469.jpg",          imageAlt: "Valerie's avatar"},
      ]}
      title="What Our Fans Are Saying"
      description="Don't just take our word for it – hear from the happy bellies!"
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
      columns={[
        {
          items: [
            {
              label: "Classic Smash",              href: "#products"},
            {
              label: "Spicy Options",              href: "#products"},
            {
              label: "Sides & Shakes",              href: "#products"},
          ],
        },
        {
          items: [
            {
              label: "Our Story",              href: "#about"},
            {
              label: "Locations",              href: "#contact"},
            {
              label: "Reviews",              href: "#testimonials"},
          ],
        },
        {
          items: [
            {
              label: "Facebook",              href: "#"},
            {
              label: "Instagram",              href: "#"},
            {
              label: "Contact Us",              href: "#contact"},
          ],
        },
      ]}
      ariaLabel="Site footer"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
