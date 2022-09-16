import Uboric from "../assets/images/uboric-clone.PNG";
import hindustantimes from "../assets/images/hindustan-times.PNG";
import indiamart from "../assets/images/indiamart.PNG";

export const projectList = [
  {
    id: 1,
    project_title: "Indiamart - clone",
    desc: "This is a collaborative project with 4 other developers. It is an ecommerce website where you will be able to search products, filter through the products and also sort it by price.",
    tech_stack: ["JavaScript", "HTML", "Json Server", "CSS"],
    dp_link: "https://realindiamart.netlify.app/",
    gt_link: "https://github.com/raus376/IndiaMart_Website",
    screenshot_src: indiamart,
    alt_text: "indiamart-clone",
  },
  {
    id: 2,
    project_title: "Uboric - clone",
    desc: "This is a clone of an ecommerce website uboric.com. it has features like sorting products by price, filtering, adding to cart, and searching.",
    tech_stack: ["React", "Chakra-UI", "Json Server"],
    dp_link: "https://uboric-clone-mu.vercel.app/",
    gt_link:
      "https://github.com/Singh-Govind/eager-porter-575/tree/master/uboric-clone",
    screenshot_src: Uboric,
    alt_text: "uboric-clone",
  },
  {
    id: 3,
    project_title: "Hindustan Times - clone",
    desc: "This is a clone of a news website hindustantimes.com. You will be able to signin using google account which is created using google's firebase authentication. It also gets weather data from an api to diplay.",
    tech_stack: ["React", "Chakra-UI", "Json Server", "Firebase"],
    dp_link: "https://hindustan-times-clone.netlify.app/",
    gt_link:
      "https://github.com/Singh-Govind/worried-turn-584/tree/main/hindustan-times",
    screenshot_src: hindustantimes,
    alt_text: "hindustan-times-clone",
  },
];
