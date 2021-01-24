const projects = [
  {
    id: 0,
    name: "H3rra (Wedding Planner)",
    url: "https://labspt5weddingbells.netlify.app/",
    github: {
      fe: "https://github.com/Lambda-School-Labs/wedding-bells-fe",
      be: "https://github.com/Lambda-School-Labs/wedding-bells-be",
    },
    tech: [
      "React",
      "Reactstrap",
      "Sass",
      "Node.js",
      "Express.js",
      "Bcrypt.js",
      "PostGreSQL",
      "Netlify",
      "Heroku",
    ],
  },
  {
    id: 1,
    name: "Conway's Game of Life",
    url: "https://game-of-life-sc.netlify.app/",
    github: {
      fe: "https://github.com/lambda-school-assignments0/CS-Build-Week-1",
      be: "",
    },
    tech: ["React", "Netlify"],
  },
  {
    id: 2,
    name: "Trivia In Tandem",
    url: "https://triviaintandem.netlify.app/",
    github: {
      fe: "https://github.com/schang1146/Tandem_Apprentice_Challenge_2020",
      be: "",
    },
    tech: ["React", "Netlify"],
  },
  {
    id: 3,
    name: "Advent of Code 2020",
    url: "https://github.com/schang1146/adventofcode2020",
    github: {
      fe: "",
      be: "",
    },
    tech: ["Python"],
  },
  {
    id: 4,
    name: "7 GUIs",
    url: "https://7guis.schang.dev/",
    github: {
      fe: "https://github.com/schang1146/react-7guis",
      be: "",
    },
    tech: ["Python"],
  },
];

export function getProjectsData() {
  return projects.reverse();
}
