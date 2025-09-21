import { Code, Briefcase, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {""}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About<span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 self-start">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>

                        <p className="text-muted-foreground">
                            I Built a full-stack app with React (Vite), React Router, Context API and a Node/Express + MongoDB/Mongoose (REST) backend.
                        </p>

                        <p className="text-muted-foreground">
                            I am passionate about building full-stack web apps.
                            On the front end, I focus on clean, accessible interfaces with React, JavaScript and Tailwind.
                            On the back end, I enjoy designing clear REST APIs with Node/Express and MongoDB.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">{""}
                                Get In Touch</a>

                            <a href="/Resume/Kasra_Bakht_Resume.pdf" className="cosmic-button" download>{""}Download My Resume</a>
                        </div>
                    </div>

                    <div className="space-y-6 self-start md:mt-8 lg:mt-16">

                          <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                   <div className="p-3 rounded-full bg-primary/10">

                                        <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Responsive, accessible UIs with React/JavaScript, React Router, and Tailwind
                                    </p>

                                 </div>


                                </div>

                          </div>

                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <User className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">APIs & Data</h4>
                                    <p className="text-muted-foreground">
                                        Node/Express REST APIs with MongoDB/Mongoose, JWT auth, validation, error handling, and clean data models.
                                    </p>

                                </div>
                                </div>
                             </div>

                           <div className="gradient-border p-6 card-hover">
                              <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                      <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">What I am Looking For</h4>
                                    <p className="text-muted-foreground">
                                        Software engineer or Full-stack internship. Based in Seattle, open to remote and relocate.
                                    </p>

                                </div>

                                </div>
                             </div>








                        </div>
                </div>
            </div>
        </section>
    )
}