import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1>Next.js Image Component</h1>
      <Image
        src="/images/profile.jpg"
        alt="Picture of the author"
        width={500}
    </main>
  )
}
