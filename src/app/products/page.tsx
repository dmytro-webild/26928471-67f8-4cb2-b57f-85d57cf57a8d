"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import ProductCardFour from "@/components/sections/product/ProductCardFour";

export default function ProductsPage() {
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
              { name: "Home", id: "/" },
              { name: "Menu", id: "/products" },
              { name: "About Us", id: "/about" },
              { name: "Find Our Truck", id: "/contact" }
            ]}
            logoSrc="http://img.b2bpic.net/free-photo/realistic-burger-packaging-mockup_58466-18336.jpg"
            logoAlt="P3&E Street Eats Logo"
            brandName="P3&E Street Eats"
            button={{
              text: "Find Us",              href: "/contact"
            }}
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
                id: "p1",                name: "Classic Paddy Smash",                price: "$12.00",                variant: "Single/Double Patty with Cheese and our Famous Paddy Sauce.",                imageSrc: "http://img.b2bpic.net/free-photo/hands-holding-tasty-cheeseburger_23-2148374911.jpg",                imageAlt: "A classic smash burger with cheese, lettuce, and tomato"
              },
              {
                id: "p2",                name: "Jersey Boy",                price: "$13.50",                variant: "Single/Double Patty with Fried Taylor Ham, White American Cheese and a Fried Egg.",                imageSrc: "http://img.b2bpic.net/free-photo/creative-arrangement-with-hamburger_23-2148614114.jpg",                imageAlt: "A spicy smash burger with jalapeños and melted cheese"
              },
              {
                id: "p3",                name: "Carolina Crunch",                price: "$14.00",                variant: "Single/Double Patty with Pimento Cheese, Fried Onions and Bacon Jam.",                imageSrc: "http://img.b2bpic.net/free-photo/grilled-gourmet-cheeseburger-with-fresh-vegetables-fries-generated-by-ai_188544-38732.jpg",                imageAlt: "A large BBQ bacon smash burger with onion rings"
              },
              {
                id: "p4",                name: "Street Corn Smash",                price: "$13.00",                variant: "Single/Double Patty with Cotija Cheese, Elote-Style Corn Relish and Chipotle Mayo.",                imageSrc: "http://img.b2bpic.net/free-photo/street-food-still-life_23-2151535236.jpg",                imageAlt: "A smash burger topped with sautéed mushrooms and Swiss cheese"
              },
              {
                id: "p5",                name: "Cyrpto Burger ",                price: "$11.00",                variant: "Single/Double Patty with Pepper Jack Cheese, Bacon, Jalapeño Cream Cheese and Bull Run Sauce.",                imageSrc: "http://img.b2bpic.net/free-photo/hamburger-chopping-board-with-spinach-tomatoes-avocado-wooden-board_23-2148165610.jpg",                imageAlt: "A vegetarian smash burger with fresh toppings"
              }
            ]}
            title="Our Smash-tastic Menu"
            description="Prepare your taste buds for an unforgettable burger experience. Each creation is a work of art!"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
