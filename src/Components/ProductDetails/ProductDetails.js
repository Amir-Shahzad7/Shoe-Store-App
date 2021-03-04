import React from "react";
import "./ProductDetails.css";
import { useParams } from "react-router";
import Shoe1 from "../Images/Shoe1.png";
import Shoe2 from "../Images/Shoe2.png";
import Shoe3 from "../Images/Shoe3.png";
import Shoe4 from "../Images/Shoe4.png";
import Shoe5 from "../Images/Shoe5.png";
import Shoe6 from "../Images/Shoe6.png";
import Shoe7 from "../Images/Shoe7.png";
import Shoe8 from "../Images/Shoe8.png";
import Shoe9 from "../Images/Shoe9.png";
import { Typography } from "@material-ui/core";

const ShoesData = {
  "Nike-Air-Force": {
    ID: 0,
    Name: "Nike Air Force",
    Description: "Men's Shoe",
    Color: "2 Color",
    Price: "$90",
    Image: Shoe1,
    Details: [
      "Foam midsole",
      "Perforations on the toe",
      "Rubber sole",
      "Shown: White/White",
      "Style: CW2288-111",
    ],
    Features: [
      "The stitched overlays on the upper add heritage style, durability and support.",
      "Originally designed for performance hoops, the Nike Air cushioning adds lightweight, all-day comfort.",
      "The low-cut silhouette adds a clean, streamlined look.",
      "The padded collar feels soft and comfortable.",
    ],
    About: [
      "The radiance lives on in the Nike Air Force, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
    ],
  },

  "Nike-React-Infinity-Run": {
    ID: 1,
    Name: "Nike React Infinity Run",
    Description: "Men's Shoe",
    Color: "3 Color",
    Price: "$160",
    Image: Shoe2,
    Details: [
      "Foam midsole",
      "Perforations on the toe",
      "Rubber sole",
      "Shown: Black/Grey",
      "Style: CW2288-111",
    ],
    Features: [
      "Increased rubber at the outsole helps deliver traction and durability.",
      "Cushioned collar provides soft comfort.",
      "A wide shape provides a more stable ride, helping release energy with every step.",
      "Loop at the heel for easy on and off.",
    ],
    About: [
      "The Nike React Infinity Run continues to help keep you running. A refreshed upper uses Flywire technology that combines with Flyknit for support and breathability where you need it. The high foam heights provide soft responsiveness and long-lasting comfort. It's still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement.",
    ],
  },

  "Nike-Blazer-Mid": {
    ID: 2,
    Name: "Nike Blazer Mid",
    Description: "Men's Shoe",
    Color: "2 Color",
    Price: "$110",
    Image: Shoe3,
    Details: [
      "Foam midsole",
      "Perforations on the toe",
      "Rubber sole",
      "Shown: White/Golden",
      "Style: CW2288-111",
    ],
    Features: [
      "Leather and synthetic upper with woven basket-like material gives comfortable support.",
      "Vintage treatment on the midsole and exposed foam on the tongue provide an old-school look.",
      "Autoclave construction fuses the outsole to the midsole for a streamlined look.",
      "Non-marking, solid-rubber outsole has a herringbone pattern for excellent traction and durability.",
    ],
    About: [
      "The Nike Blazer Mid elevates heritage hoops style with a natural vibe. Woven material delivers an earthy aesthetic while a bright pink insole brings a hidden pop every time you lace up.",
    ],
  },

  "Nike-Air-Zoom": {
    ID: 3,
    Name: "Nike Air Zoom",
    Description: "Men's Shoe",
    Color: "1 Color",
    Price: "$200",
    Image: Shoe4,
    Details: [
      "Foam midsole",
      "Perforations on the toe",
      "Rubber sole",
      "Shown: White/Magenta/Orange",
      "Style: CW2288-111",
    ],
    Features: [
      "Cushioned heel pods add comfort.",
      "Step In, Secure With 1 Hand",
      "Responsive Heel",
      "Runner-Informed Traction",
      "Secure and Fast",
    ],
    About: [
      "The ultra-responsive Nike Air Zoom is designed to help you get the most from your training runs, so you can go confidently into your next (or first) race. It has a step-in entry and an internal lacing mechanism you operate with one hand. Pull one loop to tighten, another to release.",
    ],
  },

  "Nike-Air-Max": {
    ID: 4,
    Name: "Nike Air Max",
    Description: "Men's Shoe",
    Color: "2 Color",
    Price: "$160",
    Image: Shoe5,
    Details: [
      "Foam midsole",
      "Perforations on the toe",
      "Rubber sole",
      "Shown: White/Blue/Orange/Black",
      "Style: CW2288-111",
    ],
    Features: [
      "Cushioned collar provides soft comfort",
      "Heritage Look",
      "Underfoot Comfort",
      "Versatile Grip",
    ],
    About: [
      "The Nike Air Max merges unbelievable comfort, head turning style and recycled materials. Featuring the rich texture of felt, mesh and synthetic leather, it brings a new construction to classic running DNA. With its perfectly chunky design, soft Air cushioning and Nike Grind rubber outsole, it's a trend-setting statement. This product is made from at least 20% recycled content by weight.",
    ],
  },

  "Nike-Go-FlyEase": {
    ID: 5,
    Name: "Nike Go FlyEase",
    Description: "Men's Shoe",
    Color: "3 Color",
    Price: "$120",
    Image: Shoe6,
    Details: [
      "Foam midsole",
      "Perforations on the toe",
      "Rubber sole",
      "Shown: Black/Purple/Green/Grey",
      "Style: CW2288-111",
    ],
    Features: [
      "Step In and Go",
      "Cushlon Comfort",
      "Breathable With Structure",
      "Grippy rubber outsole provides great traction",
    ],
    About: [
      "Just when you thought you'd seen it all, Nike wows with an all-new way to quickly and easily get into your shoes. The entire heel (including the sole) of the Nike Go FlyEase hinges open for a totally handsfree entry. Slip in, step down and presto! You're all set.",
    ],
  },

  "Nike-SB-Zoom-Blazer": {
    ID: 6,
    Name: "Nike SB Zoom Blazer",
    Description: "Men's Shoe",
    Color: "1 Color",
    Price: "$80",
    Image: Shoe7,
    Details: [
      "Foam midsole",
      "Perforations on the toe",
      "Rubber sole",
      "Shown: White/Black",
      "Style: CW2288-111",
    ],
    Features: [
      "Suede creates a classic look that's built to last.",
      "Vulcanized construction fuses the outsole to the upper for a flexible, broken-in feel.",
      "Higher taping between the midsole and the upper adds durability.",
    ],
    About: [
      "Rebuilt using insights from Grant Taylor, the Nike SB Zoom Blazer Low Pro GT is a fresh take on a favorite skate shoe. The updated design has higher taping to give you more durability.",
    ],
  },

  "Nike-Air-Max-Plus": {
    ID: 7,
    Name: "Nike Air Max Plus",
    Description: "Men's Shoe",
    Color: "2 Color",
    Price: "$170",
    Image: Shoe8,
    Details: [
      "Foam midsole",
      "Perforations on the toe",
      "Rubber sole",
      "Shown: Black/Black",
      "Style: CW2288-111",
    ],
    Features: [
      "This product features at least 20% recycled materials by weight, including Nike Grind in the outsole and some recycled felt in the upper.",
      "Originally designed for running, Nike Air units provide lightweight cushioning that lasts.",
      "Recycled felt on the upper is made from 67% recycled content and creates a marbled effect.",
      "Translucent rubber outsole features 15% recycled Nike Grind for a unique speckled appearance.",
    ],
    About: [
      "The Nike Air Max Plus looks to the past and propels you into the future. Nodding to the 1998 Air Max Plus with its floating cage, padded upper and heel logo, it adds revolutionary Max Air technology to ramp up the comfort and create a modern look.",
    ],
  },

  "Nike-Pegasus-Trail": {
    ID: 8,
    Name: "Nike Pegasus Trail",
    Description: "Men's Shoe",
    Color: "3 Color",
    Price: "$120",
    Image: Shoe9,
    Details: [
      "Foam midsole",
      "Perforations on the toe",
      "Rubber sole",
      "Shown: Golden/Orange/Brown",
      "Style: CW2288-111",
    ],
    Features: [
      "The upper draws inspiration from the human body—the midsole represents the spine, graduated panels are the muscles and the laces are the shoe’s ribs.",
      "Originally developed for performance running, visible Nike Air cushioning delivers all day comfort.",
      "The breathable mesh upper is reinforced with leather and synthetic overlays for a highly ventilated, classic Nike look.",
      "The innovative lacing system lets you personalize your fit.",
      "The foam midsole has flex grooves for a comfortable feel that lets you move freely.",
    ],
    About: [
      "Find your wings on the path less traveled. The Nike Pegasus Trail delivers durability and responsiveness to runners, trail athletes and outdoor enthusiasts. Versatile enough for your everyday miles, it features an ideal fit with plush cushioning and tough traction.",
    ],
  },
};

function ProductDetails() {
  const { ID } = useParams();

  const Shoes = ShoesData[ID];

  return (
    <div>
      <p className="ProductHeading">{Shoes.Name}</p>
      <hr />
      <div>
        <div className="ImageDiv">
          <img className="Image" src={Shoes.Image} alt={Shoes.Name} />
        </div>
        <hr />
        <div>
          <Typography style={{letterSpacing: "1px"}} align="center" variant="h5" color="textPrimary">
            Price: {Shoes.Price}
          </Typography>
        </div>
        <hr />
        <p className="ProductHeading">Product Details</p>
        <div>
          {Shoes.Details.map((Details, ind) => {
            return (
              <li key={ind} style={{ marginLeft: "2%" }}>
                {Details}
              </li>
            );
          })}
        </div>
        <div>
          <h4 style={{ marginLeft: "1%" }}>Features:</h4>
          {Shoes.Features.map((Features, ind) => {
            return (
              <li key={ind} style={{ marginLeft: "2%" }}>
                {Features}
              </li>
            );
          })}
        </div>
        <div>
          <h4 style={{ marginLeft: "1%" }}>About:</h4>
          {Shoes.About.map((About, ind) => {
            return (
              <p key={ind} style={{ marginLeft: "2%" }}>
                {About}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
