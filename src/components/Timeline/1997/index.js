import { Gift } from "react-feather"
import { DateEntry, Notes, TimelineEntry } from "../Entry"

export function Year1997() {
  const dob = new Date("07/29/1997")
  const monthDiff = Date.now() - dob.getTime()
  const ageDate = new Date(monthDiff)
  const year = ageDate.getUTCFullYear()
  const ageInYears = Math.abs(year - 1970)

  return (
    <>
      <DateEntry title="1997" />
      <TimelineEntry title="Birthday!" timestamp="July 29th, 1997" Icon={Gift} tint="yellow">
        <Notes>
          <p>I was born the 29th of July 1997, which makes me {ageInYears} years old! </p>
        </Notes>
      </TimelineEntry>
    </>
  )
}
