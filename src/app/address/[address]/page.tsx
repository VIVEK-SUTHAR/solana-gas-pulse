import Container from "@/components/container"
import Transactions from "@/components/Transactions"

function Page({ params }: { params: { address: string } }) {
  return (
    <Container>
      <div className="flex h-[calc(100vh-88px)] flex-col items-center justify-center">
        <Transactions address={params.address} />
      </div>
    </Container>
  )
}

export default Page
