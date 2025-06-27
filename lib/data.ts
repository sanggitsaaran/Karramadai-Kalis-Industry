// lib/data.ts
export type Product = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "weeder-pro-x",
    name: "WeederPRO X",
    tagline: "The Ultimate Gardening Machine",
    price: 299.99,
    image: "/images/placeholder.svg",
    description: "The WeederPRO X is a state-of-the-art solution for all your gardening needs. With a powerful motor and precision blades, it makes quick work of even the toughest weeds. Built with durable, aerospace-grade aluminum.",
  },
  {
    id: "garden-pal-v2",
    name: "GardenPal v2",
    tagline: "Your Garden's Best Friend",
    price: 149.50,
    image: "/images/placeholder.svg",
    description: "Lightweight, easy to handle, and surprisingly powerful. The GardenPal v2 is perfect for smaller gardens and quick touch-ups. Features an ergonomic handle and a long-lasting battery.",
  },
  {
    id: "terra-former-5000",
    name: "TerraFormer 5000",
    tagline: "Industrial Strength Weeding",
    price: 799.00,
    image: "/images/placeholder.svg",
    description: "For commercial use or large properties, the TerraFormer 5000 is the only choice. It features a gas-powered engine and multiple attachments for maximum versatility and power.",
  },
];

export const reviews = [
    {
        name: "Sarah J.",
        comment: "The WeederPRO X changed my life! I used to spend hours every weekend pulling weeds. Now I'm done in 20 minutes. Incredible.",
        location: "Austin, TX"
    },
    {
        name: "Mike R.",
        comment: "I was skeptical about the price, but the build quality is insane. This thing feels like it will last forever. 10/10.",
        location: "Denver, CO"
    },
    {
        name: "Chen W.",
        comment: "My back thanks you! The GardenPal is so light and easy to use. My vegetable garden has never looked better.",
        location: "San Francisco, CA"
    }
]