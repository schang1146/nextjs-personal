import { NextApiRequest, NextApiResponse } from "next";

const projects = [
  {
    id: 0,
    name: "Conway's Game of Life",
    url: "https://game-of-life-sc.netlify.app/",
    github: {
      fe: "https://github.com/lambda-school-assignments0/CS-Build-Week-1",
      be: "",
    },
    tech: ["React"],
  },
  {
    id: 1,
    name: "H3rra (Wedding Planner)",
    url: "https://labspt5weddingbells.netlify.app/",
    github: {
      fe: "https://github.com/Lambda-School-Labs/wedding-bells-fe",
      be: "https://github.com/Lambda-School-Labs/wedding-bells-be",
    },
    tech: ["React", "Reactstrap", "Node.js", "Express.js"],
  },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json(projects);
};
