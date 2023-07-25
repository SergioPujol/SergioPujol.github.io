'use client';
import { useState } from "react"
import { IconType } from "react-icons"
import { AiFillGithub } from "react-icons/ai"
import Image from 'next/image';
import Link from "next/link";

interface ProjectInfo {
  name: string
  images: Array<string>
  description: string
  links: Array<{ name: string, href: string, icon: IconType }>
}

const Projects = () => {

  const [activeProject, setActiveProject] = useState<string>('');

  const projects: Array<ProjectInfo> = [
    { name: 'test1', images: ['/slogo.png'], description: 'lorem ipsum', links: [{ name: '', href: '', icon: AiFillGithub }] },
    { name: 'test2', images: [], description: 'lorem ipsum', links: [{ name: '', href: '', icon: AiFillGithub }] },
    { name: 'test3', images: [], description: 'lorem ipsum', links: [{ name: '', href: '', icon: AiFillGithub }] },
    { name: 'test4', images: [], description: 'lorem ipsum', links: [{ name: '', href: '', icon: AiFillGithub }] },
    { name: 'test5', images: [], description: 'lorem ipsum', links: [{ name: '', href: '', icon: AiFillGithub }] },
    { name: 'test6', images: [], description: 'lorem ipsum', links: [{ name: '', href: '', icon: AiFillGithub }] },
    { name: 'test7', images: [], description: 'lorem ipsum', links: [{ name: '', href: '', icon: AiFillGithub }] },
    { name: 'test8', images: [], description: 'lorem ipsum', links: [{ name: '', href: '', icon: AiFillGithub }] },
    { name: 'test9', images: [], description: 'lorem ipsum', links: [{ name: '', href: '', icon: AiFillGithub }] },
  ]

  return (
    <div className="h-full w-full bg-bg-primary overflow-y-auto static flex">
      <div className={`grid grid-cols-3 text-lg text-white ${activeProject ? 'w-3/4' : 'w-full'}`}> {/* all project containers */}
        {projects.map((project: ProjectInfo, index) => (
          <div 
            onMouseEnter={() => setActiveProject(project.name) }
            //onMouseLeave={() => setActiveProject('') }
            className={`flex flex-col p-4 items-center border-[1px] ${activeProject == project.name ? 'bg-white text-accent' : ''}`}
          >
            {project.name}
            <div className="flex h-24 items-center justify-center gap-x-1">
              {project.links.map((link) => (
                <Link href={link.href}><link.icon size={20} /></Link>
              ))}                
            </div>
          </div>
        ))}
      </div>
      <div className={`flex flex-col ${activeProject ? 'block' : 'hidden'} w-1/4 h-full bg-white`}>
        <div>
          {activeProject}
        </div>
        <div>
          info
        </div>
      </div>
    </div>
  )
}

export default Projects