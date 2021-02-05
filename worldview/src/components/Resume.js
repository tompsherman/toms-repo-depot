import React from 'react'
import LeftSection from '../blocks/LeftSection'
import RightSection from '../blocks/RightSection'

const Resume = () => {
    let projObj = [
        {
            title: "CEO, Inventor",
            role: "Galvin Industries LLC",
            date: "Jan. 2017 - Present",
            location: "remote",
            repo: "https://theNewCalendar.com",
            deployed: "remote",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1612488900/resume%20repo/FB_posts_12_f81q9f.png",
            stack: "research & development | product management | marketing | patent law | data analysis",
            descript: ["Discovered 5th season of year, invented the 'Quintile-based Annual Timekeeping System and Perpetual Calendar' to track solar year more precisely and accurately than current standards", "Represent self as a credentialed pro se inventor before the US Patent and Trademark Office", "Develop commercial, academic, and personal applications for the New Calendar system",
            "Winner of the Passage to Profit Pitch contest (April 2019)", "User base increasing on average of 31% year over year "]
        },
        {
            title: "Evening News Anchor",
            role: "Big Talk Delmarva",
            date: "Nov. 2020 - Present",
            location: "remote",
            repo: "http://BigTalkDelmarva.com/",
            deployed: "",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1612517998/resume%20repo/btd_logo_o9gskx.jpg",
            stack: "journalism | communication | broadcasting | audio engineering | ",
            descript: ["Prepare daily newscasts reporting local events covering a 1,500 sq. mi. territory", "Research, write, report, record, edit up to 8 stories per day"]
        },
        {
            title: "Executive Director",
            role: "MoonCat Comedy Club",
            date: "Jan. 2015 - Present",
            location: "greater Delmarva Peninsula",
            repo: "https://www.mooncatcomedy.com/",
            deployed: "",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1612519110/resume%20repo/mooncatcomedy_pnn2ty.png",
            stack: "non-profit organizations | public speaking | communications | events management  ",
            descript: [
                "Founder of a 501(c)3 non-profit to help amateur comedians on Delmarva Peninsula access shows, venues, and opportunities.",
                "Oversee all day-to-day aspects of organization, including administration, marketing, outreach, and accounting.",
                "Set up, book, and run shows with up to 200 crowd members and 20 comedians",
                "Generated increasing annual program operating profit margins through 2020; current average 73%",
                "Develop and distribute marketing material, via personal contact, organic media, and online promotions", 
                "Mentor local comedians navigating their entry into stand up comedy",
            ]
        },
        {
            title: "Events Coordinator",
            role: "Squadra Entertainment",
            date: "Oct. 2014 - Present",
            location: "multiple locations",
            repo: "http://squadraent.com/",
            deployed: "",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1612520797/resume%20repo/snallyOps_zlp8yn.jpg",
            stack: "events planning | logistics | communication",
            descript: [
                "Support event operations at a variety of events and locations across the midatlantic region",
                "Building infrastructure, corralling humans, communicating across teams",
                "Set up & break down events within 24-72 hour time frames",
                "Save-A-Limb Ride: 100 mi annual bike race with over 200 riders",
                "Walk This Way: fashion show at the Italian Embassy to combat domestic violence",
                "Wilmington Women's Half-Marathon: innaugural half marathon in Wilmington Delaware",
                "Snallygaster Beer Festival: Day long beer festival in downtown Washington DC featuring 150+ breweries and 2000+ attendees"
            ]
        },
        {
            title: "Morning News Anchor",
            role: "92.7 WGMD",
            date: "May 2017 - May 2018",
            location: "Lewes, Delaware",
            repo: "https://www.wgmd.com/",
            deployed: "",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1612522323/resume%20repo/WGMD-with-Red-White-Blue-No-Outlines-On-White-780x340x72-20200721-1900_n87gtx.png",
            stack: "journalism | communication | broadcasting | audio engineering | ",
            descript: [
                "",
                "",
                "",
            ]
        },
        {
            title: "Tour Team Operations",
            role: "Dogfish Head Craft Brewery",
            date: "April 2015 - June 2016",
            location: "Milton, DE",
            repo: "https://www.dogfish.com/",
            deployed: "",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1612522635/resume%20repo/dogfish_logo_y6uyav.jpg",
            stack: "public speaking | hospitality | suppy chain management | customer service | food & beverage",
            descript: [
                "",
                "",
                "",
            ]
        },
        {
            title: "Freelance Writer & Journalist",
            role: "multiple organizations",
            date: "Nov. 2013 - Present",
            location: "remote",
            repo: "",
            deployed: "",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1612538468/resume%20repo/tom_at_desk_ayac6o.jpg",
            stack: " writing | communications | journalism | research | photography",
            descript: [
                "solutions for change",
                "The Harlem Times",
                "North American Management Company",
            ]
        },
        {
            title: "Founder & Logistics Coordinator",
            role: "The Run For Veterans",
            date: "",
            location: "",
            repo: "",
            deployed: "",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1612538835/resume%20repo/run_for_vets_action_fsorgm.jpg",
            stack: " non-profit organizations | logistics | marketing",
            descript: [
                "",
                "",
                "",
            ]
        },
        {
            title: "",
            role: "",
            date: "",
            location: "",
            repo: "",
            deployed: "",
            image: "",
            stack: " |  | ",
            descript: [
                "",
                "",
                "",
            ]
        },
    ]
    return (
        <div>
            <h3>This is Tom's Resume</h3>
            <LeftSection projObj={projObj[0]}/>               
            <RightSection projObj={projObj[1]}/>
            <LeftSection projObj={projObj[2]}/>
            <RightSection projObj={projObj[3]}/>
            <LeftSection projObj={projObj[4]}/>
            <RightSection projObj={projObj[5]}/>
            <LeftSection projObj={projObj[6]}/>
            <RightSection projObj={projObj[7]}/>
        </div>
    )
}

export default Resume
