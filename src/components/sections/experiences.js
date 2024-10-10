// add volunteer experiences, add clubs, add research groups 
import React, {useEffect,useState} from "react";
import './experiences.css'

const Experiences = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.timeline__component');
            const lines = document.querySelectorAll('.timeline__middle');

            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
        
                if (isInViewport) {
                    element.classList.add('timeline__component--slide-in');
                }
            });

        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <div>
           <h1 className="heading"> My Experiences </h1>
           <div className="timeline">
               {/* timline_component = container */}
               <div className="timline__component">
                   <div class="timeline__date timeline__date--right">2024</div>
               </div>
               <div className="timeline__middle">
                   <div className="timeline__point"></div>
               </div>
               <div className="timeline__component timeline__component--bg">
                   <h1 class= "timeline__title">Classroom Ambassador</h1>
                   <h2 class= "timeline__place">Tech2U</h2>
                   <p className="timeline__paragraph">
                       I collaborate with faculty and Technical Co-pilots to deliver real-time technical support, troubleshooting software and hardware issues, maintaining network stability, and ensuring seamless classroom operations by quickly adapting to new technologies and effectively communicating complex technical concepts to non-technical users, resulting in minimal downtime and enhanced learning environments.
                   </p>
               </div>
               <div className="timeline__component timeline__component--bg">
                   <h1 class= "timeline__title">Director of Events</h1>
                   <h2 class= "timeline__place">WiSC - Women in Science and Computing UTM</h2>
                   <p className="timeline__paragraph">
                       Led a team in planning and executing workshops, networking events, and speaker panels, which empowered women in STEM by providing skill development opportunities and industry connections, resulting in increased member engagement and a more supportive community.
                   </p>
               </div>
               <div className="timeline__middle">
                   <div className="timeline__point"></div>
               </div>
               <div className="timline__component">
                   <div class="timeline__date">2024</div>
               </div>


               <div className="timline__component">
                   <div class="timeline__date timeline__date--right">2022</div>
               </div>
               <div className="timeline__middle">
                   <div className="timeline__point"></div>
               </div>
               <div className="timeline__component timeline__component--bg">
                   <h1 class= "timeline__title">Camp Counselor</h1>
                   <h2 class= "timeline__place">Town of Oakville</h2>
                   <p className="timeline__paragraph">
                       Supervised and managed groups of 20 children during various activities, ensuring safety and engagement, resulting in a positive and enriching camp experience for all participants.
                   </p>
               </div>
               <div className="timeline__component timeline__component--bg">
                   <h1 class= "timeline__title">Camp Counselor</h1>
                   <h2 class= "timeline__place">STEM Camp</h2>
                   <p className="timeline__paragraph">
                       Collaborated with counselors to create STEM activities that balanced education and fun, ensuring an engaging camp experience. Mentored children in JavaScript and Python, adapting to different learning styles. Led hands-on projects like robotics and game development, fostering creativity and problem-solving.
                   </p>
               </div>
               <div className="timeline__middle">
                   <div className="timeline__point"></div>
               </div>
               <div className="timline__component">
                   <div class="timeline__date">2021</div>
               </div>
           </div>
       </div>
    )
}

export default Experiences; 