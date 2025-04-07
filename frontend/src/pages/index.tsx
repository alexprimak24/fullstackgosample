import UserInterface from '@/components/UserInterface'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen py-2">
      <div className="m-4">
        <UserInterface backendName="go" />
      </div>
    </div>
  )
}
