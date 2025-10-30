import { Github } from 'lucide-react';
import { ArrowRight } from 'lucide-react';



const projects = [
    {
        id: 1,
        title: "Word Guessing Game",
        description: "I built an interactive word-guessing game that generates a new word each round and gives real-time, per-letter feedback. Each keypress validates the guess and color-codes letters for exact matches and partial matches, helping players refine their next attempt. A limited-attempt counter and clear status messages guide the player through wins, losses, and remaining chances.",
        image: "/projects/WordGuessingGame.png",
        tags: ["CSS", "HTML", "JavaScript"],
        githubUrl:"https://github.com/Kasrabakht/JavaScript-Projects/tree/main/Word%20Gussing%20Game"
    } ,
    {
        id: 2,
        title: "Personal Finance Tracker",
        description:"I built a personal finance tracker where users sign up/sign in, add expenses (amount, category, payment method, date), and review them on a simple dashboard. The app uses a secure auth flow and hashed passwords stored in MongoDB and JWT tokens for protected routes plus a controlled Add Record form with basic validation. A Node/Express REST API with Mongoose persists data to MongoDB Atlas and returns JSON responses.",
        image: "/projects/Personal Finance Tracker.png",
        tags: ["React(Vite)", "Context API", "Node / Express", "REST", "MongoDB / Mongoose", "JS", "CSS"],
        githubUrl: "https://github.com/Kasrabakht/Personal-Financial-Tracker/tree/development"


    },

    {
        id: 3,
  title: "CalmVoice AI",
  description:
    "I built CalmVoice AI, a real-time web voice assistant that helps users manage stress through conversational AI. The app captures live microphone input in the browser, streams audio via WebSockets to a Node/Express backend, transcribes speech with Whisper, and analyzes emotional tone. It then generates context-aware, AI-driven responses using GPT models to guide users through relaxation and breathing exercises. The React frontend features dynamic audio visualization, smooth UI animations, and state-managed chat interaction.",
  image: "/projects/CalmVoiceAI.png",
  tags: [
    "React (Vite)",
    "Node / Express",
    "WebSocket",
    "OpenAI / Whisper",
    "Real-Time AI",
    "JS",
    "CSS",
  ],
        githubUrl: "https://github.com/Kasrabakht/Personal-Financial-Tracker/tree/development"

    }
]



export const ProjectSection = () => {
    return (

        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary" >Projects</span> </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are the projects I have been working on.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) =>
                    (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                            </div>
                            <div className="p-6 ">
                                <div className="flex flex-wrap gap-2 mb-4">

                                    {project.tags.map((tag) => (
                                        <span className="px2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>))}

                                </div>

                            </div>
                            <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.githubUrl}
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        target="_blank"
                                        >
                                        <Github size={20 } />
                                     </a>

                                </div>


                            </div>
                             </div>


                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Kasrabakht" target="_blank">
                        Checkout My Github <ArrowRight size={16 } />
                    </a>
                </div>
            </div>
        </section>

    )
}