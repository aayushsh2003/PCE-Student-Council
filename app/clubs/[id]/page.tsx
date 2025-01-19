import { notFound } from 'next/navigation'
import ClubPage from '@/components/ClubPage'

const clubs = [
  { 
    id: "gdsc",
    name: "Google Developer Student Club (GDSC)", 
    description: "GDSC is a community of students passionate about Google technologies. We foster learning, innovation, and collaboration in various fields of technology.",
    category: "Technology",
    logo: "/logos/gdsc.png",
    color: "from-blue-400 to-blue-600",
    history: "Founded in 2020, GDSC has quickly become the hub for tech enthusiasts on campus. We've grown from a small group of 20 students to over 200 active members.",
    howToJoin: "Attend our orientation session at the beginning of each semester and fill out an online application. Selection is based on your passion for technology and willingness to learn and contribute.",
    benefits: [
      "Access to Google technologies and resources",
      "Hands-on workshops and coding sessions",
      "Networking opportunities with industry professionals",
      "Participation in global GDSC events and hackathons",
      "Leadership and project management experience"
    ],
    leadership: [
      { name: "Aditya Sharma", role: "Lead", department: "Computer Science Engineering" },
      { name: "Priya Patel", role: "Technical Lead", department: "Information Technology" },
      { name: "Rahul Gupta", role: "Event Coordinator", department: "Electronics Engineering" },
    ],
    contactPerson: { name: "Aditya Sharma", email: "gdsc.lead@poornima.edu.in" },
    upcomingEvents: [
      { name: "Flutter Workshop", date: "2023-07-15", time: "14:00", location: "Tech Hub, Main Building" },
      { name: "Machine Learning Bootcamp", date: "2023-07-22", time: "10:00", location: "AI Lab, CS Department" },
      { name: "Google Cloud Study Jam", date: "2023-08-05", time: "11:00", location: "Online (Google Meet)" },
    ],
    pastEvents: [
      { name: "Android App Development Workshop", date: "2023-05-20", description: "Hands-on session on building Android apps using Kotlin" },
      { name: "Google I/O Extended", date: "2023-05-12", description: "Livestream and discussion of Google I/O keynote and sessions" },
      { name: "Web Development with Angular", date: "2023-04-08", description: "Introduction to Angular framework and its applications" },
    ],
    achievements: [
      "Best Tech Club Award 2022 by Poornima University",
      "1st place in Smart India Hackathon 2022, Software Edition",
      "Organized DevFest 2022 with over 500 participants",
      "Successfully conducted 20+ workshops and events in the last academic year"
    ],
    resources: [
      { name: "GDSC Handbook", url: "/docs/gdsc-handbook.pdf" },
      { name: "Tech Stack Roadmaps", url: "/docs/tech-roadmaps.pdf" },
      { name: "Past Project Showcases", url: "/docs/gdsc-projects.pdf" },
    ],
    gallery: [
      { url: "/images/gdsc-devfest.jpg", alt: "GDSC DevFest 2022" },
      { url: "/images/gdsc-workshop.jpg", alt: "Android Workshop" },
      { url: "/images/gdsc-hackathon.jpg", alt: "Smart India Hackathon Winners" },
      { url: "/images/gdsc-team.jpg", alt: "GDSC Core Team" },
    ],
    socialMedia: {
      facebook: "https://facebook.com/gdsc.poornima",
      instagram: "https://instagram.com/gdsc.poornima",
      twitter: "https://twitter.com/gdsc_poornima",
      linkedin: "https://linkedin.com/company/gdsc-poornima",
    },
  },
  { 
    id: "his",
    name: "Helping In Silence (HIS)", 
    description: "HIS is a student-led initiative dedicated to community service and social impact. We work silently but effectively to make a difference in the lives of those in need.",
    category: "Community Service",
    logo: "/logos/his.png",
    color: "from-green-400 to-green-600",
    history: "Established in 2018, HIS began as a small group of students who wanted to give back to the community. Today, we've impacted thousands of lives through our various initiatives.",
    howToJoin: "We welcome all students who are passionate about social service. Attend our monthly open house to learn more about our activities and sign up as a volunteer.",
    benefits: [
      "Opportunity to make a real difference in the community",
      "Develop leadership and organizational skills",
      "Network with like-minded individuals and NGOs",
      "Gain valuable experience in project management and teamwork",
      "Personal growth and satisfaction from helping others"
    ],
    leadership: [
      { name: "Ananya Reddy", role: "President", department: "Social Work" },
      { name: "Vikram Singh", role: "Vice President", department: "Psychology" },
      { name: "Zoya Khan", role: "Outreach Coordinator", department: "Mass Communication" },
    ],
    contactPerson: { name: "Ananya Reddy", email: "his.president@poornima.edu.in" },
    upcomingEvents: [
      { name: "Blood Donation Camp", date: "2023-07-20", time: "09:00", location: "University Health Center" },
      { name: "Tree Plantation Drive", date: "2023-08-05", time: "07:00", location: "University Campus" },
      { name: "Clothes Distribution", date: "2023-08-15", time: "10:00", location: "Nearby Village" },
    ],
    pastEvents: [
      { name: "Food Distribution Drive", date: "2023-06-01", description: "Distributed meals to 500+ homeless individuals" },
      { name: "Education Awareness Campaign", date: "2023-05-15", description: "Conducted workshops in 5 government schools" },
      { name: "Cleanliness Drive", date: "2023-04-22", description: "Cleaned up local park and planted 100 trees" },
    ],
    achievements: [
      "Best Social Impact Club 2022 by Poornima University",
      "Recognized by the local government for Covid-19 relief efforts",
      "Successfully completed 50+ community service projects",
      "Raised over ₹5 lakhs for various social causes in the last year"
    ],
    resources: [
      { name: "Volunteer Handbook", url: "/docs/his-volunteer-guide.pdf" },
      { name: "Project Reports", url: "/docs/his-project-reports.pdf" },
      { name: "NGO Collaboration Guidelines", url: "/docs/his-ngo-collab.pdf" },
    ],
    gallery: [
      { url: "/images/his-blood-donation.jpg", alt: "Blood Donation Camp" },
      { url: "/images/his-tree-plantation.jpg", alt: "Tree Plantation Drive" },
      { url: "/images/his-food-distribution.jpg", alt: "Food Distribution" },
      { url: "/images/his-team.jpg", alt: "HIS Volunteer Team" },
    ],
    socialMedia: {
      facebook: "https://facebook.com/his.poornima",
      instagram: "https://instagram.com/his.poornima",
      twitter: "https://twitter.com/his_poornima",
    },
  },
  { 
    id: "udaan",
    name: "Udaan", 
    description: "Udaan is the aeromodelling and drone club of our college, dedicated to exploring the exciting world of aerial robotics and unmanned aerial vehicles.",
    category: "Engineering",
    logo: "/logos/udaan.png",
    color: "from-yellow-400 to-yellow-600",
    history: "Launched in 2019, Udaan has soared to new heights, quite literally! We started with simple paper plane competitions and have now advanced to building sophisticated drones and participating in national-level competitions.",
    howToJoin: "Interested students can apply at the beginning of each semester. We look for enthusiasm, basic understanding of aerodynamics, and willingness to learn. Experience in model aircraft building is a plus but not mandatory.",
    benefits: [
      "Hands-on experience in designing and building drones",
      "Participation in national and international aeromodelling competitions",
      "Access to state-of-the-art equipment and software",
      "Workshops on aerodynamics, flight mechanics, and drone programming",
      "Opportunities to work on real-world applications of UAV technology"
    ],
    leadership: [
      { name: "Arjun Mehta", role: "Captain", department: "Aerospace Engineering" },
      { name: "Neha Gupta", role: "Technical Head", department: "Electronics Engineering" },
      { name: "Ravi Kumar", role: "Design Lead", department: "Mechanical Engineering" },
    ],
    contactPerson: { name: "Arjun Mehta", email: "udaan.captain@poornima.edu.in" },
    upcomingEvents: [
      { name: "Drone Building Workshop", date: "2023-07-25", time: "14:00", location: "Robotics Lab" },
      { name: "Udaan Annual Air Show", date: "2023-08-10", time: "16:00", location: "University Sports Ground" },
      { name: "FPV Racing Competition", date: "2023-09-05", time: "10:00", location: "Udaan Flying Arena" },
    ],
    pastEvents: [
      { name: "Aeromodelling 101", date: "2023-05-05", description: "Introductory workshop for freshers" },
      { name: "Drone Photography Exhibition", date: "2023-04-15", description: "Showcased aerial photography by club members" },
      { name: "National Drone Competition", date: "2023-03-20", description: "Secured 2nd position in obstacle course challenge" },
    ],
    achievements: [
      "2nd Place in National Drone Racing Championship 2022",
      "Best Innovation Award for Agricultural Drone Project at Tech Expo 2023",
      "Successfully completed a government-funded project on forest mapping using drones",
      "Featured in National Geographic documentary on student innovation"
    ],
    resources: [
      { name: "Drone Building Guide", url: "/docs/udaan-drone-guide.pdf" },
      { name: "Aerodynamics Fundamentals", url: "/docs/udaan-aero-basics.pdf" },
      { name: "Safety Protocols", url: "/docs/udaan-safety-manual.pdf" },
    ],
    gallery: [
      { url: "/images/udaan-drone-race.jpg", alt: "Udaan Drone Racing Event" },
      { url: "/images/udaan-workshop.jpg", alt: "Drone Building Workshop" },
      { url: "/images/udaan-exhibition.jpg", alt: "Aerial Photography Exhibition" },
      { url: "/images/udaan-team.jpg", alt: "Udaan Team with Their Creations" },
    ],
    socialMedia: {
      facebook: "https://facebook.com/udaan.poornima",
      instagram: "https://instagram.com/udaan.poornima",
      youtube: "https://youtube.com/udaanpoornima",
    },
  },
  { 
    id: "literary",
    name: "Literary Club", 
    description: "The Literary Club is a haven for book lovers, aspiring writers, and eloquent speakers. We celebrate the power of words in all their forms.",
    category: "Arts",
    logo: "/logos/literary.png",
    color: "from-purple-400 to-purple-600",
    history: "Founded in 2015, our club has been nurturing the literary talents of students for years. We've grown from small book discussion groups to hosting large-scale literary festivals and publishing our own anthology.",
    howToJoin: "We welcome all students who have a passion for literature and language. Attend our open mic sessions held every month to get a taste of our activities and register your interest.",
    benefits: [
      "Platform to showcase your writing and speaking skills",
      "Access to a vast library of books and literary resources",
      "Workshops on creative writing, public speaking, and literary analysis",
      "Opportunities to participate in inter-college literary competitions",
      "Chance to get your work published in our annual anthology"
    ],
    leadership: [
      { name: "Ishaan Patel", role: "President", department: "English Literature" },
      { name: "Aditi Nair", role: "Editor-in-Chief", department: "Journalism" },
      { name: "Rohan Singhania", role: "Event Coordinator", department: "Liberal Arts" },
    ],
    contactPerson: { name: "Ishaan Patel", email: "literary.president@poornima.edu.in" },
    upcomingEvents: [
      { name: "Poetry Slam", date: "2023-07-30", time: "18:00", location: "Amphitheater" },
      { name: "Book Club Meeting: 1984 by George Orwell", date: "2023-08-12", time: "16:00", location: "Library Discussion Room" },
      { name: "Creative Writing Workshop", date: "2023-08-25", time: "14:00", location: "Seminar Hall" },
    ],
    pastEvents: [
      { name: "Annual Literary Festival 'Wordsmith'", date: "2023-04-10", description: "Three-day event featuring author talks, competitions, and book fair" },
      { name: "Debate Championship", date: "2023-03-15", description: "Inter-college debate on contemporary social issues" },
      { name: "Short Story Contest", date: "2023-02-20", description: "University-wide competition with cash prizes" },
    ],
    achievements: [
      "Published 'Inklings', our annual anthology featuring student writings",
      "Won Best Literary Club Award at National College Fest 2022",
      "Organized successful literary festival with 1000+ attendees",
      "Club members have won numerous state and national level writing competitions"
    ],
    resources: [
      { name: "Creative Writing Guide", url: "/docs/literary-writing-guide.pdf" },
      { name: "Public Speaking Tips", url: "/docs/literary-speaking-tips.pdf" },
      { name: "Literary Analysis Techniques", url: "/docs/literary-analysis.pdf" },
    ],
    gallery: [
      { url: "/images/literary-festival.jpg", alt: "Annual Literary Festival" },
      { url: "/images/literary-poetry-slam.jpg", alt: "Poetry Slam Event" },
      { url: "/images/literary-book-club.jpg", alt: "Book Club Meeting" },
      { url: "/images/literary-team.jpg", alt: "Literary Club Core Team" },
    ],
    socialMedia: {
      facebook: "https://facebook.com/literary.poornima",
      instagram: "https://instagram.com/literary.poornima",
      goodreads: "https://goodreads.com/group/literary_poornima",
    },
  },
  { 
    id: "helping-hands",
    name: "Helping Hands", 
    description: "Helping Hands is a volunteer organization focused on community outreach and support. We believe in the power of small acts of kindness to create big changes.",
    category: "Community Service",
    logo: "/logos/helping-hands.png",
    color: "from-red-400 to-red-600",
    history: "Established in 2017, Helping Hands started as a small group of friends who wanted to make a difference. Today, we've grown into a large network of volunteers committed to various social causes.",
    howToJoin: "We're always looking for passionate volunteers! Attend our monthly orientation session and sign up for projects that interest you. No long-term commitment required - help when you can!",
    benefits: [
      "Opportunity to contribute to meaningful social causes",
      "Flexible volunteering schedule",
      "Develop empathy, leadership, and organizational skills",
      "Network with diverse groups of people",
      "Gain valuable experience for personal and professional growth"
    ],
    leadership: [
      { name: "Sanya Malhotra", role: "Coordinator", department: "Social Work" },
      { name: "Arjun Kapoor", role: "Outreach Head", department: "Mass Communication" },
      { name: "Meera Desai", role: "Project Manager", department: "Management Studies" },
    ],
    contactPerson: { name: "Sanya Malhotra", email: "helpinghands.coordinator@poornima.edu.in" },
    upcomingEvents: [
      { name: "Community Clean-up Drive", date: "2023-07-22", time: "08:00", location: "City Park" },
      { name: "Senior Citizens' Day Out", date: "2023-08-07", time: "10:00", location: "Local Retirement Home" },
      { name: "Back-to-School Supply Drive", date: "2023-08-20", time: "09:00", location: "University Campus" },
    ],
    pastEvents: [
      { name: "Winter Clothing Distribution", date: "2023-01-15", description: "Distributed warm clothes to 200+ homeless individuals" },
      { name: "Health Awareness Camp", date: "2023-03-10", description: "Organized free health check-ups in underprivileged areas" },
      { name: "Children's Day Celebration", date: "2022-11-14", description: "Hosted a fun day for kids from local orphanages" },
    ],
    achievements: [
      "Recognized as 'Outstanding Youth Volunteer Group' by the City Council in 2022",
      "Successfully completed 100+ community service projects since inception",
      "Raised over ₹10 lakhs for various charitable causes in the last year",
      "Established partnerships with 20+ local NGOs and government bodies"
    ],
    resources: [
      { name: "Volunteer Handbook", url: "/docs/helping-hands-handbook.pdf" },
      { name: "Project Planning Guide", url: "/docs/helping-hands-project-guide.pdf" },
      { name: "Community Outreach Tips", url: "/docs/helping-hands-outreach-tips.pdf" },
    ],
    gallery: [
      { url: "/images/helping-hands-cleanup.jpg", alt: "Community Clean-up Drive" },
      { url: "/images/helping-hands-health-camp.jpg", alt: "Health Awareness Camp" },
      { url: "/images/helping-hands-children-day.jpg", alt: "Children's Day Celebration" },
      { url: "/images/helping-hands-team.jpg", alt: "Helping Hands Volunteer Team" },
    ],
    socialMedia: {
      facebook: "https://facebook.com/helpinghands.poornima",
      instagram: "https://instagram.com/helpinghands.poornima",
      twitter: "https://twitter.com/helpinghands_pu",
    },
  },
  { 
    id: "wise",
    name: "Women in Science and Engineering (WISE)", 
    description: "WISE is dedicated to empowering and supporting women in STEM fields. We aim to create a community that fosters growth, innovation, and leadership among women in technical disciplines.",
    category: "Academic",
    logo: "/logos/wise.png",
    color: "from-pink-400 to-pink-600",
    history: "Founded in 2019, WISE was established to address the gender gap in STEM fields. We've grown from a small support group to a dynamic organization that's making waves in the tech and engineering sectors.",
    howToJoin: "We welcome all women in STEM fields and allies who support our cause. Attend our introductory meeting at the beginning of each semester to learn more and become a member.",
    benefits: [
      "Mentorship programs pairing students with industry professionals",
      "Workshops on technical skills and career development",
      "Networking opportunities with successful women in STEM",
      "Access to internship and job opportunities through our industry partners",
      "Platform to showcase your research and projects"
    ],
    leadership: [
      { name: "Dr. Anjali Sharma", role: "Faculty Advisor", department: "Computer Science" },
      { name: "Riya Patel", role: "President", department: "Electrical Engineering" },
      { name: "Zara Khan", role: "Events Coordinator", department: "Biotechnology" },
    ],
    contactPerson: { name: "Riya Patel", email: "wise.president@poornima.edu.in" },
    upcomingEvents: [
      { name: "Women in Tech Panel Discussion", date: "2023-07-28", time: "15:00", location: "Main Auditorium" },
      { name: "Coding Workshop: Python for Data Science", date: "2023-08-10", time: "10:00", location: "Computer Lab 2" },
      { name: "WISE Mentorship Program Kickoff", date: "2023-08-22", time: "14:00", location: "Conference Hall" },
    ],
    pastEvents: [
      { name: "Annual WISE Conference", date: "2023-03-08", description: "Full-day event featuring keynote speakers, workshops, and networking sessions" },
      { name: "Girls Who Code Summer Camp", date: "2022-06-15", description: "Two-week coding camp for high school girls" },
      { name: "Women in Engineering Day Celebration", date: "2022-06-23", description: "Showcased projects and research by women engineers" },
    ],
    achievements: [
      "Increased women's enrollment in STEM programs by 30% since our inception",
      "Organized the largest women in tech conference in the region with 500+ attendees",
      "Established partnerships with 15+ tech companies for internships and mentorship",
      "Launched a successful peer mentoring program connecting 100+ mentor-mentee pairs"
    ],
    resources: [
      { name: "WISE Career Guide", url: "/docs/wise-career-guide.pdf" },
      { name: "Technical Interview Prep", url: "/docs/wise-interview-prep.pdf" },
      { name: "Research Opportunities in STEM", url: "/docs/wise-research-opps.pdf" },
    ],
    gallery: [
      { url: "/images/wise-conference.jpg", alt: "Annual WISE Conference" },
      { url: "/images/wise-coding-workshop.jpg", alt: "Python Coding Workshop" },
      { url: "/images/wise-mentorship.jpg", alt: "WISE Mentorship Program" },
      { url: "/images/wise-team.jpg", alt: "WISE Leadership Team" },
    ],
    socialMedia: {
      facebook: "https://facebook.com/wise.poornima",
      instagram: "https://instagram.com/wise.poornima",
      linkedin: "https://linkedin.com/company/wise-poornima",
    },
  },
  { 
    id: "cultural-society",
    name: "Cultural Society", 
    description: "The Cultural Society is the heart of artistic expression and cultural celebration on campus. We organize events that showcase the rich diversity of our student body and promote cultural exchange.",
    category: "Arts",
    logo: "/logos/cultural-society.png",
    color: "from-orange-400 to-orange-600",
    history: "Established at the founding of our university, the Cultural Society has been the cornerstone of campus life for decades. We've evolved from small cultural gatherings to hosting grand festivals that are highlights of the academic year.",
    howToJoin: "All students are welcome to join! Attend our cultural orientation at the start of each semester and sign up for the activities that interest you most.",
    benefits: [
      "Opportunity to showcase your talents in music, dance, drama, and more",
      "Exposure to diverse cultures and art forms",
      "Develop organizational and leadership skills through event management",
      "Represent the university in inter-college cultural competitions",
      "Access to state-of-the-art facilities for practice and performance"
    ],
    leadership: [
      { name: "Prof. Rajesh Kumar", role: "Faculty Advisor", department: "Performing Arts" },
      { name: "Aisha Kapoor", role: "President", department: "Fine Arts" },
      { name: "Siddharth Nair", role: "Event Manager", department: "Mass Communication" },
    ],
    contactPerson: { name: "Aisha Kapoor", email: "cultural.president@poornima.edu.in" },
    upcomingEvents: [
      { name: "Annual Cultural Fest 'Rang Tarang'", date: "2023-09-15", time: "10:00", location: "University Campus" },
      { name: "Classical Music Night", date: "2023-08-05", time: "19:00", location: "Open Air Theatre" },
      { name: "Inter-College Dance Competition", date: "2023-08-20", time: "14:00", location: "Main Auditorium" },
    ],
    pastEvents: [
      { name: "Diwali Mela", date: "2022-10-20", description: "Grand celebration with cultural performances and food festival" },
      { name: "Theatre Workshop", date: "2023-02-15", description: "Week-long workshop conducted by renowned theatre personalities" },
      { name: "International Culture Day", date: "2023-05-21", description: "Showcased cultures from around the world through music, dance, and cuisine" },
    ],
    achievements: [
      "Winner of Best Cultural Society Award at National Youth Festival 2022",
      "Our dance troupe represented India at the International Folk Art Festival",
      "Successfully organized 'Rang Tarang' with 10,000+ footfall over 3 days",
      "Raised ₹5 lakhs through charity cultural show for flood relief"
    ],
    resources: [
      { name: "Event Planning Guide", url: "/docs/cultural-event-guide.pdf" },
      { name: "Cultural Diversity Handbook", url: "/docs/cultural-diversity.pdf" },
      { name: "Performing Arts Resources", url: "/docs/performing-arts-resources.pdf" },
    ],
    gallery: [
      { url: "/images/cultural-fest.jpg", alt: "Annual Cultural Fest 'Rang Tarang'" },
      { url: "/images/cultural-dance.jpg", alt: "Inter-College Dance Competition" },
      { url: "/images/cultural-music.jpg", alt: "Classical Music Night" },
      { url: "/images/cultural-team.jpg", alt: "Cultural Society Core Team" },
    ],
    socialMedia: {
      facebook: "https://facebook.com/cultural.poornima",
      instagram: "https://instagram.com/cultural.poornima",
      youtube: "https://youtube.com/culturalpoornima",
    },
  },
  // Add more clubs here...
]

export default function Club({ params }: { params: { id: string } }) {
  const club = clubs.find(c => c.id === params.id)

  if (!club) {
    notFound()
  }

  return <ClubPage club={club} />
}

