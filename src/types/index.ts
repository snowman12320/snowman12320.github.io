export interface I18nText {
  zh: string
  en: string
}

export interface LinkItem {
  label: I18nText
  url: string
  icon: 'external' | 'github' | 'document' | 'youtube'
}

export interface LinkGroup {
  label: I18nText
  links: LinkItem[]
}

export interface ExperienceItem {
  id: string
  position: I18nText
  company: I18nText
  location: I18nText
  period: string
  departureReason?: I18nText
  bullets: { zh: string[]; en: string[] }
  printBullets?: { zh: string[]; en: string[] }
  techStack: string[]
  contribution?: I18nText
  links?: LinkItem[]
  linkGroups?: LinkGroup[]
  gallery?: { id: string; images: { src: string; description: string }[] }
}

export interface ProjectItem {
  id: string
  name: I18nText
  category: I18nText
  categoryColor: 'blue' | 'green' | 'purple'
  shortDesc: I18nText
  techStack: string[]
  detailedDesc: I18nText
  links: LinkItem[]
  contribution?: I18nText
  gallery?: { id: string; images: { src: string; alt: string; description: string }[] }
}

export interface SkillCategory {
  id: string
  title: I18nText
  icon: string
  skills: string[]
}
