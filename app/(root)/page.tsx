async function HomePage() {
  await delay(1000)

  return (
    <div className=''>
      <title>Home</title>
    </div>
  )
}

export default HomePage

// simulate a server delay to show the loading state
const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
