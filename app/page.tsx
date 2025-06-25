export default function Home() {
  return (
    <>
      {process.env.NEXT_PUBLIC_ENV === 'development' ? (
        <div>Development</div>
      ) : (
        <div>Production</div>
      )}
    </>
  )
}
