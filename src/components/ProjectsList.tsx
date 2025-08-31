import ProjectItem from "./ProjectItem";

function ProjectsList() {
    return(
        <div className="card">
            <div className="cardHeader">
                <div style={{display: "flex", flexDirection: "column", textAlign: "left"}}>
                    <span className="cardTitle">Featured Projects</span>
                    <span>More hololive production fan projects taking place during Cosplay Mania 2025!</span>
                </div>
            </div>
            <div className="tableFlex">
                <ProjectItem title="🎉 HoloMEETUP 2025" link="https://twitter.com/HoloProFansPH/status/1959103308054110579" description="hololive production cosplayers and fans meetup organized by HoloPro Fans PH"/>
                <ProjectItem title="♾️ Octavio's Ice Cream Cart" link="https://twitter.com/Octavicord/status/1957357331668242528" description="An Octoposse Fundraising Fan Project for Cosmania by PH Octoposse / Octavio's Concert Hall"/>
            </div>
        </div>
    );
}
export default ProjectsList;