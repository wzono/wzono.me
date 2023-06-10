import Introduce from './introduce.mdx'
import './style.css'

export default function Home() {
  return (
    <div className="m-auto max-w-3xl">
      <h1 className="text-black text-4xl font-extrabold">Welsey Zon</h1>
      <div className="introduce mt-12 space-y-8">
        <Introduce />
      </div>
    </div>
  )
}
