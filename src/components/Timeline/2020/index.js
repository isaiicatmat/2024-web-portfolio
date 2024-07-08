import { Briefcase } from "react-feather"
import { BlogPost } from "../BlogPost"
import { ButtonSet, DateEntry, Notes, TimelineEntry } from "../Entry"

export function Year2020() {
  return (
    <>
      <DateEntry title="2020" />
       <TimelineEntry title="Started as a front-end developer at Maromav" timestamp="June 1st, 2020 - Seoul, South Korea" Icon={Briefcase} tint="indigo">
        <Notes>
          <p>Maromav is a startup focused on making programming easy and fun.</p>
          <p>As as Frontend Developer and Designer, I desgined and built the wireframes and prototypes of modules within the webpage and app. We use: React, Nextjs, Vercel, TypeScript, jQuery, AWS</p>
        </Notes>
        <ButtonSet>
          <a className="w-full md:w-auto btn" href="https://www.trymake.co/" target="_blank" rel="noopener noreferrer">
            <span>view website</span>
          </a>
        </ButtonSet>
      </TimelineEntry> 
      <BlogPost timelinetitle="Joined college content team" timestamp="Jan 14th, 2020 - Seoul, South Korea" 
        slug="https://www.youtube.com/watch?v=RrLha1xur44&list=PLme6cI4cWPsmMnFO-dWEps_x2BsXXk3X4&index=7&ab_channel=HanyangUniversity%ED%95%9C%EC%96%91%EB%8C%80%ED%95%99%EA%B5%90" 
        title="Playlist of my collaboration with HYU" description="Directed, produced and delivered content and promotional ads for the school." />
    </>
  )
}
