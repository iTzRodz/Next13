export default async function Home() {
  
  await new Promise((resolve) => setTimeout(resolve, 2000))
  
  const response = await fetch('https://api.github.com/users/iTzRodz')
  const users = await response.json()
  return (
      <pre>{JSON.stringify(users, null, 2)}</pre>

  )
}
