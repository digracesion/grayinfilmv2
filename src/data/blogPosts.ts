export interface BlogPost {
  id: string
  title: string
  description: string
  pubDate: string
  author: string
  tags: string[]
  externalUrl?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "building-a-social-life-in-japan-101",
    title: "Building a Social Life in Japan 101",
    description: "How do you make friends in Tokyo when you don't know anyone?",
    pubDate: "10/24/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "recommendations", "life", "japan"],
    externalUrl: "https://medium.com/japonica-publication/building-a-social-life-in-japan-101-c1f6f37eebe3"
  },
  {
    id: "minimalism-vs-maximalism-ux-design-in-japan",
    title: "Minimalism vs. Maximalism -- UX Design in Japan",
    description: "How does minimalism or maximalism influence UX Design In Japan?",
    pubDate: "10/05/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "design"],
    externalUrl: "https://bootcamp.uxdesign.cc/minimalism-vs-maximalism-ux-design-in-japan-85bcfb86e009"
  },
  {
    id: "knowledge-management-tools",
    title: "Knowledge Base Management Tools for Development Teams",
    description: "Recommended tools for knowledge base management for development teams",
    pubDate: "10/04/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "tools", "recommendations"],
    externalUrl: "https://digracesion.hashnode.dev/knowledge-base-management-tools-for-development-teams"
  },
  {
    id: "creating-issues-in-github",
    title: "Creating Issues in GitHub",
    description: "How to manage issues in GitHub and use templates",
    pubDate: "09/15/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "QA"],
    externalUrl: "https://digracesion.hashnode.dev/creating-issues-in-github"
  },
  {
    id: "working-with-tech-recruiters",
    title: "Working with Tech Recruiters in Japan",
    description: "I wrote an article based on my experience with working with tech recruiters while applying for a job in Japan.",
    pubDate: "08/15/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "tips", "recruitment", "japan"],
    externalUrl: "https://www.tokyodev.com/2023/08/15/working-with-tech-recruiters-in-japan"
  },
  {
    id: "japanese-ux-design",
    title: "Japanese UX Design",
    description: "Minimalism vs. Maximalism; UX Design in Japan",
    pubDate: "08/23/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "japan", "UX-UI", "QA"],
    externalUrl: "https://gamma.app/public/JapaneseUXDesign-q4rgxajxs1r06jz?mode=doc"
  },
  {
    id: "honey-the-kids-have-a-disconnection-problem",
    title: "Honey, the kids have a disconnection problem",
    description: "The negative effects technology has on people",
    pubDate: "08/18/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "technology"],
    externalUrl: "https://todorokis.medium.com/honey-the-kids-have-an-disconnection-problem-13757822d6fc"
  },
  {
    id: "modern-work-trends",
    title: "Modern Work Trends",
    description: "Flexi-time, Work From Home, and more work trends",
    pubDate: "08/03/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "technology"],
    externalUrl: "https://todorokis.medium.com/modern-work-trends-98dbec97d632"
  },
  {
    id: "tokyo-dev-interview",
    title: "Building Up Yaraku's QA Process from Scratch",
    description: "Interview with Paul regarding life as a QA Engineer in Yaraku for Tokyo Dev's Developer Stories",
    pubDate: "07/29/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "interview"],
    externalUrl: "https://www.tokyodev.com/companies/yaraku/interviews/mary-grygjeanne-grace-icay"
  },
  {
    id: "tips-for-interviewing-at-a-japanese-tech-company",
    title: "Tips for Interviewing at a Japanese Tech Company",
    description: "I wrote an article based on my experience with interviewing at Japanese tech companies, including interview tips!",
    pubDate: "06/19/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "tips", "japan"],
    externalUrl: "https://www.tokyodev.com/2023/06/19/tips-for-interviewing-at-japanese-tech-companies/"
  },
  {
    id: "creating-test-cases-in-jira",
    title: "Creating Test Cases In JIRA with Tricentis",
    description: "How to create test cases in JIRA with Tricentis",
    pubDate: "06/01/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "tips", "QA", "work-notes"],
    externalUrl: "https://digracesion.hashnode.dev/creating-test-cases-in-jira-with-tricentis"
  },
  {
    id: "wwc-event-recap-mentorship",
    title: "Women Who Code Event Recap--Empowering Yourself, Empowering Others--Mentorship Toolkit in Different Cultures",
    description: "Women Who Code Event Recap; (Mentorship) Empowering Yourself, Empowering Others--Mentorship Toolkit in Different Cultures",
    pubDate: "05/25/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "event-recap", "women-who-code"],
    externalUrl: "https://digracesion.hashnode.dev/women-who-code-event-recap-empowering-yourself-empowering-others-mentorship-toolkit-in-different-cultures"
  },
  {
    id: "working-as-a-filipino-software-developer-in-japan",
    title: "Working as a Filipino Software Developer in Japan",
    description: "I interviewed some Filipino software developers in Japan and shared the insights and experiences we all had as employees here in Japan",
    pubDate: "05/23/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "japan"],
    externalUrl: "https://www.tokyodev.com/2023/05/23/filipino-software-developers-in-japan/"
  },
  {
    id: "taco-event-recap",
    title: "Tokyo Agile Community - April 27th Event Recap",
    description: "Tokyo Agile Community (TACO) April 27th Event Recap",
    pubDate: "05/22/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "event-recap", "agile"],
    externalUrl: "https://digracesion.hashnode.dev/tokyo-agile-community-april-27th-event-recap"
  },
  {
    id: "creating-a-website-with-jekyll",
    title: "Creating a Website/Portfolio with Jekyll",
    description: "A guide on how to use Jekyll to create your personal website/portfolio",
    pubDate: "05/08/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "tips", "Development"],
    externalUrl: "https://digracesion.hashnode.dev/creating-a-websiteportfolio-with-jekyll"
  },
  {
    id: "rix-vs-notion-ai",
    title: "RIX vs. Notion AI - Writing an article on QA",
    description: "I asked RIX and Notion to both write an Article on Common QA Myths.",
    pubDate: "04/28/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "tips", "AI"],
    externalUrl: "https://digracesion.hashnode.dev/rix-vs-notion-ai-writing-an-article-on-qa"
  },
  {
    id: "getting-started-with-a-career-in-qa",
    title: "Getting Started with a Career in QA",
    description: "Here's a guide to help with shifting into a QA Career",
    pubDate: "04/27/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "tips", "QA"],
    externalUrl: "https://digracesion.hashnode.dev/getting-started-with-a-career-in-qa"
  },
  {
    id: "a-guide-on-how-to-write-test-cases",
    title: "A Guide on How to Write Test Cases",
    description: "How to write better test cases",
    pubDate: "04/26/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "work-notes", "QA"],
    externalUrl: "https://digracesion.hashnode.dev/a-guide-on-how-to-write-test-cases"
  },
  {
    id: "i-used-an-ai-to-make-a-presentation",
    title: "I Used An AI To Make A Presentation",
    description: "I asked an AI to make a presentation on the Software Quality Assurance Basics.",
    pubDate: "04/25/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "work-notes", "AI"],
    externalUrl: "https://digracesion.hashnode.dev/i-used-an-ai-to-make-a-presentation"
  },
  {
    id: "notes-on-okrs",
    title: "Notes on OKRs",
    description: "Some notes on Objective and Key Results (OKRs)",
    pubDate: "04/24/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "work-notes"],
    externalUrl: "https://digracesion.hashnode.dev/notes-on-okrs"
  },
  {
    id: "ewww-why-is-there-a-bug-in-my-code",
    title: "Ewww, why is there a bug in my code?",
    description: "An Introduction to Software Bugs, including bug tracking tool recommendations and creating your own bug ticket from a template",
    pubDate: "04/21/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "work-notes", "QA"],
    externalUrl: "https://digracesion.hashnode.dev/ewww-why-is-there-a-bug-in-my-code"
  },
  {
    id: "ui-design-principles",
    title: "UI Design Principles and the Importance of Usability Testing",
    description: "Discussing UI Design Principles and the Importance of Usability Testing",
    pubDate: "04/18/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "work-notes", "QA", "UX-UI"],
    externalUrl: "https://digracesion.hashnode.dev/ui-design-principles-and-the-importance-of-usability-testing"
  },
  {
    id: "fundamentals-of-test-management",
    title: "The Fundamentals of Test Management",
    description: "The Fundamentals of Test Management, as shared by Test Rail in their Free E-book",
    pubDate: "04/17/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "work-notes", "QA"],
    externalUrl: "https://digracesion.hashnode.dev/the-fundamentals-of-test-management"
  },
  {
    id: "scrum-guide-notes",
    title: "Scrum Guide Notes",
    description: "Notes on taking the Scrum Master certification exam",
    pubDate: "04/14/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "work-notes", "scrum"],
    externalUrl: "https://digracesion.hashnode.dev/scrum-guide-notes"
  },
  {
    id: "an-introduction-to-linux",
    title: "An Introduction to Linux OS",
    description: "An Introductory post to Linux OS, plus some installation guides!",
    pubDate: "04/14/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "work-notes", "Linux"],
    externalUrl: "https://digracesion.hashnode.dev/an-introduction-to-linux-os"
  },
  {
    id: "is-manual-testing-dying",
    title: "Is Manual Testing Dying?",
    description: "Is Manual Testing Dying? And other things you didn't know about Software Testing",
    pubDate: "04/12/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "work-notes", "QA"],
    externalUrl: "https://digracesion.hashnode.dev/is-manual-testing-dying"
  },
  {
    id: "qa-blog-recommendations-2023",
    title: "QA Blog Recommendations for 2023",
    description: "I found the following blogs to be insightful and helpful resources for learning more about QA.",
    pubDate: "02/10/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "recommendations", "work-notes", "QA"],
    externalUrl: "https://digracesion.hashnode.dev/qa-blog-recommendations-for-2023"
  },
  {
    id: "reflections-of-an-ex-software-developer",
    title: "Reflections of an Ex-Software Developer",
    description: "How I moved from Software Development to QA",
    pubDate: "04/10/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "work-notes"],
    externalUrl: "https://digracesion.hashnode.dev/reflections-of-an-ex-software-developer"
  },
  {
    id: "goodbye-to-youth",
    title: "Goodbye to youth",
    description: "And maybe it because we were young and we were stupid (and we didn't know it yet). But when you hold my hand, I only feel relieved.",
    pubDate: "03/18/2023",
    author: "gray",
    tags: ["blogpost", "fiction", "short-story", "slice-of-life"],
    externalUrl: "https://medium.com/@todorokis/goodbye-to-youth-aa35ed0f90e2"
  },
  {
    id: "so-you-think-you-can-write",
    title: "So You Think You Can Write?",
    description: "Starting a blog in 2023; the good, the bad, and the unreadable",
    pubDate: "03/13/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "writing"],
    externalUrl: "https://medium.com/@todorokis/so-you-think-you-can-write-ab1a63da70b1"
  },
  {
    id: "whats-so-great-about-the-great-resignation",
    title: "What's So Great About the Great Resignation?",
    description: "Burnout in tech and all the other nitty-gritty things",
    pubDate: "03/09/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "work-notes"],
    externalUrl: "https://todorokis.medium.com/whats-so-great-about-the-great-resignation-5b6b092c6c24"
  },
  {
    id: "interview-with-ejable",
    title: "Interview with Mary Grace of Lenovo about Her Experience of Working in Japan",
    description: "The 5th interview in the series of \"interviews with foreign engineers in Japan\". EJable.com's Ryoko Nagai talks to Mary Grygjeanne Grace of Lenovo, Japan, about her experiences of working in Japan, as well as Life in Japan.",
    pubDate: "03/08/2023",
    author: "gray",
    tags: ["blogpost", "fiction", "interview"],
    externalUrl: "https://www.ejable.com/interviews-with-engineers-in-japan/interview-with-mary-grace-of-lenovo-japan/"
  },
  {
    id: "tips-for-landing-a-job-in-japan",
    title: "Tips for Landing a Tech Job in Japan",
    description: "Tips for Landing a Job in IT in Japan",
    pubDate: "02/24/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "japan", "tips"],
    externalUrl: "https://medium.com/japonica-publication/tips-for-landing-a-job-in-japan-b1b94315f177"
  },
  {
    id: "must-try-writing-tools-2023",
    title: "Must-Try Writing Tools for 2023",
    description: "writing tools to help you boost your creativity, organize your things and collaborate with people better this 2023",
    pubDate: "02/20/2023",
    author: "gray",
    tags: ["blogpost", "writing", "recommendations", "non-fiction"],
    externalUrl: "https://medium.com/@todorokis/must-try-writing-tools-in-2023-dbe9eca22723"
  },
  {
    id: "productivity-tools-2023",
    title: "Productivity Tools for 2023",
    description: "Several apps that helped me focus on my work and helped increase my productivity.",
    pubDate: "02/20/2023",
    author: "gray",
    tags: ["blogpost", "productivity", "recommendations", "non-fiction"],
    externalUrl: "https://medium.com/@todorokis/productivity-tools-for-2023-6dba8c7d2464"
  },
  {
    id: "how-to-learn-a-new-language-japanese",
    title: "How to Learn a New Language - Japanese Edition",
    description: "Learning a new language can be difficult, especially if you're learning by yourself and are not immersed in the culture of the language you're studying.",
    pubDate: "01/17/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "japan", "language"],
    externalUrl: "https://medium.com/japonica-publication/how-to-learn-a-new-language-japanese-edition-7039e46dda7a"
  },
  {
    id: "job-hunting-websites-japan",
    title: "Job Hunting Websites to Get an IT Job in Japan",
    description: "Job-hunting websites to use when you're looking for an IT Job in Japan",
    pubDate: "01/11/2023",
    author: "gray",
    tags: ["blogpost", "japan", "recommendations", "non-fiction"],
    externalUrl: "https://medium.com/@todorokis/job-hunting-websites-to-get-an-it-job-in-japan-c7516846ce5"
  },
  {
    id: "brb-uprooting-my-life",
    title: "Brb; uprooting my entire life and moving into another multiverse",
    description: "Moving into a country with a completely different culture from the one I grew up in didn't seem so hard at first.",
    pubDate: "01/06/2023",
    author: "gray",
    tags: ["blogpost", "non-fiction", "short-story", "slice-of-life"],
    externalUrl: "https://todorokis.medium.com/brb-uprooting-my-entire-life-and-moving-into-another-multiverse-bb5e72a56e08"
  },
  {
    id: "the-top-fives",
    title: "The Top Fives (2022)",
    description: "2022 Top Fives",
    pubDate: "12/30/2022",
    author: "gray",
    tags: ["blogpost", "non-fiction", "year-ender"]
  },
  {
    id: "tips-on-buying-secondhand-cameras-in-japan",
    title: "Tips on Buying Secondhand Cameras in Japan",
    description: "Want to buy a camera but find prices overwhelming? Secondhand camera shops are your friends!",
    pubDate: "12/22/2022",
    author: "gray",
    tags: ["blogpost", "non-fiction", "photography", "japan"],
    externalUrl: "https://medium.com/japonica-publication/tips-on-buying-secondhand-cameras-in-japan-17a186d15ac"
  },
  {
    id: "a-letter-to-my-old-self",
    title: "An Open Letter to My Old Self",
    description: "It's okay to mourn the person that you used to be.",
    pubDate: "12/16/2022",
    author: "gray",
    tags: ["blogpost", "non-fiction", "slice-of-life"]
  },
  {
    id: "film-photography",
    title: "Film Photography",
    description: "The hardest part of any new hobby or task is always getting started.",
    pubDate: "12/06/2022",
    author: "gray",
    tags: ["blogpost", "non-fiction", "photography", "tips"],
    externalUrl: "https://todorokis.medium.com/taking-that-first-photo-bad67dc35304"
  },
  {
    id: "taking-that-first-photo",
    title: "Taking that First Photo",
    description: "Just point your camera and shoot.",
    pubDate: "12/06/2022",
    author: "gray",
    tags: ["blogpost", "non-fiction", "photography"],
    externalUrl: "https://todorokis.medium.com/taking-that-first-photo-bad67dc35304"
  },
  {
    id: "the-things-we-leave-behind",
    title: "The Things We Leave Behind",
    description: "My weekdays were always like that; lather, rinse, repeat.",
    pubDate: "05/26/2020",
    author: "gray",
    tags: ["blogpost", "fiction", "short-story", "slice-of-life"],
    externalUrl: "https://medium.com/the-creative-cafe/the-things-we-leave-behind-e0ecf017677e"
  },
  {
    id: "flesh-without-blood",
    title: "flesh, without blood",
    description: "I wondered about her, and the older woman from earlier, and what the stories about their scars could have been.",
    pubDate: "02/27/2020",
    author: "gray",
    tags: ["blogpost", "fiction", "short-story", "slice-of-life"],
    externalUrl: "https://medium.com/the-creative-cafe/flesh-without-blood-35553b6b0668"
  },
  {
    id: "but-i-see-no-stars",
    title: "But I see No Stars",
    description: "Life after college graduation turns out to be completely underwhelming.",
    pubDate: "02/10/2020",
    author: "gray",
    tags: ["blogpost", "fiction", "short-story", "slice-of-life"],
    externalUrl: "https://medium.com/the-creative-cafe/but-i-see-no-stars-64c775f875f2"
  },
  {
    id: "welcome-home",
    title: "Welcome Home",
    description: "I pass through the front door drenched in sweat, the knapsack on my back feeling heavier with each step I take.",
    pubDate: "05/20/2018",
    author: "gray",
    tags: ["blogpost", "fiction", "short-story", "slice-of-life"],
    externalUrl: "https://medium.com/the-creative-cafe/welcome-home-2079254e3668"
  },
  {
    id: "conversations-amongst-daydreamers",
    title: "Conversations Amongst Daydreamers",
    description: "This time, you have a cigarette stuck between your lips, and it dangles there dangerously, the same way you look a little too close to falling from the building's ledge as you walk on it like a tightrope.",
    pubDate: "04/28/2018",
    author: "gray",
    tags: ["blogpost", "fiction", "short-story"],
    externalUrl: "https://medium.com/the-creative-cafe/conversations-among-daydreamers-ce17c2c8a05d"
  },
  {
    id: "press-send",
    title: "Press Send",
    description: "It takes a long while, but I wait, and wait, and wait…",
    pubDate: "01/25/2018",
    author: "gray",
    tags: ["blogpost", "fiction", "short-story"],
    externalUrl: "https://medium.com/the-creative-cafe/press-send-ba86d0c92b2b"
  },
  {
    id: "nineteen",
    title: "Nineteen (19)",
    description: "19, and the world doesn't feel like how it's supposed to be, still.",
    pubDate: "01/18/2018",
    author: "gray",
    tags: ["blogpost", "fiction", "short-story"],
    externalUrl: "https://medium.com/the-creative-cafe/19-c4ee3018c8fd"
  },
  {
    id: "are-you-happy-now",
    title: "Are You Happy Now?",
    description: "Maybe we could settle for an okay ending.",
    pubDate: "01/17/2018",
    author: "gray",
    tags: ["blogpost", "fiction", "short-story"],
    externalUrl: "https://medium.com/the-creative-cafe/are-you-happy-now-f3e146d8983b"
  }
]