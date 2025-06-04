import AstroIcon from '../components/Icons/AstroIcon.astro'
import CssIcon from '../components/Icons/CssIcon.astro'
import ExpoIcon from '../components/Icons/ExpoIcon.astro'
import FigmaIcon from '../components/Icons/FigmaIcon.astro'
import GitIcon from '../components/Icons/GitIcon.astro'
import HtmlIcon from '../components/Icons/HtmlIcon.astro'
import JavascriptIcon from '../components/Icons/JavascriptIcon.astro'
import MongoIcon from '../components/Icons/MongoIcon.astro'
import ReactIcon from '../components/Icons/ReactIcon.astro'
import SqlIcon from '../components/Icons/SqlIcon.astro'
import TailWindIcon from '../components/Icons/TailWindIcon.astro'
import TypescriptIcon from '../components/Icons/TypescriptIcon.astro'

export const frontend = [
	{name: 'HTML', component: HtmlIcon},
	{name: 'CSS', component: CssIcon},
	{name: 'JavaScript', component: JavascriptIcon},
	{name: 'TypeScript', component: TypescriptIcon},
]

export const toolsAndFrameworks = [
	{name: 'React', component: ReactIcon},
	{name: 'Expo', component: ExpoIcon},
	{name: 'Tailwind', component: TailWindIcon},
	{name: 'Astro', component: AstroIcon},
	{name: 'Figma', component: FigmaIcon},
	{name: 'Git', component: GitIcon},
]

export const backend = [
	{name: 'SQL', component: SqlIcon},
	{name: 'MongoDB', component: MongoIcon},
]
