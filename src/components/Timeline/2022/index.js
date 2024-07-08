import { Briefcase } from "react-feather"
import { ButtonSet, DateEntry, Notes, TimelineEntry } from "../Entry"

export function Year2022() {
  return (
    <>
      <DateEntry title="2022" />
      <TimelineEntry title="Started as Project Manager at PIE Consulting!" timestamp="May 9th, 2022 - Monterrey, N.L. Mexico" Icon={Briefcase} tint="indigo">
        <Notes>
          <p>As an independent consulting group, PIE Consulting is one of the largest FTA platforms in Mexico.</p>
          <p>As as Project Manager in one of the most crucial teams of the company - Integration, I am responsible for making sure that the customer requirements journey to the deliverables is smooth, intuitive, and flawless. Serving more than three projects each year, a frictionless system flow is essential. Some of the technologies we use are: React, VueJS, TypeScript, Redux, Jest, Playwright, React Testing Library, SCSS.</p>
        </Notes>
        <ButtonSet>
          <a className="w-full md:w-auto btn" href="https://piegroup.com.mx/" target="_blank" rel="noopener noreferrer">
            <span>view website</span>
          </a>
        </ButtonSet>
      </TimelineEntry>
    </>
  )
}
