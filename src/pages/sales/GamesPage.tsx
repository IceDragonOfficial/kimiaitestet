import Games from '../../sections/Games'
import GamesAndMoreSection from '../../sections/GamesAndMoreSection'

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <Games />
      <GamesAndMoreSection />
    </div>
  )
}
