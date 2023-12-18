
export async function Teste() {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  
  const response = await fetch('https://api.github.com/users/iTzRodz')
  const users = await response.json()
  return (
      <pre>oi</pre>

  )
}