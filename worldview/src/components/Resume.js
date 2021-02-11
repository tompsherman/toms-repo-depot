import React from 'react'
import LeftSection from '../blocks/LeftSection'
import RightSection from '../blocks/RightSection'
import Projects from './Projects'

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
            descript: [
                "Prepare daily newscasts reporting local events covering a 5,500 square mile territory", 
                "Research, write, report up to 8 stories per day",
                "Collaborate with other news anchors remotely to provide & integrate extra reports into our news coverage",
                "Build a fully remote newsroom for recording and editing reports",
                "Creating a site & system to curate upcoming stories queue",
            ]
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
            stack: "journalism | communication | broadcasting | audio engineering | photography",
            descript: [
                "Prepare daily newscasts reporting local events covering a 5,500 square mile territory",
                "Research, write, report, record, edit 12-15 news stories daily for both live & recorded broadcasts",
                "Attended press conferences, events, and locations to develop stories, record audio, and take photographs",
                "Voted 'Best in Delaware' for local radio news coverage",
                "Prepare stories for distribution via radio broadcast, website, and social media"
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
                "Created a unique, customer-oriented, fact-laden tour of the brewery, its history, & manufacturing processes delivered with passion, charisma, & showmanship twice daily to groups of 30+ people.",
                "Provided customer service and information to up to 1000+ guests daily, while manning the bar, food truck, host stand, and/or shop.",
                "Assisted Bar, Food Truck, and Shop managers with supply chain management operations including FIFO stock rotation, inventory counts, implementing control systems, & breaking down functional silos",
                "Helped to set up and manage special events as needed (Point-to-Point horse race, WACAAW, Analog-A-GoGo)",
            ]
        },
        {
            title: "Freelance Communications Specialist",
            role: "multiple organizations",
            date: "Nov. 2013 - Present",
            location: "remote",
            repo: "",
            deployed: "",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1612567264/resume%20repo/tom_africa_image_writing_freelance_jkaibx.png",
            stack: " writing | communications | journalism | research | photography",
            descript: [
                "Pitch stories to editors and publications",
                "Research, report on event and stories both in person and remotely",
                "Provide high quality writing and photography to create compelling stories",
                "Manage groups of staff writers, create editorial calendars, edit submitted stories",
                "Prepare stories for consumption across all 3 major mediums: print, web, and social",
                "Write & distribute press releases",
                "Design, update, and execute website strategy",
                "Member of the National Press Club",
            ]
        },
        {
            title: "Founder & Logistics Coordinator",
            role: "The Run For Veterans",
            date: "",
            location: "remote & mobile",
            repo: "",
            deployed: "",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1612538835/resume%20repo/run_for_vets_action_fsorgm.jpg",
            stack: " non-profit organizations | logistics | business development",
            descript: [
                "Co-founded a 501(c)3 non-profit organization to support veterans returning from the Iraq & Afghanistan Wars mentally, physically, & socially",
                "Planned the logistics for a runner to complete a year-long, 3,600 mile run across America from Oceanside, California to Portland, Maine including the route planning and cost projections",
                "Developed mission, vision, marketing, goals; completed outreach and built relationships with partner organizations",
                "Provided physical support for the runner during the Georgia to Virginia segment of the run."
            ]
        },
        {
            title: "Full Stack Web Developer",
            role: "Lambda School",
            date: "July 2020 - March 2021",
            location: "remote",
            repo: "",
            deployed: "",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1612551013/resume%20repo/lambdaschool_jts8lq.png",
            stack: " HTML | CSS | JavaScript | Node.js | Python | SQLite ",
            descript: [
                "",
                "",
                "",
            ]
        },
        {
            title: "Certified Scrum Master",
            role: "Scrum Inc.",
            date: "October 2020 - November 2020",
            location: "remote",
            repo: "",
            deployed: "",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1612550981/resume%20repo/scrum_inc_cnajtl.png",
            stack: " Agile | SCRUM | project management",
            descript: [
                "",
                "",
                "",
            ]
        },
        {
            title: "BBA - Finance & Supply Chain Mgmnt",
            role: "College of William & Mary",
            date: "August 2007 - December 2010",
            location: "Williamsburg, VA",
            repo: "",
            deployed: "",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1612550986/resume%20repo/willima_and_mary_ofo6cc.png",
            stack: " finance | supply chain management | geology ",
            descript: [
                "",
                "",
                "",
            ]
        },
    ]

    let hardSkills = [
        "Photoshop", 
        "Inkscape",
        "Illustrator",
        "WordPress",
        "Vector Graphics",
        "Algorithms",
        "Wireframes",
        "Git",
        "DNS Mgmnt",
        "Debugging",
        "FE/BE Framework",
        "excel", 
        "google Sheets",
        "powerpoint", 
        "google slides",
        "audacity", 
        "mixcraft",
        "SEO",
        "storytelling",
        "premiere", 
        "Video Editor"
    ]

    let softSkills = [
        "Leadership",
        "Collaboration",
        "Communication",
        "Creativity",
        "Critical Thinking",
        "Problem Solving",
        "Visual Thinking",
        "Organization",
        "Enthusiasm",
        "Work Ethic",
        "Remote Work",
        "Logistics",
        "media outreach",
        "public speaking",
    ]

    let programLangs = [
        "HTML",
        "CSS",
        "Javascript",
        "nodeJS",
        "express",
        "sqlite",
        "MongoDB",
        "React",
        "Redux",
        "Python",
        "jest",
        "cypress",
        "knex",
        "jsx"
    ]

    let contact = {
        title: "Tom Sherman",
        role: "full stack web developer && certified scrum master",
        date: "",
        location: "Milford, DE [willing to relocate]",
        repo: "",
        deployed: "",
        image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1612646738/resume%20repo/tom_gal_r1piuo.png",
        stack: "front end | back end | full stack | scrum master",
        descript: [
            "phone: (302) 703-7088",
            "email: tpsherman703@gmail.com",
            "address: ",
        ]
    }

    let heightPop = {
        height: "30vh", 
        width: "auto",
        margin: "auto"
    }

    let spacing = {
        display: "flex",
        justifyContent: "space-between"
    }

    console.log("arrow icon attributes: RoundIcons")
    console.log("home icon attribute: Dave Gandy")

    return (
        <div>
            <div className="button-container" id="top">
                <a href="#skills" className="one">
                    {/* <div className="one"> */}
                        <p>skills</p>
                    {/* </div> */}
                </a>
                <a href="#employment" className="two">
                    {/* <div className="two"> */}
                        <p>employment</p>
                    {/* </div> */}
                </a>
                <a href="#education" className="three">
                    {/* <div className="three"> */}
                        <p>education</p>
                    {/* </div> */}
                </a>
                <a href="#projects" className="four">
                    {/* <div className="five"> */}
                        <p>projects</p>
                    {/* </div> */}
                </a>
                <a href="#contact" className="five">
                    {/* <div className="four"> */}
                        <p>contact</p>
                    {/* </div> */}
                </a>
            </div>
            <section id="skills">
                
                <div className="one flex-head">
                    <h2 style={{margin: "auto 0 auto 1%"}}>Skills</h2>
                    <div className="third mobile">
                        <a href="#top">
                            <img src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1612713858/resume%20repo/right-arrow_simrlh.png" className="head-button-backward"/>
                        </a>
                        <a href="#top">
                            <img src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1612715648/resume%20repo/home_bjd6l7.png" className="head-button-home"/>
                        </a>
                        <a href="#employment">
                            <img src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1612713858/resume%20repo/right-arrow_simrlh.png" className="head-button-forward"/>
                        </a>
                    </div>
                </div>

                <h3 style={{textAlign: 'center'}} className="border">Programming Languages</h3>
                <div className="skill flex-row">
                    {
                        programLangs.map(skill => {
                            return <p className="eighth border">{skill}</p>
                        })
                    }
                </div>
                <div className="big-screen">
                    <h3 className="rotate border">Hard Skills</h3>
                    <div className="skill flex-row">
                        {
                            hardSkills.map(skill => {
                                return <p className="third border">{skill}</p>
                            })
                        }
                    </div>
                    <h3 className="rotate border">Soft Skills</h3>
                    <div className="skill flex-row">
                        {
                            softSkills.map(skill => {
                                return <p className="third border">{skill}</p>
                            })
                        }
                    </div>
                </div>
            </section>
            <section id="employment">
                <div className="two flex-head">
                    <h2 style={{margin: "auto 0 auto 1%"}}>Employment history</h2>
                    <div className="third mobile">
                        <a href="#skills">
                            <img src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1612713858/resume%20repo/right-arrow_simrlh.png" className="head-button-backward"/>
                        </a>
                        <a href="#top">
                            <img src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1612715648/resume%20repo/home_bjd6l7.png" className="head-button-home"/>
                        </a>
                        <a href="#education">
                            <img src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1612713858/resume%20repo/right-arrow_simrlh.png" className="head-button-forward"/>
                        </a>
                    </div>
                </div>
                <LeftSection projObj={projObj[0]}/>               
                <RightSection projObj={projObj[1]}/>
                <LeftSection projObj={projObj[2]}/>
                <RightSection projObj={projObj[3]}/>
                <LeftSection projObj={projObj[4]}/>
                <RightSection projObj={projObj[5]}/>
                <LeftSection projObj={projObj[6]}/>
                <RightSection projObj={projObj[7]}/>
            </section>
            <section id="education">
                <divc className="three flex-head">
                    <h2 style={{margin: "auto 0 auto 1%"}}>Education</h2>
                    <div className="third mobile">
                        <a href="#employment">
                            <img src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1612713858/resume%20repo/right-arrow_simrlh.png" className="head-button-backward"/>
                        </a>
                        <a href="#top">
                            <img src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1612715648/resume%20repo/home_bjd6l7.png" className="head-button-home"/>
                        </a>
                        <a href="#projects">
                            <img src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1612713858/resume%20repo/right-arrow_simrlh.png" className="head-button-forward"/>
                        </a>
                    </div>
                </divc>
                <LeftSection projObj={projObj[8]} />
                <RightSection projObj={projObj[9]} extra={heightPop} spacing={spacing}/>
                <LeftSection projObj={projObj[10]} />
            </section>
            <section id="projects">
                <div className="four flex-head">
                    <h2 style={{margin: "auto 0 auto 1%"}}>projects</h2>
                    <div className="third mobile">
                        <a href="#education">
                            <img src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1612713858/resume%20repo/right-arrow_simrlh.png" className="head-button-backward"/>
                        </a>
                        <a href="#top">
                            <img src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1612715648/resume%20repo/home_bjd6l7.png" className="head-button-home"/>
                        </a>
                        <a href="#contact">
                            <img src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1612713858/resume%20repo/right-arrow_simrlh.png" className="head-button-forward"/>
                        </a>
                    </div>
                </div >
                    <Projects />
            </section>
            <section id="contact">
                <div className="five flex-head">
                    <h2 style={{margin: "auto 0 auto 1%"}}>Contact</h2>
                    <div className="third mobile">
                        <a href="#education">
                            <img src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1612713858/resume%20repo/right-arrow_simrlh.png" className="head-button-backward"/>
                        </a>
                        <a href="#top">
                            <img src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1612715648/resume%20repo/home_bjd6l7.png" className="head-button-home"/>
                        </a>
                        <a href="#references">
                            <img src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1612713858/resume%20repo/right-arrow_simrlh.png" className="head-button-forward"/>
                        </a>
                    </div>
                </div>
                <RightSection projObj={contact}/>
            </section>
        </div>
    )
}

export default Resume
