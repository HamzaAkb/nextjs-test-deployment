export default function Home() {
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
