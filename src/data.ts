import { Committee, TeamMember, ScheduleDay } from "./types";

export const CONFIG = {
  registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeItiD58WkxK9T5kDm_CIRXALcQLTaXaVmVeVu-UVslkLyf-w/viewform?usp=header",
  dates: "25th–27th Dec, 2026",
  day1: "25th Dec",
  day2: "26th Dec",
  day3: "27th Dec",
  fee: "₹1,799",
  deadline: "Dec 20th"
};

export const COMMITTEES_DATA: Committee[] = [
  {
    abbr: "UNSC",
    name: "United Nations Security Council",
    tag: "Advanced",
    agenda: "Addressing the weaponization of Artificial Intelligence in global conflict zones.",
    desc: "The UN's primary decision-making body on international security. Delegates address shifting conflicts where binding resolutions and veto mechanics dictate outcomes. Requires disciplined research into military doctrine, statecraft, and unilateral foreign policy."
  },
  {
    abbr: "UNHRC",
    name: "UN Human Rights Council",
    tag: "Intermediate",
    agenda: "Protecting digital privacy and freedom of expression in the era of mass surveillance.",
    desc: "Examines state surveillance, algorithmic tracking, and civil liberties across digital borders. Delegates will debate international monitoring standards, statutory privacy guarantees, and human rights enforcement mechanisms."
  },
  {
    abbr: "UNGA",
    name: "UN General Assembly",
    tag: "Beginner–Intermediate",
    agenda: "Sustainable urban development: Creating resilient cities for 2050.",
    desc: "Universal-membership diplomacy where all 193 nations hold equal voting weight. Ideal for mastering multilateral coalition building, bloc voting, and comprehensive treaty language."
  },
  {
    abbr: "LOK",
    name: "Lok Sabha",
    tag: "Intermediate",
    agenda: "Legislative reforms for the gig economy and worker rights in modern India.",
    desc: "High-tempo domestic parliamentary debate. Delegates represent Members of Parliament navigating real-time legislative amendments, Zero Hour questions, points of order, and party floor management."
  },
  {
    abbr: "UNCSW",
    name: "Commission on Status of Women",
    tag: "All Levels",
    agenda: "Economic empowerment of women through decentralized finance and technology.",
    desc: "Focuses on closing structural economic gaps through digital finance, property rights, and micro-lending access, delivering concrete policy recommendations to member states."
  },
  {
    abbr: "G20",
    name: "Group of Twenty",
    tag: "Advanced",
    agenda: "Global debt restructuring and financial stability for emerging economies.",
    desc: "Consensus-driven economic summit addressing sovereign debt distress, capital liquidity, and supply chain vulnerability across developed and emerging economies."
  },
  {
    abbr: "IP",
    name: "International Press",
    tag: "All Levels",
    agenda: "Media ethics and reporting in a post-truth world.",
    desc: "Independent press corps covering committee proceedings in real time. Journalists question delegates during press conferences, publish daily dispatches, and scrutinize bloc negotiations."
  }
];

export const TEAM_DATA: TeamMember[] = [
  { 
    initials: "SG", 
    name: "Aarav Mehta", 
    role: "Secretary General", 
    image: "https://lh3.googleusercontent.com/aida/AP1WRLuDHxuBVqyCWCSlRoVRR7NjN05cyNTfInFp1jANdI8R_7ph_A533FfSjLqDJaYdb-oghBQxvzOZjJVXGBquLqSXuSTOS2lpM_Vq4zVEalARPRG5WuyAxP4tTu53YC316yTQH2mj2QeYoiPPQGtXeZVNBj1yp6Nd-gcOTyRFWS8OZJl-eQQ2ZeJ5bw9KvC51030NEvu-7CEbr-H8V02OCdqdtmNsmnJAmhd5tTc1Q6ew0pl0_tEr8J8yCnM",
    bio: "Circuit veteran with over 15 conferences as delegate and chair, overseeing committee curriculum, procedural integrity, and executive board standards.", 
    ig: "#", ln: "#", email: "aarav@cdamun.com" 
  },
  { 
    initials: "DG", 
    name: "Isha Kapoor", 
    role: "Director General", 
    image: "https://lh3.googleusercontent.com/aida/AP1WRLuNqHyD51QbaDbLktFlE1G1EIbFS-cCqwyIYZm-BylK8xEkNrQYGhtRVBcrqeV6uueqRF2tt7bLpxBVLAmsVSc7DCfLCf09fAycNWFg9J-xOvYkrBDo8H4-FSsRAKN4aOzfY4eZGIrgGTZmEueWoekQFntmj2P0gNBV65OUw5OT4URs1OEgRX9xN9krO_w5TljaQ2zoxm01nFhlN5c6sHnc3E08df_YSnxUhGMl6zaVYTLzuZaYJ_eRhtg",
    bio: "Directs conference administration, institutional outreach, and executive secretariat execution for CDA Season 1.", 
    ig: "#", ln: "#", email: "isha@cdamun.com" 
  },
  { 
    initials: "AR", 
    name: "Aditya Rajpurohit", 
    role: "Founding Advisor", 
    image: null,
    bio: "Provides strategic counsel, governance oversight, and institutional guidance across all conference affairs.", 
    ig: "https://www.instagram.com/aad1tyeaa?obrf=MXUxazNsZGhqNGl4dg==", 
    ln: "#", 
    email: "rajpurohitaditya683@gmail.com" 
  },
  { 
    initials: "DJ", 
    name: "Dhruv Raj Jain", 
    role: "Head of Relations", 
    image: null,
    bio: "Manages school and collegiate delegation relations, group registrations, and institutional partnerships.", 
    ig: "https://instagram.com/dhruv_raj_jain", 
    ln: "#", 
    email: "dhruvrajjain1@gmail.com" 
  },
  { 
    initials: "MJ", 
    name: "Mustafa Jaipuri", 
    role: "Head of Operations", 
    image: null,
    bio: "Oversees on-ground volunteer teams, session coordination, and hall management during the three-day conference.", 
    ig: "https://instagram.com/mustafajaipuri", 
    ln: "#", 
    email: "jaipurimustafa@gmail.com" 
  },
  { 
    initials: "NG", 
    name: "Nishant Garg", 
    role: "Head of Technology", 
    image: null,
    bio: "Builds and maintains the conference digital infrastructure, registration systems, and live media services.", 
    ig: "https://instagram.com/nishant.__garg", 
    ln: "https://www.linkedin.com/in/nishant-garg9929/?isSelfProfile=true", 
    email: "gargnishant498@gmail.com" 
  },
  { 
    initials: "PN", 
    name: "Priyal Narwani", 
    role: "Head of Marketing", 
    image: null,
    bio: "Drives conference branding, media partnerships, and digital delegate outreach across schools and universities.", 
    ig: "https://instagram.com/priyalnarwanii", 
    ln: "#", 
    email: "Priyalpriyalnarwani@gamil.com" 
  },
  { 
    initials: "MV", 
    name: "Mahika Vyas", 
    role: "Head of Marketing", 
    image: null,
    bio: "Directs creative design, social media campaigns, campus ambassador programs, and promotional strategy.", 
    ig: "https://instagram.com/mahikaavyas", 
    ln: "#", 
    email: "mahikavyas431@gmail.com" 
  }
];

export const SCHEDULE_DATA: ScheduleDay[] = [
  {
    dayName: "Day 1",
    dateStr: "25th Dec",
    items: [
      {
        time: "04:00 PM - 05:30 PM",
        title: "Opening Ceremony & Felicitation",
        desc: "Formal conference inauguration and felicitation of the Chief Guest and dignitaries."
      },
      {
        time: "05:30 PM - 06:30 PM",
        title: "Keynote & Sponsor Addresses",
        desc: "Keynote address by the Chief Guest and presentations by conference sponsors."
      },
      {
        time: "06:30 PM - 08:00 PM",
        title: "Live Social: Vivek & Band",
        desc: "Live musical performance by Vivek and band, followed by delegate socials and networking."
      }
    ]
  },
  {
    dayName: "Day 2",
    dateStr: "26th Dec",
    items: [
      {
        time: "10:00 AM - 10:30 AM",
        title: "Delegate Arrival & Check-In",
        desc: "Chamber registration, attendance verification, and committee briefing."
      },
      {
        time: "10:30 AM - 12:30 PM",
        title: "Committee Session I",
        desc: "Roll call, formal agenda adoption, opening speeches, and General Speakers List."
      },
      {
        time: "12:30 PM - 01:30 PM",
        title: "Lunch Break & Lobbying",
        desc: "Lunch service and informal unmoderated lobbying."
      },
      {
        time: "01:35 PM - 04:35 PM",
        title: "Committee Session II",
        desc: "Working paper drafting, moderated caucuses, and crisis updates."
      },
      {
        time: "04:35 PM - 05:15 PM",
        title: "High Tea & Informal Caucus",
        desc: "Refreshment break and cross-bloc consultations."
      },
      {
        time: "05:30 PM onwards",
        title: "Delegate Socials",
        desc: "Evening cultural events, entertainment, and delegate mixer."
      }
    ]
  },
  {
    dayName: "Day 3",
    dateStr: "27th Dec",
    items: [
      {
        time: "10:00 AM - 10:30 AM",
        title: "Delegate Assembly & Roll Call",
        desc: "Morning attendance, chamber roll call, and briefing for final proceedings."
      },
      {
        time: "10:30 AM - 12:30 PM",
        title: "Committee Session III",
        desc: "Resolution drafting, amendment debates, and sponsor defense."
      },
      {
        time: "12:30 PM - 01:30 PM",
        title: "Lunch Break",
        desc: "Lunch service and informal bloc coordination."
      },
      {
        time: "01:35 PM - 04:35 PM",
        title: "Committee Session IV",
        desc: "Formal voting procedure, resolution passage, and committee adjournment."
      },
      {
        time: "04:35 PM - 05:35 PM",
        title: "Closing & Valedictory Ceremony",
        desc: "Announcement of committee awards, certificate distribution, and Secretariat closing address."
      }
    ]
  }
];
