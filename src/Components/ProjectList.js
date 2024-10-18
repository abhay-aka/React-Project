import React, { useEffect, useState } from "react";
const ProjectLists = () => {
    const [ProjectList, setProjectList] = useState();
    useEffect(() => {
        const plist = async () => {
            const data = await fetchProjectList();
            setProjectList(data);
        }
        plist();
    })
    const projectListArr = [{ name: 'photo gallery', date: '17/11/2024'}, { name: 'Comment section', date: '17/11/2024'}];
    const fetchProjectList = () => {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(projectListArr)
            }, 1500)
        })
    }
    return (
        <ul className="project-list">
             {ProjectList && ProjectList.map((project, index) => {
                return <li key={index}>{project.name}</li>;
            })}
        </ul>
    )
}
export default ProjectLists;