"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  ExternalLink,
  Calendar,
  Download,
  Code,
  Zap,
  Star,
  Moon,
  Sun,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const skills = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "JavaScript", level: 92 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "AWS", level: 70 },
  ];

  const projects = [
    {
      title: "AI-Powered SaaS Platform",
      description:
        "Revolutionary SaaS platform with AI integration, real-time analytics, and micro-animations that increased user engagement by 180%.",
      technologies: [
        "Next.js",
        "TypeScript",
        "OpenAI API",
        "PostgreSQL",
        "Tailwind CSS",
        "Framer Motion",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      gradient: "from-purple-500 to-pink-500",
      icon: "🚀",
    },
    {
      title: "Crypto Trading Dashboard",
      description:
        "Real-time cryptocurrency trading platform with advanced charting, WebSocket connections, and lightning-fast performance.",
      technologies: ["React", "WebSocket", "Chart.js", "Redis", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      gradient: "from-green-400 to-blue-500",
      icon: "💎",
    },
    {
      title: "Neural Network Visualizer",
      description:
        "Interactive 3D visualization of neural networks with real-time training animation and performance metrics.",
      technologies: ["Three.js", "React", "TensorFlow.js", "WebGL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      gradient: "from-orange-400 to-red-500",
      icon: "🧠",
    },
  ];

  const experience = [
    {
      title: "Senior Frontend Architect",
      company: "TechUnicorn Labs",
      duration: "2023 - Present",
      responsibilities: [
        "Architected scalable frontend systems serving 2M+ users globally",
        "Led a team of 8 developers in building cutting-edge web applications",
        "Implemented micro-frontend architecture reducing deployment time by 60%",
        "Pioneered AI-driven UX optimizations increasing conversion rates by 45%",
      ],
      highlight: true,
    },
    {
      title: "Lead Frontend Developer",
      company: "Digital Innovators",
      duration: "2021 - 2023",
      responsibilities: [
        "Spearheaded development of award-winning fintech applications",
        "Mentored 12+ junior developers and established coding standards",
        "Integrated blockchain technology for secure payment processing",
        "Achieved 99.9% uptime across all production applications",
      ],
      highlight: false,
    },
  ];

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"
          : "bg-gradient-to-br from-slate-900 via-gray-900 to-black"
      }`}
    >
      {/* Dark Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          onClick={toggleDarkMode}
          className={`w-12 h-12 rounded-full transition-all duration-300 ${
            isDarkMode
              ? "bg-yellow-500 hover:bg-yellow-600 text-black"
              : "bg-purple-600 hover:bg-purple-700 text-white"
          }`}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className={`absolute top-0 left-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse ${
            isDarkMode ? "bg-purple-500" : "bg-indigo-500"
          }`}
        ></div>
        <div
          className={`absolute top-0 right-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000 ${
            isDarkMode ? "bg-yellow-500" : "bg-cyan-500"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000 ${
            isDarkMode ? "bg-pink-500" : "bg-emerald-500"
          }`}
        ></div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <div className="w-40 h-40 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-2xl transform hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-indigo-500 to-cyan-500">
                <Image
                  src="/zahid.jpeg"
                  alt="Profile Image"
                  width={160}
                  height={160}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <div
                className={`absolute -top-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center ${
                  isDarkMode ? "bg-green-500" : "bg-emerald-500"
                }`}
              >
                <Zap className="w-6 h-6 text-white animate-pulse" />
              </div>
            </div>
            <h1
              className={`text-6xl font-bold bg-clip-text text-transparent mb-4 ${
                isDarkMode
                  ? "bg-gradient-to-r from-purple-400 to-pink-400"
                  : "bg-gradient-to-r from-indigo-400 to-cyan-400"
              }`}
            >
              MD ZAHID HASAN
            </h1>
            <p
              className={`text-2xl mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-400"
              }`}
            >
              Frontend{" "}
              <span
                className={isDarkMode ? "text-purple-400" : "text-cyan-400"}
              >
                Developer
              </span>
            </p>
            <div
              className={`flex flex-wrap gap-6 justify-center mb-8 ${
                isDarkMode ? "text-gray-300" : "text-gray-400"
              }`}
            >
              <div
                className={`flex items-center gap-2 transition-colors ${
                  isDarkMode ? "hover:text-purple-400" : "hover:text-cyan-400"
                }`}
              >
                <Mail size={20} />
                <span>zahidhasanofficial13@gmail.com</span>
              </div>
              <div
                className={`flex items-center gap-2 transition-colors ${
                  isDarkMode ? "hover:text-purple-400" : "hover:text-cyan-400"
                }`}
              >
                <Phone size={20} />
                <span>+8801779-017584</span>
              </div>
              <div
                className={`flex items-center gap-2 transition-colors ${
                  isDarkMode ? "hover:text-purple-400" : "hover:text-cyan-400"
                }`}
              >
                <MapPin size={20} />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://github.com/zahidhasan13">
              <Button
                className={`text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  isDarkMode
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                }`}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              </Link>
              <Button
                className={`text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                    : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                }`}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button
                className={`text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                    : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                }`}
              >
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </div>
          </div>

          {/* About Section */}
          <Card
            className={`backdrop-blur-lg border-gray-700 mb-8 transition-all duration-300 ${
              isDarkMode
                ? "bg-gray-800/50 hover:bg-gray-800/70"
                : "bg-gray-900/50 hover:bg-gray-900/70"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-3xl text-white flex items-center gap-3">
                <Code
                  className={isDarkMode ? "text-purple-400" : "text-cyan-400"}
                />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p
                className={`leading-relaxed text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-400"
                }`}
              >
                Visionary frontend architect with 6+ years of experience
                crafting{" "}
                <span
                  className={`font-semibold ${
                    isDarkMode ? "text-purple-400" : "text-cyan-400"
                  }`}
                >
                  extraordinary digital experiences
                </span>
                . Specialized in building scalable applications that serve
                millions of users. I blend cutting-edge technology with creative
                problem-solving to deliver solutions that do not just work—they{" "}
                <span
                  className={`font-semibold ${
                    isDarkMode ? "text-pink-400" : "text-indigo-400"
                  }`}
                >
                  inspire
                </span>
                .
              </p>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 mb-8 hover:bg-gray-800/70 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-3xl text-white flex items-center gap-3">
                <Star className="text-yellow-400" />
                Technical Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <span
                        className={`font-bold ${
                          isDarkMode ? "text-purple-400" : "text-cyan-400"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`w-full rounded-full h-3 ${
                        isDarkMode ? "bg-gray-700" : "bg-gray-800"
                      }`}
                    >
                      <div
                        className={`h-3 rounded-full transition-all duration-1000 ease-out ${
                          isDarkMode
                            ? "bg-gradient-to-r from-purple-500 to-pink-500"
                            : "bg-gradient-to-r from-indigo-500 to-cyan-500"
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projects Section */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 mb-8 hover:bg-gray-800/70 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-3xl text-white flex items-center gap-3">
                <Zap className="text-yellow-400" />
                Featured Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <Card
                    key={index}
                    className={`border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group ${
                      isDarkMode
                        ? "bg-gray-900/70 hover:bg-gray-900/90"
                        : "bg-black/70 hover:bg-black/90"
                    }`}
                  >
                    <CardHeader>
                      <div
                        className={`w-full h-32 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center text-4xl mb-4`}
                      >
                        {project.icon}
                      </div>
                      <div className="flex justify-between items-start">
                        <CardTitle
                          className={`text-xl text-white transition-colors ${
                            isDarkMode
                              ? "group-hover:text-purple-400"
                              : "group-hover:text-cyan-400"
                          }`}
                        >
                          {project.title}
                        </CardTitle>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className={`text-white ${
                              isDarkMode
                                ? "bg-purple-600 hover:bg-purple-700"
                                : "bg-indigo-600 hover:bg-indigo-700"
                            }`}
                          >
                            <ExternalLink size={14} />
                          </Button>
                          <Button
                            size="sm"
                            className={`text-white ${
                              isDarkMode
                                ? "bg-gray-700 hover:bg-gray-600"
                                : "bg-gray-800 hover:bg-gray-700"
                            }`}
                          >
                            <Github size={14} />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p
                        className={`mb-4 text-sm ${
                          isDarkMode ? "text-gray-300" : "text-gray-400"
                        }`}
                      >
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            className={`text-xs ${
                              isDarkMode
                                ? "bg-purple-900/50 text-purple-300 border-purple-500/50"
                                : "bg-indigo-900/50 text-indigo-300 border-indigo-500/50"
                            }`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience Section */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 mb-8 hover:bg-gray-800/70 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-3xl text-white flex items-center gap-3">
                <Calendar className="text-blue-400" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div
                    key={index}
                    className={`relative pl-8 ${
                      job.highlight
                        ? `p-6 rounded-lg ${
                            isDarkMode
                              ? "bg-gradient-to-r from-purple-900/20 to-pink-900/20"
                              : "bg-gradient-to-r from-indigo-900/20 to-cyan-900/20"
                          }`
                        : ""
                    }`}
                  >
                    <div
                      className={`absolute left-0 top-0 w-1 h-full rounded-full ${
                        isDarkMode
                          ? "bg-gradient-to-b from-purple-500 to-pink-500"
                          : "bg-gradient-to-b from-indigo-500 to-cyan-500"
                      }`}
                    ></div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {job.title}
                        </h3>
                        <p
                          className={`font-semibold text-lg ${
                            isDarkMode ? "text-purple-400" : "text-cyan-400"
                          }`}
                        >
                          {job.company}
                        </p>
                      </div>
                      <Badge
                        className={`${
                          isDarkMode
                            ? "bg-blue-900/50 text-blue-300 border-blue-500/50"
                            : "bg-indigo-900/50 text-indigo-300 border-indigo-500/50"
                        }`}
                      >
                        {job.duration}
                      </Badge>
                    </div>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className={`flex items-start gap-3 ${
                            isDarkMode ? "text-gray-300" : "text-gray-400"
                          }`}
                        >
                          <span
                            className={
                              isDarkMode ? "text-purple-400" : "text-cyan-400"
                            }
                          >
                            ▶
                          </span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <Card
              className={`backdrop-blur-lg ${
                isDarkMode
                  ? "bg-gradient-to-r from-purple-800/50 to-pink-800/50 border-purple-500/50"
                  : "bg-gradient-to-r from-indigo-800/50 to-cyan-800/50 border-indigo-500/50"
              }`}
            >
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Build Something Amazing?
                </h2>
                <p
                  className={`mb-6 text-lg ${
                    isDarkMode ? "text-gray-300" : "text-gray-400"
                  }`}
                >
                  Let us collaborate and create the next generation of digital
                  experiences
                </p>
                <Button
                  className={`text-white px-12 py-4 text-xl font-bold transform hover:scale-105 transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      : "bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600"
                  }`}
                >
                  <Mail className="mr-3 h-6 w-6" />
                  Let us Connect
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
