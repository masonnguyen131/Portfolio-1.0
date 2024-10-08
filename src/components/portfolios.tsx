"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SVGProps } from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.152-1.11-1.46-1.11-1.46-.907-.62.069-.608.069-.608 1.003.07 1.53 1.03 1.53 1.03.892 1.528 2.341 1.087 2.91.831.09-.646.35-1.087.635-1.337-2.221-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.985 1.03-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025a9.564 9.564 0 012.5-.336 9.56 9.56 0 012.5.336c1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.202 2.393.099 2.646.641.698 1.03 1.592 1.03 2.683 0 3.84-2.337 4.687-4.565 4.935.36.31.679.924.679 1.862 0 1.344-.012 2.428-.012 2.758 0 .269.18.579.688.482C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="12" r="4" /> {/* The large circle on the left */}
      <ellipse cx="12" cy="12" rx="4" ry="6" /> {/* The middle ellipse */}
      <ellipse cx="19" cy="12" rx="1.5" ry="4" />{" "}
      {/* The small ellipse on the right */}
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" ry="2" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function WebcamIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  );
}


import { CodeIcon, FrameIcon, DatabaseIcon, BrainIcon, CloudIcon, BarChartIcon, DollarSignIcon, HomeIcon, UsersIcon } from "lucide-react";

export function Portfolios() {
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contact from Portfolio Website");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`);
    window.location.href = `mailto:masonnguyen131@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-200">
     <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 transition-all duration-200">
  <motion.div
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
    className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6"
  >
    <Link href="#" prefetch={false} className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
      Mason Nguyen
    </Link>
    <nav className="hidden space-x-6 md:flex">
      {["About", "Skills", "Projects", "Blogs"].map((item) => (
        <Link
          key={item}
          href={`#${item.toLowerCase()}`}
          className={`text-sm font-medium transition-colors ${
            activeSection === item.toLowerCase()
              ? "text-blue-500 dark:text-purple-400"
              : "text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-purple-400"
          }`}
          prefetch={false}
        >
          {item}
        </Link>
      ))}
    </nav>
          <div className="flex items-center gap-4">
            <Link
              href="https://medium.com/@masonguyen13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              prefetch={false}
            >
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/masonnguyen1311/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              prefetch={false}
            >
              <LinkedinIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/masonnguyen131"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              prefetch={false}
            >
              <GithubIcon className="h-5 w-5" />
            </Link>
            <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
    </div>
  </motion.div>
</header>
      <main className="flex-1">
      <section id="about" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 relative">
  <div 
    className="absolute inset-0 bg-cover bg-center z-0" 
    style={{ backgroundImage: "url('/Wall.jpg')" }}
  ></div>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="container mx-auto max-w-3xl px-4 sm:px-6 text-center relative z-10"
  >
    <h1 className="text-5xl font-bold mb-4" style={{ color: 'white' }}>
      Mason Nguyen
    </h1>
    <h2 className="text-2xl font-medium mb-8" style={{ color: 'white' }}>
      Data Analyst
    </h2>
    <motion.p 
      className="text-lg leading-relaxed bg-black bg-opacity-50 p-6 rounded-lg"
      style={{ color: 'white' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      Data analyst by day, AI visionary by night. I decode business insights from digital noise and craft AI solutions that bridge tech and human needs. 
      Here, I share my journey through the data landscape, exploring how it can revolutionise our daily tech interactions. 
      Expect deep dives into data analysis, machine learning breakthroughs, and thought experiments on the future of AI.
    </motion.p>
  </motion.div>
</section>
        <Separator className="max-w-3xl mx-auto" />
        <section id="skills" className="py-24 bg-white dark:bg-gray-900">
  <div className="container mx-auto max-w-4xl px-4 sm:px-6">
    <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Technical Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        { title: "Programming", skills: "Python, Javascript, Typescript, HTML/CSS, SQL, NoSQL", icon: <CodeIcon className="h-8 w-8 text-blue-500" /> },
        { title: "Frameworks", skills: "Scikit-Learn, TensorFlow, Pytorch, Dash, React, XGBoost", icon: <FrameIcon className="h-8 w-8 text-purple-500" /> },
        { title: "Data Management", skills: "Oracle, MySQL, MongoDB, ETL, Feature Engineering", icon: <DatabaseIcon className="h-8 w-8 text-green-500" /> },
        { title: "Machine Learning", skills: "Classification, Regression, Clustering, Deep Learning, Multi-Agent Systems", icon: <BrainIcon className="h-8 w-8 text-red-500" /> },
        { title: "Cloud Computing", skills: "Microsoft Azure (SQL, Machine Learning, Blob Storage), AWS (S3)", icon: <CloudIcon className="h-8 w-8 text-blue-400" /> },
        { title: "Data Analysis", skills: "EDA, Quantitative Analysis, Time-Series Analysis, Plotly, Power BI, Excel", icon: <BarChartIcon className="h-8 w-8 text-yellow-500" /> },
      ].map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-4">
            {category.icon}
            <h3 className="text-xl font-semibold ml-4 text-gray-800 dark:text-gray-200">{category.title}</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{category.skills}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
        <Separator className="max-w-3xl mx-auto" />
        <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
  <div className="container mx-auto max-w-4xl px-4 sm:px-6">
    <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Featured Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          title: "Capital Vision",
          description: "A Financial Analysis Platform that scrapes and analyzes financial data, enhancing user decision-making by providing actionable insights.",
          link: "https://capital-vision-dev-8f1401efbadb.herokuapp.com/",
          icon: <DollarSignIcon className="h-8 w-8 text-green-500" />
        },
        {
          title: "Predict Housing Price",
          description: "A data science project focused on predicting housing prices using advanced machine learning techniques.",
          link: "https://github.com/tienphatnguyendev/housing_price_prediction/blob/main/Housing%20Price%20Prediction.ipynb",
          icon: <HomeIcon className="h-8 w-8 text-blue-500" />
        },
        {
          title: "Bank Churn Classification",
          description: "A data science project aimed at predicting bank customer churn through extensive EDA and machine learning models.",
          link: "https://github.com/tienphatnguyendev/bank-churn-classification",
          icon: <UsersIcon className="h-8 w-8 text-purple-500" />
        }
      ].map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            href={project.link}
            className="block group bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            prefetch={false}
          >
            <div className="flex items-center mb-4">
              {project.icon}
              <h3 className="text-xl font-semibold ml-4 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section id="blogs" className="py-24 bg-white dark:bg-gray-900">
  <div className="container mx-auto max-w-4xl px-4 sm:px-6">
    <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Latest Insights</h2>
    <div className="space-y-8">
      {[
        {
          title: "Feature Engineering Series: Episode 1",
          description: "Normalization, Discretization, and Outliers",
          link: "https://medium.com/@aaronng.dev_71714/mastering-feature-engineering-normalization-discretization-and-outliers-81b03b8c3ae5"
        },
        {
          title: "Feature Engineering Series: Episode 2",
          description: "Mastering Feature Expansion: Computable Features, Imputation, and Kernels",
          link: "https://medium.com/@aaronng.dev_71714/feature-engineering-series-episode-2-mastering-feature-expansion-computable-features-48d16fd2e484"
        },
        {
          title: "Optimizing Neural Networks",
          description: "Hyperparameter Tuning Using Keras and Scikit-Learn",
          link: "https://medium.com/@aaronng.dev_71714/optimizing-neural-networks-with-hyperparameter-tuning-using-keras-and-scikit-learn-e6cc87c0e0cf"
        }
      ].map((blog, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link
            href={blog.link}
            className="block group bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            prefetch={false}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{blog.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{blog.description}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      </main>
      <footer className="bg-gray-900 dark:bg-gray-800 text-white py-12">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 Mason Nguyen</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link
                href="https://medium.com/@masonguyen13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                prefetch={false}
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/masonnguyen1311/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                prefetch={false}
              >
                <LinkedinIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/masonnguyen131"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                prefetch={false}
              >
                <GithubIcon className="h-5 w-5" />
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <MailIcon className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Contact Mason Nguyen</DialogTitle>
                    <DialogDescription>
                      Feel free to reach out with any questions or inquiries.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="name" className="text-right">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="email" className="text-right">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="message" className="text-right">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Send Message</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}