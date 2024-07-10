import { Briefcase } from "react-feather"
import { DateEntry, Notes, TimelineEntry, ButtonSet } from "../Entry"

export function Year2019() {
  return (
    <>
      <DateEntry title="2019" />
      <TimelineEntry title="Started as NAVER intern" timestamp="Jul 1st, 2019 - Seoul, South Korea" Icon={Briefcase} tint="indigo">
        <Notes>
          <p>Dubbed as the Google of Korea. The country's number one search engine. </p>
          <p>As a developer in the AI Lab Team, our main goal is to provide information and services that users need even before they request them. </p>
        </Notes>
        <ButtonSet>
          <a className="w-full md:w-auto btn" href="https://www.naverlabs.com/" target="_blank" rel="noopener noreferrer">
            <span>view website</span>
          </a>
        </ButtonSet>
      </TimelineEntry>
    </>
  )
}
