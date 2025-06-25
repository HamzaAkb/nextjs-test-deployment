export default function Home() {
  console.log('process.env.NODE_ENV:', process.env.NODE_ENV)

  return (
    <>
      {process.env.NODE_ENV === 'development' ? (
        <div>Development</div>
      ) : (
        <div>Production</div>
      )}
    </>
  )
}
