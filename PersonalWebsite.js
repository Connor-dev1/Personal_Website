import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header Section */}
      <header className="bg-blue-600 w-full py-6 text-white text-center shadow-lg">
        <h1 className="text-4xl font-bold">Connor's Portfolio</h1>
        <p className="text-lg mt-2">Aspiring Software Engineer | Fitness Enthusiast</p>
      </header>

      {/* About Section */}
      <section className="mt-10 w-11/12 md:w-3/4 lg:w-1/2">
        <Card className="rounded-2xl shadow-md">
          <CardContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700 leading-relaxed">
                Hi, I’m Connor! I’m currently an apprentice software engineer at Kainos through the Earn as You Learn Academy. Passionate about building impactful applications and improving my skills, I thrive in team environments and enjoy problem-solving. Outside of tech, you’ll find me at the gym or sharing laughs with friends.
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section className="mt-10 w-11/12 md:w-3/4 lg:w-1/2">
        <Card className="rounded-2xl shadow-md">
          <CardContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>SQL and Database Management (MS SQL Server)</li>
                <li>React and Front-End Development</li>
                <li>Team Collaboration & Agile Methodologies</li>
                <li>Fitness Training & Discipline</li>
              </ul>
            </motion.div>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section className="mt-10 w-11/12 md:w-3/4 lg:w-1/2 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            Let’s connect! Feel free to reach out to me through any of the platforms below.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
              <Github className="text-gray-700 hover:text-black" />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-gray-700 hover:text-black" />
            </a>
            <a href="mailto:your-email@example.com">
              <Mail className="text-gray-700 hover:text-black" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}