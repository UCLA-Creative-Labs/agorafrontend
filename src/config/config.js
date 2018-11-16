import { FormItemTypes } from "../types/formItem";

const CURRENT_QUARTER = "F_18";

const PROJECTS = {
  F_16: {
    label: "Fall 2016",
    projects: [
      {
        title: "Introduction to Prototyping",
        lead: ["Rishabh Agarwal"],
        text: ""
      },
      {
        title: "iOS for Beginners: Todo Application",
        lead: ["Jahan Cherian"],
        text: ""
      },
      {
        title: "Interactive Motion Graphics",
        lead: ["Rosalind Chang", "Allison Jeng"],
        text: ""
      },
      {
        title: "Animated Web Infographics",
        lead: ["Nina Ling"],
        text: ""
      },
      {
        title: "Visualizing LA",
        lead: ["Mihir Mathur"],
        text: ""
      }
    ]
  },
  W_17: {
    label: "Winter 2017",
    projects: [
      {
        title: "Quotebook",
        lead: ["Jahan Cherian"],
        text: ""
      },
      {
        title: "Philosophy of Photoshop",
        lead: ["Ruth Shaffer"],
        text: ""
      },
      {
        title: "Synesthize",
        lead: ["Nina Ling"],
        text: "",
        link: "http://www.synaesthetic.io/"
      },
      {
        title: "Processing and Kinect",
        lead: ["Anshul Aggarwal", "Rosalind Chang"],
        text: ""
      },
      {
        title: "Animated Web Infographics",
        lead: ["Nina Ling"],
        text: ""
      }
    ]
  },
  S_17: {
    label: "Spring 2017",
    projects: [
      {
        title: "Fashion in AR",
        lead: ["Lilyan Kris"],
        text: ""
      },
      {
        title: "VR Child's Journey",
        lead: ["Anshul Aggarwal", "Brendon Daugherty"],
        text: ""
      },
      {
        title: "Digital Music",
        lead: ["Gina Kim", "Alvin Chen"],
        text: ""
      },
      {
        title: "VR Perspectives and Puzzles",
        lead: ["Shree Dhamija"],
        text: ""
      },
      {
        title: "Physical States",
        lead: ["Nina Ling", "Max Woo"],
        text: ""
      }
    ]
  },
  F_17: {
    label: "Fall 2017",
    projects: [
      {
        title: "Stitched",
        lead: ["Gina Kim", "Jane Kim"],
        text: ""
      },
      {
        title: "Gravity PlayGround",
        lead: ["Nina Ling", "Will"],
        text: ""
      },
      {
        title: "WebGL Experience",
        lead: ["Bryan Wong"],
        text: ""
      },
      {
        title: "Narratively",
        lead: ["Rishabh Aggarwal", "Ellen"],
        text: ""
      }
    ]
  },
  W_18: {
    label: "Winter 2018",
    projects: [
      {
        title: "Blitzmoji AR",
        lead: ["Jade Bisht"],
        text: ""
      },
      {
        title: "Campus",
        lead: ["Jason Kuang"],
        text: ""
      },
      {
        title: "Fashion Lookbook Videos",
        lead: ["Dylan Han", "Rohan Kumar"],
        text: ""
      },
      {
        title: "Illuminate",
        lead: ["Bryan Ong", "April Ding"],
        text: ""
      },
      {
        title: "Interactive Data Arts for Charity",
        lead: ["Michael Yu", "Bryan Wong"],
        text: ""
      },
      {
        title: "Soundscapes",
        lead: ["Yvonne Chen", "Rosalind Chang"],
        text: ""
      }
    ]
  },
  S_18: {
    label: "Spring 2018",
    projects: [
      {
        title: "Introduction to Unity",
        lead: ["Anshul Aggarwal", "Simon Zhou"],
        text:
          "This project focuses on offering a deep dive into virtual reality (Unity) for beginners. Each week, project members will learn a new concept in VR, including but not limited to: speed level design, interactions, animation sequencing, scripting.",
        link: "http://cl-introtovr.surge.sh/"
      },
      {
        title: "Blender3d",
        lead: ["Kiana Abad", "Jade Bisht"],
        text: ""
      },
      {
        title: "Game & Dev",
        lead: ["Kartik Vinayak", "Wasiq Al Mamun"],
        text: ""
      },
      {
        title: "Genie",
        lead: ["Michael Yu", "Henry Yang"],
        text: ""
      },
      {
        title: "Orwell",
        lead: ["Karen Fann", "Baolinh Nguyen"],
        text: ""
      },
      {
        title: "Soundscapes",
        lead: ["Gina Kim"],
        text: ""
      },
      {
        title: "Metrospect LA Exploration Guide",
        lead: ["Antoine Delcaryre", "Ludi Zhu"],
        text: ""
      }
    ]
  },
  F_18: {
    label: "Fall 2018",
    projects: [
      {
        title: "Color",
        text:
          "A web application that explores the relationship between active drawing and music production. Give colorful drawings, get musical notes; A visuals music-alizer. Looking for: ~6 designers and Developers! :D"
      },
      {
        title: "Smart Mirror",
        text:
          "We’ll be experimenting with a novel user experience and building it in software and hardware. With the increasing development of Siri, Alexa, and Google Assistant, smart mirrors are an inevitable next step in IOT. Let’s make one! Looking for: 2-3 designers w/ experience designing web UI, 2-3 web devs w/ experience working with python backends and web APIs, with interest in designing a novel user experience."
      },
      {
        title: "Parallax 3D",
        text:
          "We will be creating a solution to make stereoscopic 3D gifs efficiently. Instead of using a specialized film camera we will be using digital cameras and scripting the process of exporting .gif files from photoshop. The ultimate goal of this project would be to use this technology for the demo day photoshoot and get everybody gif profile pictures for facebook. Here's an example of what these gifs look like: https://youtu.be/QbYtFMNSFzY. Looking for: Around 4 developers who have  an interest in photography and visual art would be a good fit for this team. For the shoot part, around 2 design/visual artists/photographers who can handle the photography equipment and collaborate to make a concept shoot"
      },
      {
        title: "Creative Labs Merch",
        text:
          "We will be working to launch the Creative Labs Merch line this quarter. starting from brainstorming designs to making a campaign and having a photoshoot and stuff. This is very beginner friendly and we will be teaching Adobe Suite along with creative skills. Anyone interested in learning how to design a brand as well as anyone who is interested in launching campaigns and advertising. Looking for: ~6 people interested in learning how to design a brand as well as anyone who is interested in launching campaigns and advertising."
      },
      {
        title: "Language Exchange Platform",
        text:
          "Aiming to build a website/app which will make it possible to connect with individuals within the same area/city for conversational language lessons. Something like an Uber/Tinder but for affordable and hassle-free foreign conversational lessons! Looking for: A team of around 15 people; all backgrounds welcome, especially ones with UI+UX, design and front&back end dev."
      },
      {
        title: "Satisfying workout",
        text:
          "We will be creating an interactive installation that gives the players a quick fun workout. Through the use of motion controlled sensors, the player will be controlling a character to help it complete a set of exercises. The characters will be made out of fun materials, like fireworks, liquids, slime..etc, giving the player a satisfying visual show as they unconsciously workout. Looking for: 2 people for the code, 1 for the character design, 1 for motion effects, and last person for sounds."
      },
      {
        title: "Reveries",
        text:
          "We're looking to make original music and videos, centered around a common narrative. Looking for: We are looking for 8-12 people (possibly open to more). On the audio side, we want music producers, people who play an instrument, and songwriters, while on the video side we're looking for videographers, filmmakers, animators, and photographers. Experience is preferred for both roles."
      },
      {
        title: "TTYL",
        text:
          "TTYL is a social a venture-backed consumer social media startup that is aiming to reduce the amount of screen time we spend when we communicate. We'll be working with them on potential product features and growth! Looking for: 4-5 product, UX, and growth-minded people who enjoy consumer social media!"
      }
    ]
  }
};

const CURRENT_PROJECTS = PROJECTS[CURRENT_QUARTER].projects;

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

export {
  PROJECTS,
  CURRENT_QUARTER,
  CURRENT_PROJECTS,
  USERS,
  PROJECT_MEMBER_FORM
};
