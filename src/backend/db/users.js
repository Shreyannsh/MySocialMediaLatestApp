import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shreyansh",
    lastName: "Tiwari",
    username: "shreyansh",
    password: "00001111",
    bookmarks: [],
    title: "Software Developer",
    bio: "Play to win, Code to deploy!",
    website: "shreyashtiwarii.netlify.app",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ranbir",
    lastName: "Kapoor",
    username: "ranbir_kapoor",
    password: "00001111",
    bookmarks: [],
    title: "Actor",
    bio: "Have Fun",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Guru ",
    lastName: "Randhawa",
    username: "guru007",
    password: "00001111",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Arijit",
    lastName: "Singh",
    username: "Arijit",
    password: "00001111",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Katrina",
    lastName: "Kafe",
    username: "I_am_Katrina",
    password: "00001111",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Alia",
    lastName: "Bhatt",
    username: "its_Alia_Bhatt",
    password: "00001111",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "A R  ",
    lastName: "Rehman",
    username: "A_R_Rehman",
    password: "00001111",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
