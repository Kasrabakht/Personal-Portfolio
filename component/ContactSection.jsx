import { Mail } from "lucide-react"
import { MapPin } from "lucide-react"
import {cn } from '@/lib/utils'
import { Send } from "lucide-react"
import { Linkedin } from "lucide-react"

export const ContactSection = () => {
 
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    If you want to keep in touch</p>

                <div className="grid grid-cols-1 gap-12 max-w-2xl mx-auto">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6 text-center">
                            {" "}
                            Contact Information
                        </h3>

                        <div className="space-y-6 flex flex-col items-center">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:kasrabakht20@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        target="_blank">
                                        kasrabakht20@gmail.com
                                    </a>
                                </div>
                            </div>



                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Linkedin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-medium">LinkedIn</h4>
                                    <a
                                        href="https://linkedin.com/in/kasra-bakht-876085258"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        target="_blank" rel="noopener noreferrer">
                                        linkedin.com/in/kasra-bakht-876085258
                                    </a>
                                </div>
                            </div>



                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-medium">Location</h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        Seattle,Washington
                                    </a>
                                </div>
                            </div>


                        </div>

                    </div>

                   
                </div>
            </div>
        </section>

    )
}