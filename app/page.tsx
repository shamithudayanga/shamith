"use client";

import type {} from "next";
import Head from "next/head";
import Image from "next/image";
// framer
import { motion } from "framer-motion";
import Post from "next/index";

// icon

// email
import emailjs from "@emailjs/browser";
// email


// css
import { BsFillMoonStarsFill } from "react-icons/bs";
import desing from "../assets/design.png";
import code from "../assets/code.png";
import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";
import web7 from "../assets/web7.png";
import shamith from "../assets/shamith.jpg";
import AboutMe from "../assets/abo.jpeg";

// typeWrite
import Typewriter from "typewriter-effect";

import {
  AiOutlineGithub,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

// hook
import { useState } from "react";
import App from "next/app";
import { error } from "console";

export default function Home() {
  const [getClassList, setClassList] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = (e) => {
    e.preventDefault();

    const serviceID = "service_edgksr7";
    const templateId = "template_2yyb12v";
    const publicKey = "FunI10h3Gvw2L_HCs";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "shamith udayanga",
      // to_email: email,
      message: message,
    };

    //send email
    emailjs
      .send(serviceID, templateId, templateParams, publicKey)
      .then((response) => {
        alert("Email sent successfuly");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sendeing Email:", error);
      });
  };

  function toggleColor() {
    setClassList((getClassList) => !getClassList);
  }

  return (
    <div>
      {/* <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap');
      </style> */}

      <main
        className={
          getClassList
            ? "font-poppins bg-yellow-50 text-black  min-h-screen px-10 md:px-20 lg:px-40"
            : "font-poppins bg-black min-h-screen px-10 md:px-20 lg:px-40  text-white"
        }
      >
        {/* nav and hero */}
        <section>
          {/* nav */}
          <nav className="py-10 flex justify-between">
            <h1 className="text-sm md:text-xl">Software Shamith Udayanga</h1>

            <ul className="flex items-center">
              {/* icon */}
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-xl mx-5"
                  onClick={toggleColor}
                />
              </li>

              <li>
                <a
                  href="https://drive.google.com/file/d/1282bHkIncgYWH0iFLkuf23oKz6KZ_t77/view?usp=sharing"
                  className="bg-yellow-400  rounded text-black px-4 py-2 border-none rounded-md"
                  id="btn"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </section>

        {/* hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1 className="text-center font-poppins text-2xl mt-6 md:text-6xl lg:text-7xl lg:mb-4 font-bold text-yellow-400">
              Shamith Udayanga
            </h1>
            <h2 className="text-center text-3xl font-bold">I,am a</h2>
            <h3 className="text-center  mb-1  font-bold md:text-3xl">
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "Mobile App Developer",
                    "Software Application Developer",
                    "Ethical Hacker",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              ></Typewriter>
            </h3>

            <p className="text-center mt-3 md:text-md max-w-xl mx-auto">
              I'm a web Designer full stack developer with extesive experience
              for over 2 years.expertise is to create and website desing,
              backend, frontend desing, And many more....
            </p>
          </div>
        </motion.div>
        {/* socials */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center gap-3 mt-4 text-xl">
            <a href="https://github.com/shamithudayanga">
              <AiOutlineGithub />
            </a>
            <a href="https://www.youtube.com/channel/UCY-9rWO8pzqM9CReNXjCnUA">
              <AiFillYoutube />
            </a>
            <a href="https://www.linkedin.com/in/shamith-udayanga-768134279/">
              <AiFillLinkedin />
            </a>
            <a href="https://www.facebook.com/udayanga.max.3557">
              <AiFillFacebook />
            </a>
          </div>
        </motion.div>

        {/* profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center items-center mb-2 mt-8">
            <Image src={shamith} alt="" className="rounded rounded-full" />
          </div>
        </motion.div>

        <section>
          <h2 className="text-5xl py-10 font-bold opacity-60 relative">
            About <span className="text-yellow-300">Me</span>
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center items-center  flex-col gap-8  md:flex-row  ">
              <Image
                src={AboutMe}
                alt="AboutMe"
                className="rounded md:w-1/2  bg-opacity-80 border-none shadow-xl "
              />

              <div>
                <p>
                  I am a dedicated full-stack developer with a passion for
                  crafting innovative digital solutions. With years of
                  experience in both front-end and back-end development, I
                  thrive on turning ideas into functional, user-friendly
                  applications. My expertise includes a wide range of
                  programming languages and technologies, from HTML, CSS, and
                  JavaScript for building intuitive user interfaces, to Python,
                  Node.js, and Ruby on Rails for robust server-side development.
                  I excel in database management, API integration, and deploying
                  scalable web applications.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section>
          <div>
            <h2 className="text-5xl py-10 font-bold opacity-60">
              Services I Offer
            </h2>
            <p className="py-2 mt-3 ">
              expertise is to create and website desing, backend, frontend
              desing.
            </p>
          </div>

          {/* service card */}

          <div className="md:flex lg:flex gap-10 mx-auto">
            {/* card */}

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="  bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
                <Image
                  src={desing}
                  alt="design image"
                  width={100}
                  height={100}
                  className="inline"
                />
                <h2 className="text-2xl font-bold">UI/UX Design</h2>
                <p className="text-sm py-2 text-gray-800 leading-6">
                  Elevate user experiences with our UI/UX design services. We
                  craft intuitive interfaces and seamless interactions.
                </p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className=" bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
                <Image
                  src={code}
                  alt="design image"
                  width={100}
                  height={100}
                  className="inline"
                />
                <h2 className="text-2xl font-bold">Back-End Develop</h2>
                <p className="text-sm py-2 text-gray-800 leading-6">
                  Unlock the power of robust back-end services. Our expert team
                  ensures data security, scalability, and seamless functionality
                </p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className=" bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
                <Image
                  src={desing}
                  alt="design image"
                  width={100}
                  height={100}
                  className="inline"
                />

                <h2 className="text-2xl font-bold">Font-End Develop</h2>
                <p className="text-sm py-2 text-gray-800 leading-6">
                  Transform your digital presence with our front-end services.
                  We create captivating, responsive interfaces that enhance user
                  engagement.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* mywork */}
        <section>
          <div>
            <h2 className="text-5xl py-10 font-bold opacity-60">Protfolio</h2>
            <p className="text-sm py-2 text-gray-800 leading-6">
              I'm also an avid learner, constantly staying updated with the
              latest industry trends.
            </p>
          </div>
          {/* image */}

          <div className="flex flex-col gap-10 p-10 lg:flex-row lg:flex-wrap">
            
            <div className="basis-1/3 flex-1 imgs" >
              <a href="https://qualitycables.com.au">
                <Image
                  src={web1}
                  alt="web1"
                  layout="responsive"
                  className="rounded-lg object-cover "
                />
              </a>

              <div className="mt-2 mb-2 project">
                <h4 className="text-center ">QulityCabele.com.au</h4>
                <p className="mt-2 font-poppins text-sm">E-commerce application development using php, javascript, boostrap, css, ajex</p>
              </div>
            </div>

            <div className="basis-1/3 flex-1 imgs ">
              <a href="http://sdreamcode.rf.gd">
                <Image
                  src={web2}
                  alt="web1"
                  layout="responsive"
                  className="rounded-lg object-cover"
                />
              </a>

              <div className="mt-2 mb-2 project">
                <h4 className="text-center ">SDream Code</h4>
                <p className="mt-2 font-poppins text-sm">Web application development using php, javascript, boostrap, css, ajex</p>
              </div>
            </div>

            <div className="basis-1/3 flex-1 imgs">
              <a href="#">
                <Image
                  src={web3}
                  alt="web1"
                  layout="responsive"
                  className="rounded-lg object-cover"
                />
              </a>

              <div className="mt-2 mb-2 project">
                <h4 className="text-center ">My ProtFolio</h4>
                <p className="mt-2 font-poppins text-sm">Web  application development using Typejs, javascript, boostrap, css, ajex</p>
              </div>
            </div>

            <div className="basis-1/3 flex-1 imgs">
              <a href="#">
                <Image
                  src={web4}
                  alt="web1"
                  layout="responsive"
                  className="rounded-lg object-cover"
                />
              </a>

              <div className="mt-2 mb-2 project">
                <h4 className="text-center ">supplement Web site</h4>
                <p className="mt-2 font-poppins text-sm">E-commerce application development using php, javascript, boostrap, css, ajex</p>
              </div>
            </div>

            <div className="basis-1/3 flex-1 imgs">
              <a href="#">
                <Image
                  src={web5}
                  alt="web1"
                  layout="responsive"
                  className="rounded-lg object-cover"
                />
              </a>

              <div className="mt-2 mb-2 project">
                <h4 className="text-center ">LahiruOills Mills</h4>
                <p className="mt-2 font-poppins text-sm">E-commerce application development using php, javascript, boostrap, css, ajex</p>
              </div>
            </div>

            <div className="basis-1/3 flex-1 imgs">
              <a href="#">
                <Image
                  src={web6}
                  alt="web1"
                  layout="responsive"
                  className="rounded-lg object-cover"
                />
              </a>
              <div className="mt-2 mb-2 project">
                <h4 className="text-center ">E-shop Web application</h4>
                <p className="mt-2 font-poppins text-sm">E-commerce application development using php, javascript, boostrap, css, ajex</p>
              </div>
            </div>

            <div className="basis-1/3 flex-1 imgs">
              <a href="#">
                <Image
                  src={web7}
                  alt="web1"
                  layout="responsive"
                  className="rounded-lg object-cover"
                />
              </a>

              <div className="mt-2 mb-2 project">
                <h4 className="text-center ">Dress Website</h4>
                <p className="mt-2 font-poppins text-sm">E-commerce application development using php, javascript, boostrap, css, ajex</p>
              </div>

              
            </div>
          </div>
        </section>

        {/* Contact */}
        <form onSubmit={sendMail}>
          <div>
            <h1 className="text-5xl py-2 font-bold opacity-60">Contact Us</h1>
            <h5 className="text-1xl  font-bold  mb-4 opacity-60">
              My contact infromation
            </h5>
          </div>

          <div>
            <div className="flex  w-full gap-8 py-4  md:flex-row ">
              <input
                type="text"
                placeholder="your name.."
                className="border-none rounded-md text-sm py-2 px-3 text-black w-1/2 outline-none   "
                required
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <input
                type="email"
                placeholder="your email.."
                className="border-none rounded-md text-sm py-2 px-3 text-black w-1/2 outline-none "
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
              />
            </div>

            <textarea
              placeholder="enter your message.."
              rows={10}
              cols={20}
              className="w-full mb-5 px-3 text-black rounded-md outline-none "
              name="message"
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div>
                <button
                  className="bg-yellow-400 py-4 border-none w-full mb-3 rounded-md "
                  type="submit"
                >
                  Send
                </button>
              </div>
            </motion.div>
          </div>
        </form>

        <footer className="border-t-2 border-yellow-200 text-sm opacity-70 flex flex-col gap-5 items-center justify-center py-10 lg:flex-row lg:items-center">
          <div>
            <h3 className="text-base mb-2 ">Contact me for more details</h3>
            <p className="opacity-40">
              I'm a passionate software developer with expertise in [Programming
              Languages, Technologies, or Specializations]. I thrive on solving
              complex problems and creating efficient, user-friendly software
              solutions. Let's connect and collaborate on exciting projects!
            </p>
          </div>

          {/* socials */}
          <div className="flex justify-center gap-3 mt-4 text-xl">
            <a href="https://github.com/shamithudayanga">
              <AiOutlineGithub />
            </a>
            <a href="https://www.youtube.com/channel/UCY-9rWO8pzqM9CReNXjCnUA">
              <AiFillYoutube />
            </a>
            <a href="https://www.linkedin.com/in/shamith-udayanga-768134279/">
              <AiFillLinkedin />
            </a>
            <a href="https://www.facebook.com/udayanga.max.3557">
              <AiFillFacebook />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

{
  /* script */
}

{
  /* footer */
}
