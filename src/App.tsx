import { Button } from "@/components/ui/button"

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button
          onClick={() => {
            console.log(11111)
          }}>
          Click me
        </Button>
      </div>
    </>
  )
}

export default App
