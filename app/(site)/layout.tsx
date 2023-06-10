import Logo from '../components/Logo'
import Navbar from './components/Navbar'

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="z-10 px-12 py-8 w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex w-full items-center justify-between">
          <Logo />
          <Navbar />
        </div>
      </div>
      <div className="px-6 py-10 w-full">
        {children}
      </div>
    </main>
  )
}

export default HomePageLayout
