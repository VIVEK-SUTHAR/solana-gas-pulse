import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import GasFee from "../GasFee"

type CardProps = React.ComponentProps<typeof Card>

type GasDetailsProps = {
  totalGasSpent: number
  totalTransactions: number
} & CardProps
export default function GasDetails({
  className,
  totalGasSpent = 0,
  totalTransactions = 0,
  ...props
}: GasDetailsProps) {
  const router = useRouter()

  return (
    <Card
      className={cn("xs:w-[340px] w-[380px] bg-transparent", className)}
      {...props}
    >
      <CardHeader>
        <CardTitle>Gas Details</CardTitle>
        <CardDescription>
          You have done {totalTransactions} txns in last 24 hours
        </CardDescription>
      </CardHeader>
      <GasFee totalGasSpent={totalGasSpent} />
      <CardFooter>
        <Button
          variant={"outline"}
          className="w-full"
          onClick={() => router.back()}
        >
          Track another addresss 👀
        </Button>
      </CardFooter>
    </Card>
  )
}
