import React from "react"

const LandingPage = React.lazy(() => import('../src/assets/pages/LandingPage'))

function App() {
  return (
    <>
      <div className="h-[100%] w-[100%] bg-[#120e0e]">
        <LandingPage />
      </div>
    </>
  )
}

export default App
