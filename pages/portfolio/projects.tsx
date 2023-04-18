import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
const projects = [
  {
    projectName: "Ecommerce",
    projectNo: 1,
    id: "$ecommerce",
    image: "/ecommerce.png",
    description:
      "A single page News React Application.'During' the development of this application I learn how to create reusable react components, nested routing, how to work with Api (in react) and much more.",
    technologies: ["MERN", "Typescript", "Tailwind", "Mongoose"],
    projectLinks: [
      {
        icon: <AiFillGithub size="100%" />,
        link: "https://github.com/Gautamvaishnav-git/Ecommerce",
      },
    ],
    direction: ["column", "row"],
  },
  {
    projectName: "next news",
    projectNo: 1,
    id: "$nextnews1",
    image: "/nextnews.webp",
    description:
      "A single page News React Application.'During' the development of this application I learn how to create reusable react components, nested routing, how to work with Api (in react) and much more.",
    technologies: ["react js", "tailwind css", "react router", "news api"],
    projectLinks: [
      {
        icon: <AiFillGithub size="100%" />,
        link: "https://github.com/Gautamvaishnav-git/NewsApp-FC-",
      },
    ],
    direction: ["column", "row"],
  },
  {
    projectName: "crypto application",
    projectNo: 2,
    id: "$crypto2",
    image: "/cryptoapp.webp",
    description:
      "Crypto React Application created with Chakra Ui and Coingecko Api. In this project I learn how to use Chakra Ui, worked with axios, used  react icons etc.",
    technologies: ["Chakra Ui", "ChartJs", "Axios", "React Icon Library"],
    projectLinks: [
      {
        icon: <AiFillGithub size="100%" />,
        link: "https://github.com/Gautamvaishnav-git/CryptoWeb",
      },
      {
        icon: <AiOutlineLink size="100%" />,
        link: "https://cryptoapp-bygautam.netlify.app/",
      },
    ],
    direction: ["column", "row-revers"],
  },
  {
    projectName: "yourjavateacher",
    projectNo: 3,
    id: "$yourjavateacher3",
    image: "/yourjavateacher.webp",
    description:
      "Video Application for youtube channel @YourJavaTeacher. He is teaching about java and related technologies to Java. Created with chakraUi and ReactJs. videos by lectures feature and etc.",
    technologies: ["react js", "Chakra Ui", "React Router"],
    projectLinks: [
      {
        icon: <AiFillGithub size="100%" />,
        link: "https://github.com/Gautamvaishnav-git/yourjavateacher",
      },
    ],
    direction: ["column", "row"],
  },
  {
    projectName: "Shorty",
    projectNo: 4,
    id: "$Imovie4",
    image: "/shorty.png",
    description:
      "Shorty is short url services. Here You can generate short urls for long urls. You can login to your dashboard or can see the list of the short urls that you generate.",
    technologies: ["NodeJs", "Express", "MongoDB", "EJS"],
    projectLinks: [
      {
        icon: <AiFillGithub size="100%" />,
        link: "https://github.com/Gautamvaishnav-git/shorty",
      },
    ],
    direction: ["column", "row-revers"],
  },
  {
    projectName: "redux cart",
    projectNo: 5,
    id: "$redux5",
    image: "/reduxcart.webp",
    description:
      "Crypto React Application created with Chakra Ui and Coingecko Api. In this project I learn how to use Chakra Ui, worked with axios, used  react icons etc. ",
    technologies: ["Sass", "@Redux-toolkit", "React-hot-toast", "React Redux"],
    projectLinks: [
      {
        icon: <AiFillGithub size="100%" />,
        link: "https://github.com/Gautamvaishnav-git/Redux-Cart",
      },
      {
        icon: <AiOutlineLink size="100%" />,
        link: "https://redux-cart-bygautam.netlify.app/",
      },
    ],
    direction: ["column", "row"],
  },
  {
    projectName: "Imovie",
    projectNo: 6,
    id: "$Imovie6",
    image: "/Imovie.webp",
    description:
      "Imovie is a single page application. Made with ReactJs and typescript and TMDB api. In this project I learn how to create a type safe application using typescript also learned how to read an api documentation.",
    technologies: ["Typescript", "Tailwind", "TMDB", "React"],
    projectLinks: [
      {
        icon: <AiFillGithub size="100%" />,
        link: "https://github.com/Gautamvaishnav-git/imovie",
      },
      {
        icon: <AiOutlineLink size="100%" />,
        link: "https://imovie-bygautam.vercel.app/",
      },
    ],
    direction: ["column", "row"],
  },
];

export default projects;
