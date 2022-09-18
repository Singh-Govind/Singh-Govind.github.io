import Uboric from "../assets/images/uboric-clone.PNG";
import hindustantimes from "../assets/images/hindustan-times.PNG";
import indiamart from "../assets/images/indiamart.PNG";

export const projectList = [
  {
    id: 1,
    project_title: "Indiamart - clone",
    desc: "This was a collabrative project in which I have created the navbar, search functionality and implemented login/logout button functionty which was created by another developer.",
    tech_stack: ["JavaScript", "HTML", "Json Server", "CSS"],
    dp_link: "https://realindiamart.netlify.app/",
    gt_link: "https://github.com/raus376/IndiaMart_Website",
    screenshot_src: indiamart,
    alt_text: "indiamart-clone",
  },
  {
    id: 2,
    project_title: "Uboric - clone",
    desc: "This is an individual project in which I have built the clone of an ecommerce website. In this website I have implemented login/logout page, a filter option to filter products and sorting functionality to sort by price. Also added add to cart function and a card page.",
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
