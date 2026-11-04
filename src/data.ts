import { Committee, TeamMember, ScheduleDay } from "./types";

export const CONFIG = {
  registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeItiD58WkxK9T5kDm_CIRXALcQLTaXaVmVeVu-UVslkLyf-w/viewform?usp=header",
  dates: "Dec, 2026",
  day1: "11th Dec",
  day2: "12th Dec",
  day3: "13th Dec", // Adjusted matching 2026 flow
  fee: "₹1,499",
  deadline: "Dec 1st"
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
    initials: "PR", 
    name: "Isha Kapoor", 
    role: "President", 
    image: "https://lh3.googleusercontent.com/aida/AP1WRLuNqHyD51QbaDbLktFlE1G1EIbFS-cCqwyIYZm-BylK8xEkNrQYGhtRVBcrqeV6uueqRF2tt7bLpxBVLAmsVSc7DCfLCf09fAycNWFg9J-xOvYkrBDo8H4-FSsRAKN4aOzfY4eZGIrgGTZmEueWoekQFntmj2P0gNBV65OUw5OT4URs1OEgRX9xN9krO_w5TljaQ2zoxm01nFhlN5c6sHnc3E08df_YSnxUhGMl6zaVYTLzuZaYJ_eRhtg",
    bio: "Leads conference planning, partner institutions, and overall conference execution for CDA Season 1.", 
    ig: "#", ln: "#", email: "isha@cdamun.com" 
  },
  { 
    initials: "CC", 
    name: "Rohan Das", 
    role: "Conference Convenor", 
    image: null,
    bio: "Directs venue logistics, event schedules, hospitality, and delegate support services.", 
    ig: "#", ln: "#", email: "rohan@cdamun.com" 
  },
  { 
    initials: "DJ", 
    name: "Dhruv Raj Jain", 
    role: "Vice President", 
    image: null,
    bio: "Manages school and collegiate delegation relations, group registrations, and institutional partnerships.", 
    ig: "https://instagram.com/dhruv_raj_jain", 
    ln: "#", 
    email: "dhruvrajjain1@gmail.com" 
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
    initials: "MJ", 
    name: "Mustafa Jaipuri", 
    role: "Head of Operations", 
    image: null,
    bio: "Oversees on-ground volunteer teams, session coordination, and hall management during the three-day conference.", 
    ig: "https://instagram.com/mustafajaipuri", 
    ln: "#", 
    email: "jaipurimustafa@gmail.com" 
  }
];

export const SCHEDULE_DATA: ScheduleDay[] = [
  {
    dayName: "Day 1",
    dateStr: "11th Dec",
    items: [
      {
        time: "09:00 AM - 10:30 AM",
        title: "Inauguration Ceremony",
        desc: "Opening address by the Secretary General, chief guest address, and procedural briefing for delegates."
      },
      {
        time: "11:00 AM - 01:00 PM",
        title: "Committee Session I",
        desc: "Roll call, formal agenda adoption, opening speeches, and the initial General Speakers List."
      },
      {
        time: "01:00 PM - 02:00 PM",
        title: "Lunch Break & Lobbying",
        desc: "Informal consultations, unmoderated caucus, and preliminary bloc formation."
      },
      {
        time: "02:00 PM - 05:30 PM",
        title: "Committee Session II",
        desc: "Working paper drafting, moderated caucuses, and scheduled crisis updates."
      },
      {
        time: "07:00 PM onwards",
        title: "Cultural Evening & Socials",
        desc: "Delegate social event with live performances and networking mixers."
      }
    ]
  },
  {
    dayName: "Day 2",
    dateStr: "12th Dec",
    items: [
      {
        time: "09:30 AM - 12:00 PM",
        title: "Morning Committee Session III",
        desc: "Bloc consolidation, working paper mergers, and draft resolution submission."
      },
      {
        time: "12:00 PM - 02:00 PM",
        title: "Voting Procedure",
        desc: "Formal presentation of draft resolutions, debate on amendments, and roll-call voting."
      },
      {
        time: "02:00 PM - 03:00 PM",
        title: "Lunch & Reflection",
        desc: "Delegation debriefs, official cohort photographs, and feedback collection."
      },
      {
        time: "03:00 PM - 05:30 PM",
        title: "Closing & Valedictory",
        desc: "Announcement of committee awards, certificate distribution, and closing remarks by the Secretariat."
      }
    ]
  },
  {
    dayName: "Day 3",
    dateStr: "13th Dec",
    items: [
      {
        time: "10:00 AM - 01:00 PM",
        title: "Grand Plenary Session",
        desc: "Joint cross-committee plenary reviewing resolutions passed across all chambers."
      },
      {
        time: "01:00 PM - 03:00 PM",
        title: "Farewell Networking Lunch",
        desc: "Closing lunch, final certificate collection, and Secretariat wrap-up."
      }
    ]
  }
];
