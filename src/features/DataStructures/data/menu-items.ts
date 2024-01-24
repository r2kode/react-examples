export const menuItems = [
  {
    id: "1",
    text: "Menu 1",
    children: ["11", "12"],
    isRoot: true,
  },
  {
    id: "11",
    text: "Menu 1 1",
    href: "#11",
  },
  {
    id: "12",
    text: "Menu 1 2",
    href: "#12",
  },
  {
    id: "2",
    text: "Menu 2",
    href: "#2",
    isRoot: true,
  },
  {
    id: "3",
    text: "Menu 3",
    children: ["31"],
    isRoot: true,
  },
  {
    id: "31",
    text: "Menu 3 1",
    children: ["311"],
  },
  {
    id: "311",
    text: "Menu 3 1 1",
    href: "#311",
  },
];
