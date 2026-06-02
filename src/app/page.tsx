"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Cog, Leaf, Smile } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="medium"
        sizing="large"
        background="none"
        cardStyle="inset"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
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
      imageSrc="http://img.b2bpic.net/free-photo/young-woman-eating-burger-street-cafe-close-up_169016-43761.jpg"
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
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Burger Bob",          date: "May 15, 2024",          title: "Best Smash Burger in Town!",          quote: "Absolutely incredible! The patties are juicy, the sauce is to die for, and the bun is perfectly toasted. A must-try!",          tag: "Foodie Review",          avatarSrc: "http://img.b2bpic.net/free-photo/smiling-young-woman-taking-selfie-photo-winking_1262-18343.jpg",          avatarAlt: "Bob's avatar",          imageSrc: "http://img.b2bpic.net/free-photo/view-delicious-burger-with-french-fries_23-2150887849.jpg",          imageAlt: "Burger on a diner table"},
        {
          id: "t2",          name: "Patty Queen",          date: "May 10, 2024",          title: "Flavor Explosion!",          quote: "Every bite is a burst of flavor. The Spicy Jalapeño Smash is my favorite, perfectly balanced heat. Can't wait for my next visit!",          tag: "Spice Lover",          avatarSrc: "http://img.b2bpic.net/free-photo/black-man-casual-wear-checks-email-reads-world-news-electronic-device-drinks-morning-coffee-croissants_273609-8909.jpg",          avatarAlt: "Patty's avatar",          imageSrc: "http://img.b2bpic.net/free-photo/vibrant-alleyway-market-scene_23-2152004265.jpg",          imageAlt: "Food truck serving window"},
        {
          id: "t3",          name: "Grill Master Mike",          date: "April 28, 2024",          title: "Authentic Diner Vibes!",          quote: "The retro theme is spot on, and the burgers transport you straight to a classic diner. High quality ingredients, friendly service. My new go-to!",          tag: "Retro Fan",          avatarSrc: "http://img.b2bpic.net/free-photo/crazy-man-funny-expression_1194-3202.jpg",          avatarAlt: "Mike's avatar",          imageSrc: "http://img.b2bpic.net/free-photo/last-preparations_1098-13460.jpg",          imageAlt: "Outdoor picnic table with burgers"},
        {
          id: "t4",          name: "Hungry Holly",          date: "April 20, 2024",          title: "Seriously Satisfying!",          quote: "I'm obsessed with the BBQ Bacon Beast! It's huge, flavorful, and incredibly satisfying. Worth every penny and every calorie!",          tag: "Big Eaters",          avatarSrc: "http://img.b2bpic.net/free-photo/woman-chef-standing-with-crossed-arms-white-uniform-looking-confident_176474-43376.jpg",          avatarAlt: "Holly's avatar",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-silver-champagne-bottle-glass_23-2148356105.jpg",          imageAlt: "Diner counter with milkshakes"},
        {
          id: "t5",          name: "Veggie Valerie",          date: "April 1, 2024",          title: "Amazing Plant-Based Option!",          quote: "As a vegetarian, finding a delicious smash burger is a dream. The Garden Smash is fresh, packed with flavor, and totally hit the spot!",          tag: "Veggie Friendly",          avatarSrc: "http://img.b2bpic.net/free-photo/young-beautiful-brunette-woman-wearing-casual-sweater-standing-red-background-pointing-fingers-camera-with-happy-funny-face-good-energy-vibes_839833-6469.jpg",          avatarAlt: "Valerie's avatar",          imageSrc: "http://img.b2bpic.net/free-photo/girl-going-food-truck_23-2148011740.jpg",          imageAlt: "Food truck at night with neon lights"},
      ]}
      title="What Our Fans Are Saying"
      description="Don't just take our word for it – hear from the happy bellies!"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient"}}
      tag="Get Smashed!"
      title="Ready for the Ultimate Burger?"
      description="Follow us on social media for our weekly locations, special events, and menu updates! Catering options available too."
      buttons={[
        {
          text: "See Our Schedule",          href: "#"},
        {
          text: "Catering Inquiry",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="P3&E Street Eats"
      columns={[
        {
          title: "Menu",          items: [
            {
              label: "Classic Smash",              href: "#products"},
            {
              label: "Spicy Options",              href: "#products"},
            {
              label: "Sides & Shakes",              href: "#products"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "Our Story",              href: "#about"},
            {
              label: "Locations",              href: "#contact"},
            {
              label: "Testimonials",              href: "#testimonials"},
          ],
        },
        {
          title: "Connect",          items: [
            {
              label: "Facebook",              href: "#"},
            {
              label: "Instagram",              href: "#"},
            {
              label: "Contact Us",              href: "#contact"},
          ],
        },
      ]}
      copyrightText="© 2024 P3&E Street Eats. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
