"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import ProductCardFour from '@/components/sections/product/ProductCardFour';

export default function LandingPage() {
  const handleSubmitEmail = async (email: string) => {
    console.log("User subscribed with email:", email);
    // In a real application, you would send this email to your backend here.
    // Example: 
    // try {
    //   const response = await fetch('/api/subscribe', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON_END_PLACEHOLDER.stringify({ email }),
    //   });
    //   if (response.ok) {
    //     alert('Thank you for subscribing!');
    //   } else {
    //     alert('Subscription failed. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('Subscription error:', error);
    //   alert('An error occurred. Please try again later.');
    // }
    alert(`Thank you for subscribing with ${email}!`);
  };

  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="medium"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="P3&E Street Eats"
      description="Get ready to experience the juiciest, most creative smash burgers on wheels! Hand-smashed patties, secret sauces, and fresh ingredients for a flavor explosion."
      buttons={[
        {
          text: "Find Our Truck",          href: "https://www.tiktok.com/@p3andestreeteats"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CJnQJYMSiA6jhejhdDXPX2Rx55/uploaded-1780710796839-mfmtlte7.png"
      imageAlt="P3&E Street Eats food truck with a delicious burger hero shot"
      showDimOverlay={true}
      imageClassName="object-cover w-full h-full"
      logoContainerClassName="-mt-10"
      logoClassName="text-[#CC3333] text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-md"
      descriptionClassName="text-[#CC3333]"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Our Smash-tastic Story"
      description="Born from a culinary passion and a love for local communities, P3&E Street Eats is more than just a food truck – it's a flavor revolution! We believe in fresh, quality ingredients and the simple joy of a perfectly seared, juicy burger. Join us on our journey to smash blandness and bring smiles!"
      tag="About Us"
      imageSrc="https://img.b2bpic.net/premium-photo/hand-black-glove-holds-burger-with-words-meat-burger-it_461960-2898.jpg?id=39354707"
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
          id: "p1",          name: "Classic Smash Paddy",          price: "",          variant: "Single/Double Smash Patty with Cheese, Pickles and our Famous Paddy Sauce.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CJnQJYMSiA6jhejhdDXPX2Rx55/uploaded-1780452491452-l6ueuhic.png",          imageAlt: "A classic smash burger with cheese, lettuce, and tomato"},
        {
          id: "p2",          name: "Jersey Boy",          price: "",          variant: "Single/Double Smash Patty with Fried Taylor Ham, White American Cheese and a Fried Egg.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CJnQJYMSiA6jhejhdDXPX2Rx55/uploaded-1780373798204-ygkjoex4.png",          imageAlt: "A spicy smash burger with jalapeños and melted cheese"},
        {
          id: "p3",          name: "Carolina Crunch",          price: "",          variant: "Single/Double Smash Patty with Pimento Cheese, Fried Onions and Bacon Jam.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CJnQJYMSiA6jhejhdDXPX2Rx55/uploaded-1780373805633-bmjlgeet.png",          imageAlt: "A large BBQ bacon smash burger with onion rings"},
        {
          id: "p4",          name: "Street Corn Smash",          price: "",          variant: "Single/Double Smash Patty with Cotija Cheese, Elote-Style Corn Relish and Chipotle Mayo.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CJnQJYMSiA6jhejhdDXPX2Rx55/uploaded-1780373812391-nupxmn38.png",          imageAlt: "A smash burger topped with sautéed mushrooms and Swiss cheese"},
        {
          id: "p5",          name: "Cyrpto Burger ",          price: "",          variant: "Jalapeño Cream Cheese Smash Patty with Pepper Jack Cheese, Bacon and Bull Run Sauce.",          imageSrc: "https://storage.googleapis.com/webild/users/user_3CJnQJYMSiA6jhejhdDXPX2Rx55/uploaded-1781577165990-yvjplb98.png",          imageAlt: "A vegetarian smash burger with fresh toppings"}
      ]}
      title="Our Smash-tastic Menu"
      description="Prepare your taste buds for an unforgettable burger experience. Each creation is a work of art!"
      imageClassName="h-48 w-full object-cover sm:h-auto"
    />
  </div>



  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag=""
      title="Ready for the Ultimate Burger?"
      description="Follow us on social media for our weekly locations, special events, and menu updates! Catering options available too."
      inputPlaceholder="Enter your email"
      buttonText="Subscribe!"
      termsText="By subscribing you agree to receiving our promotional emails."
      onSubmit={handleSubmitEmail}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      logoText="P3&E Street Eats"
      columns={[]}
      copyrightText="© 2026 P3&E Street Eats. All rights reserved."
      ariaLabel="Site footer"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}