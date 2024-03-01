import React from "react"
import Image from "next/image"
import AboutText from "@/data/AboutText";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Java" },
  { skill: "React" },
  { skill: "Express" },
  { skill: "MongoDB" },
  { skill: "Spring" },
  { skill: "PostgreSQL" },
  { skill: "Bootstrap" },
  { skill: "Docker" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Junit5" },
  { skill: "Mockito" },
  { skill: "Postman" },
]

const AboutSection = ( props: any) => {
  let text = props.language === "german"? AboutText.GERMAN : AboutText.ENGLISH;

  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">

        <h1 className="text-center font-bold text-4xl">
          {text.HEADER}
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              {text.HEADLINE}
            </h1>
            <p>
              {text.GREETING_INTRO}
              <b>{text.GREETING_BOLD1}</b>,
              <b>{text.GREETING_BOLD2}</b>{text.AND}
              <b>{text.GREETING_BOLD3}</b>
              {text.GREETING_END}
            </p>
            <br />
            <p>{text.BACKGROUND}</p>
            <br />
            <p>{text.HOBBIES}</p>
            <br />
            <p>
              {text.MOTIVATION_INTRO}{" "}
              <span className="font-bold text-teal-500">
                {text.MOTIVATION_COLOR}
              </span>{" "}
              {text.MOTIVATION_END}
            </p>
          </div>

          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">{text.SKILL_HEADER}</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {AboutText.SKILLS.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={200}
              height={200}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
