import { FormItemTypes } from "../types/formItem";

const PROJECTS = [
  {
    name: "winter 2017-18",
    projects: [
      {
        title: "home",
        text:
          "An interactive visual, audio, and animated experience that takes you around some of our favorite spots in LA."
      },
      {
        title: "fashion lookbook",
        text:
          "An interactive visual, audio, and animated experience that takes you around some of our favorite spots in LA."
      },
      {
        title: "zine",
        text:
          "An interactive visual, audio, and animated experience that takes you around some of our favorite spots in LA."
      },
      {
        title: "VR game",
        text:
          "An interactive visual, audio, and animated experience that takes you around some of our favorite spots in LA."
      },
      {
        title: "WebGL intro",
        text:
          "An interactive visual, audio, and animated experience that takes you around some of our favorite spots in LA."
      }
    ]
  },
  {
    name: "fall 2017",
    projects: [
      {
        title: "A Day in LA",
        text:
          "An interactive visual, audio, and animated experience that takes you around some of our favorite spots in LA."
      },
      {
        title: "A Day in LA",
        text:
          "An interactive visual, audio, and animated experience that takes you around some of our favorite spots in LA."
      },
      {
        title: "A Day in LA",
        text:
          "An interactive visual, audio, and animated experience that takes you around some of our favorite spots in LA."
      }
    ]
  }
];

const CURRENT_PROJECTS = [
  {
    title: "home",
    text:
      "An interactive visual, audio, and animated experience that takes you around some of our favorite spots in LA."
  },
  {
    title: "fashion lookbook",
    text:
      "An interactive visual, audio, and animated experience that takes you around some of our favorite spots in LA."
  },
  {
    title: "zine",
    text:
      "An interactive visual, audio, and animated experience that takes you around some of our favorite spots in LA."
  },
  {
    title: "VR game",
    text:
      "An interactive visual, audio, and animated experience that takes you around some of our favorite spots in LA."
  },
  {
    title: "WebGL intro",
    text:
      "An interactive visual, audio, and animated experience that takes you around some of our favorite spots in LA."
  }
];

const USERS = [
  {
    last_name: "wong",
    first_name: "bryan",
    username: "bwong"
  },
  {
    last_name: "yu",
    first_name: "michael",
    username: "mnyu"
  },
  {
    last_name: "xu",
    first_name: "alex",
    username: "xual"
  }
];

const PROJECT_MEMBER_FORM = [
  {
    id: "name",
    type: FormItemTypes.SHORT_RESPONSE,
    title: "Name",
    required: true
  },
  {
    id: "email",
    type: FormItemTypes.SHORT_RESPONSE,
    title: "Email",
    required: true
  },
  {
    id: "year",
    type: FormItemTypes.CHECKBOX,
    title: "What year are you?",
    options: ["1", "2", "3", "4"]
  },
  {
    id: "pastProject",
    type: FormItemTypes.LONG_RESPONSE,
    title:
      "Tell us about a project you've worked on. What were some challenges you faced and how did you overcome them?",
    required: true
  },
  {
    id: "firstChoiceProject",
    type: FormItemTypes.DROPDOWN,
    title: "Which project is your first choice?",
    options: CURRENT_PROJECTS.map(project => project.title),
    required: true
  },
  {
    id: "secondChoiceProject",
    type: FormItemTypes.DROPDOWN,
    title: "Second choice?",
    options: CURRENT_PROJECTS.map(project => project.title),
    required: true
  },
  {
    id: "thirdChoiceProject",
    type: FormItemTypes.DROPDOWN,
    title: "Third choice?",
    options: CURRENT_PROJECTS.map(project => project.title),
    required: true
  },
  {
    id: "whyFirstChoice",
    type: FormItemTypes.LONG_RESPONSE,
    title:
      "What skills make you a good fit for your first choice? How would you use them to make the project better?",
    required: true
  },
  {
    id: "whySecondChoice",
    type: FormItemTypes.LONG_RESPONSE,
    title:
      "What skills make you a good fit for your second choice? How would you use them to make the project better?",
    required: false
  },
  {
    id: "whyThirdChoice",
    type: FormItemTypes.LONG_RESPONSE,
    title:
      "What skills make you a good fit for your third choice? How would you use them to make the project better?",
    required: false
  },
  {
    id: "seeCreativeLabs",
    type: FormItemTypes.LONG_RESPONSE,
    title: "What would you like to to see from Creative Labs?",
    required: true
  },
  {
    id: "links",
    type: FormItemTypes.LONG_RESPONSE,
    title: "Time to brag! Drop us some links.",
    required: false
  },
  {
    id: "creativity",
    type: FormItemTypes.LONG_RESPONSE,
    title: "Solve for x.",
    required: false
  }
];

export { PROJECTS, CURRENT_PROJECTS, USERS, PROJECT_MEMBER_FORM };
