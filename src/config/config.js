import { FormItemTypes } from "../types/formItem";

const CURRENT_QUARTER = "W_18";

const PROJECTS = {
  F_18: {
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
  },
  W_18: {
    projects: [
      {
        title: "Pianotes",
        lead: "Lead: Rithika Srinivasan",
        text:
          "What it is: The purpose of Pianotes is to translate piano playing into sheet music. There will be a virtual piano displayed on the screen, and keys on the keyboard will correspond to certain piano notes. By pressing a record button and starting to play the virtual piano, the sheet music will begin to appear on the screen as you play. Once the recording ends, the sheet music will be downloadable in PDF format. The program will also have additional features, such as the option to change the time signature (beats per measure) and key that the music is played in.  ",
        desired:
          "Who we're looking for: I'm looking for people who are interested in music and computer science. They don't necessarily need to know how to read piano sheet music, but it would be preferred if they could. They should be well-versed in programming in Java and/or C++ as well."
      },
      {
        title: "Pondi",
        lead: "Lead: Don Le",
        text:
          "What it is: We are creating a virtual guided journal that sparks deep introspection and interesting conversations. With the web app, users can respond to prompts and see how their close friends answered the same questions. Of course, users can choose which of their entries private or shared. With thought-provoking prompts like “Think of something you lost recently. What are two positive experiences you gained from it?”, the journal helps people better understand their friends, and more importantly, themselves.",
        desired:
          "Who we're looking for: We are looking for artists and designers who have UI/UX experience. We are also looking for programmers with Python back end and web development experience."
      },
      {
        title: "Package Exchange",
        lead: "Lead: Sonia Xavier",
        text:
          "What it is: Having friends and family in Malaysia, Singapore, Australia, England, Italy, France, Germany and Switzerland made me hyper-aware of the inconvenience of moving products if I ever needed to send them gifts, food etc. Living in LA made me conscious of how much city traffic and product exchanges happen in the working world, there is a massive demand to get a file, package or delivery to someone. This product will creatively tackle to solve this problem by making the hectic process of exchanging more convenient!",
        desired:
          "Who we're looking for: Tech Lead, experience with app dev, design, UI/UX, and if you are really interested and wondering how you can contribute in a different way come talk to me!"
      },
      {
        title: "Mental Health Gratitude Journal",
        text: "Coming..."
      },
      {
        title: "Stories Around Us",
        lead: "Lead: Allen Miyazawa",
        text:
          "What it is: For many of us these days, it feels as if the United States has never been less united. The nation has become irrevocably fractured along political and ideological lines. We believe the root of the problem is the lack of understanding. With that in mind, we want to share stories of people around us. We want to share genuine experiences of people from all backgrounds to help everyone understand where some opinions are coming from. We are aiming to create a beautiful website displaying the stories, gradually expanding our project to other social network platforms such as Instagram and Facebook. At the end of the day, we are not trying to change people’s opinions, but rather to help people understand other opinions. If you are interested to help us achieve this vision, please apply!",
        desired:
          "Who we're looking for: Looking for front-end, back-end, full-stack web developers, photographers, designers, editors! Most importantly, we are looking for anyone passionate about our vision!"
      },
      {
        title: "Animated Interactive Learning",
        lead: "Lead: Jordan Murti",
        text:
          "What it is: An interactive and creativity driven learning experience. For this quarter we will choose one stem course to base a series of animated videos to more effectively teach and to engage students by playing different content based on user input. This will help students learn at their own pace, and enjoy learning even more by seeing your engaging animations.",
        desired:
          "Who we're looking for: Beginner CS Students Welcome! Have experience using Flash or Unity? Even better! Have experience acting or teaching or just want to start by speaking in front of a camera like Bill Nye? Come Over! You also can animate and edit videos? Even Better! Lastly do you love the Science or Math enough to try and Teach it? Please Come! Also Let me know what types of programs and code you can use (Motion, After Effects, Xcode, Visual Studio, C#, HTML, etc...)"
      },
      {
        title: "TTYL: Marketing",
        lead: "Lead: Sweena Mangal",
        text:
          "What it is: Continuation of a project last quarter in working with a social media venture backed startup. However, this time we are tackling a different area for the company, such as marketing, brand and logo design, etc.",
        desired:
          "Who we're looking for: I am looking for people who have a passion for marketing, know what makes people want to keep using specific apps, and have a unique perspective on different situations. Branding strategy experience is a huge plus.  Must be able to commit time once a week during the day for transit to their office."
      },
      {
        title: "TTYL: Design",
        lead: "Lead: Emmy Cao",
        text:
          "What it is: Continuation of a project last quarter in working with a social media venture backed startup. This project team will work on the product design of an early stage social media communication app. We'll be working on implementing a broad feature, which is currently undecided and will be up to the interests of the team members.",
        desired:
          "Who we're looking for: People interested in product design and user experience design. Must be able to commit time once a week during the day for transit to their office."
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
    title: "Describe a creative project you've worked on recently.",
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
    title: "What skills make you a good fit for your first choice?",
    required: true
  },
  {
    id: "whySecondChoice",
    type: FormItemTypes.LONG_RESPONSE,
    title: "What skills make you a good fit for your second choice?",
    required: false
  },
  {
    id: "whyThirdChoice",
    type: FormItemTypes.LONG_RESPONSE,
    title: "What skills make you a good fit for your third choice?",
    required: false
  },
  {
    id: "seeCreativeLabs",
    type: FormItemTypes.LONG_RESPONSE,
    title: "What would you like to to see from Creative Labs?",
    required: false
  },
  {
    id: "links",
    type: FormItemTypes.LONG_RESPONSE,
    title: "Time to brag! Drop us some links. (portfolio, github, etc.)",
    required: false
  },
  {
    id: "creativity",
    type: FormItemTypes.LONG_RESPONSE,
    title: "If you were a beverage, which would you be and why?",
    required: false
  }
];

export { PROJECTS, CURRENT_PROJECTS, USERS, PROJECT_MEMBER_FORM };
