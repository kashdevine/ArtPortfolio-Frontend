export interface Biography {
    id: string,
    title?: string,
    body?: string
}

export interface Biographies {
    bios: Biography[]
}

export interface User {
    id: string,
    email?: string,
    username?: string,
    firstName?: string,
    lastName?: string
}

export interface ProjectImage {
    id: string,
    name?: string,
    altTitle?: string,
    description?: string,
    fullFilePath?: string,
    projectId?: string
}

export interface ProjectImages {
    images: ProjectImage[]
}

export interface ProjectVideo {
    id: string,
    name?: string,
    lineURL?: string,
    description?: string,
    fullFilePath?: string,
    projectId?: string
}

export interface ProjectVideos {
    videos: ProjectVideo[]
}

export interface ProjectLead {
    id: string,
    firstName?: string,
    lastName?: string,
    email?: string,
    message?: string,
    isSpam?: boolean,
    forwardedToEmail: boolean,
    created?: Date
}

export interface ProjectLeads {
    leads: ProjectLead[]
}

export interface Project {
    id: string,
    name?: string,
    description?: string,
    mainPhotoName?: string,
    projectImages?: ProjectImages,
    projectVideos?: ProjectVideos
}