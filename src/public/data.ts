import { assetsPath } from "../constants";
import { HeaderCardPayload, payload, blockTabs } from "../types/types";

export const StandardBlock1: payload = {
  title: "Unlock Property Value",
  paragraph:
    "Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey",
  cards: [
    {
      src: assetsPath + "Graph.svg",
      title: "Valuation Mastery",
      paragraph:
        "Discover the true worth of your property with our expert valuation services.",
    },
    {
      src: assetsPath + "RoundGraph.svg",
      title: "Strategic Marketing",
      paragraph:
        "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
    },
    {
      src: assetsPath + "Stack.svg",
      title: "Negotiation Wizardry",
      paragraph:
        "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
    },
    {
      src: assetsPath + "Repost.svg",
      title: "Closing Success",
      paragraph:
        "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
    },
  ],
  cardWithButton: {
    title: "Unlock the Value of Your Property Today",
    paragraph:
      "Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.",
  },
};

export const StandardBlock2: payload = {
  title: "Effortless Property Management",
  paragraph:
    "Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you",
  cards: [
    {
      src: assetsPath + "Apps.svg",
      title: "Tenant Harmony",
      paragraph:
        "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
    },
    {
      src: assetsPath + "Labels.svg",
      title: "Maintenance Ease",
      paragraph:
        "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
    },
    {
      src: assetsPath + "Stars1.svg",
      title: "Financial Peace of Mind",
      paragraph:
        "Managing property finances can be complex. Our financial experts take care of rent collection",
    },
    {
      src: assetsPath + "Sun.svg",
      title: "Legal Guardian",
      paragraph:
        "Stay compliant with property laws and regulations effortlessly.",
    },
  ],
  cardWithButton: {
    title: "Experience Effortless Property Management",
    paragraph:
      "Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.",
  },
};

export const StandardBlockLeft1: payload = {
  title: "Smart Investments, Informed Decisions",
  paragraph:
    "Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.",
  cards: [
    {
      src: assetsPath + "Graph.svg",
      title: "Market Insight",
      paragraph:
        "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
    },
    {
      src: assetsPath + "Fire.svg",
      title: "ROI Assessment",
      paragraph:
        "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments",
    },
    {
      src: assetsPath + "LightBulb.svg",
      title: "Customized Strategies",
      paragraph:
        "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs",
    },
    {
      src: assetsPath + "Sun.svg",
      title: "Diversification Mastery",
      paragraph:
        "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
    },
  ],
  cardWithButton: {
    title: "Unlock Your Investment Potential",
    paragraph:
      "Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.",
  },
};

export const HeaderCardContent: HeaderCardPayload = [
  [
    "Elevate Your Real Estate Experience",
    "Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.",
  ],
  ["title-with-paragraph__title", "title-with-paragraph__paragraph"],
];
export const BlockTabsContent: Array<blockTabs> = [
  {
    type: "Main Headquarters",
    header: "123 Estatein Plaza, City Center, Metropolis",
    paragraph:
      "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
    buttons: ["info@estatein.com", "+1 (123) 456-7890", "Metropolis"],
  },
  {
    type: "Regional Offices",
    header: "456 Urban Avenue, Downtown District, Metropolis",
    paragraph:
      "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
    buttons: ["info@estatein.com", "+1 (123) 456-7890", "Metropolis"],
  },
];

export const AboutValuesContent = [
  {
    src: assetsPath + "PlainStar.svg",
    title: "Trust",
    paragraph:
      "Trust is the cornerstone of every successful real estate transaction.",
  },
  {
    src: assetsPath + "PlainHat.svg",
    title: "Excellence",
    paragraph:
      "We set the bar high for ourselves. From the properties we list to the services we provide.",
  },
  {
    src: assetsPath + "PlainGroup.svg",
    title: "Client-Centric",
    paragraph:
      "Your dreams and needs are at the center of our universe. We listen, understand.",
  },
  {
    src: assetsPath + "PlainStar.svg",
    title: "Our Commitment",
    paragraph:
      "We are dedicated to providing you with the highest level of service, professionalism, and support.",
  },
];