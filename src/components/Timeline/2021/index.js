import { Award, Briefcase } from "react-feather"
import { ButtonSet, DateEntry, Notes, TimelineEntry } from "../Entry"

export function Year2021() {
  return (
    <>
      <DateEntry title="2021" />
      <TimelineEntry title="Started as Project Manager at MPSystem" timestamp="Mar 1st, 2021 - Seoul, South Korea" Icon={Briefcase} tint="indigo">
        <Notes>
          <p>As manufacturer of automated parking systems, MPSystem has a global presence and a strong client focus.</p>
          <p>As a project manager in a brand new team in the company - Inventory and process management, I am responsible for the integrity of the platforms, and the interaction with the users. Some of the technologies we use are: React, Python, TypeScript, PHP, Laravel, Pytorch, Tensorflow, Tailwind, VueJS, NodeJS.</p>
        </Notes>
        <ButtonSet>
          <a href="https://mpsystem.co/news/" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto btn">
            <span>view website</span>
          </a>
        </ButtonSet>
      </TimelineEntry>
      
      <TimelineEntry title="Graduated college - Hanyang University" timestamp="Mar 1st, 2021 - Seoul, South Korea" Icon={Award} tint="yellow">
        <Notes>
          <p>Graduated as a Computer Software Engineer at Hanyang University in Seoul, where I lived for 8 years.</p>
        </Notes>
        <ButtonSet>
          <a href="https://www.youtube.com/watch?v=oV2k8T_6XpQ&ab_channel=HanyangUniversity%ED%95%9C%EC%96%91%EB%8C%80%ED%95%99%EA%B5%90" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto btn">
            <span>watch interview</span>
          </a>
        </ButtonSet>
      </TimelineEntry>
    </>
  )
}
