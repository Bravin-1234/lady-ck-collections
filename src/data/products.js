import logoImg from '../assets/images/logo.jpg';
import heroMobileImg from '../assets/images/hero-mobile.png';

import jeansCover from '../assets/images/jeans.jpg';
import dressesCover from '../assets/images/dresses.jpg';
import gymwearCover from '../assets/images/gymwear.jpg';
import handbagCover from '../assets/images/handbag.jpeg';
import innerwearCover from '../assets/images/innerwears.jpeg';
import shoesCover from '../assets/images/shoes.jpg';
import kidsCover from '../assets/images/kids.jpg';
import sweatpantsCover from '../assets/images/sweatpants.jpg';

import jeans1 from '../assets/images/jeans-01.jpg';
import jeans2 from '../assets/images/jeans-02.jpg';
import dresses1 from '../assets/images/dresses-01.jpg';
import dresses2 from '../assets/images/dresses-02.jpg';
import handbag1 from '../assets/images/handbag-01.jpeg';
import handbag2 from '../assets/images/handbag-02.jpeg';
import kids1 from '../assets/images/kids-01.jpg';
import kids2 from '../assets/images/kids-02.jpg';

export const siteConfig = {
  name: "Lady CK Collections",
  phone: "0750 383 100",
  whatsappNumber: "254750383100",
  location: "Timboroa Lifestyle Mall, 1st Floor, Room 16",
  landmark: "Opposite Total Energy Petrol Station, along Gitanga Road",
  hours: "Open Daily: 8:00 AM - 10:00 PM",
  logo: logoImg,
  heroBg: heroMobileImg
};

export const categories = [
  { id: 'all', name: 'All Collections' },
  { id: 'kids', name: 'Kids & Tweens', image: kidsCover },
  { id: 'jeans', name: 'Denim & Pants', image: jeansCover },
  { id: 'dresses', name: 'Ladies Dresses', image: dressesCover },
  { id: 'handbags', name: 'Handbags & Purses', image: handbagCover },
  { id: 'gymwear', name: 'Gym & Activewear', image: gymwearCover },
  { id: 'sweatpants', name: 'Lounge & Tracksuits', image: sweatpantsCover },
  { id: 'innerwear', name: 'Innerwear', image: innerwearCover },
  { id: 'shoes', name: 'Shoes & Footwear', image: shoesCover },
];

export const products = [
  {
    id: 1,
    name: "Embellished 3D Floral Denim Jeans",
    category: "jeans",
    price: "KSh 3,200",
    image: jeans1,
    tag: "Trending",
    badgeColor: "bg-pink-500"
  },
  {
    id: 2,
    name: "Wide-Leg High Waist Chic Denim",
    category: "jeans",
    price: "KSh 2,800",
    image: jeans2,
    tag: "New Arrival",
    badgeColor: "bg-amber-500"
  },
  {
    id: 3,
    name: "Kids Floral & Pearl Co-Ord Set",
    category: "kids",
    price: "KSh 2,500",
    image: kids1,
    tag: "Kids Luxury",
    badgeColor: "bg-sky-500"
  },
  {
    id: 4,
    name: "Two-Piece Pink Denim Set",
    category: "kids",
    price: "KSh 3,500",
    image: kids2,
    tag: "Popular",
    badgeColor: "bg-pink-500"
  },
  {
    id: 5,
    name: "Boutique Elegance Evening Dress",
    category: "dresses",
    price: "KSh 4,500",
    image: dresses1,
    tag: "Exclusive",
    badgeColor: "bg-amber-500"
  },
  {
    id: 6,
    name: "Floral Summer Flowy Dress",
    category: "dresses",
    price: "KSh 3,800",
    image: dresses2,
    tag: "Summer",
    badgeColor: "bg-sky-500"
  },
  {
    id: 7,
    name: "Designer Structured Handbag",
    category: "handbags",
    price: "KSh 4,200",
    image: handbag1,
    tag: "Bestseller",
    badgeColor: "bg-pink-500"
  },
  {
    id: 8,
    name: "Luxury Leather Shoulder Bag",
    category: "handbags",
    price: "KSh 3,900",
    image: handbag2,
    tag: "Hot Item",
    badgeColor: "bg-amber-500"
  }
];
