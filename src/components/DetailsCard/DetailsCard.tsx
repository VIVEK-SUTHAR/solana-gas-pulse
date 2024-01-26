import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import TrackAnother from "../TrackAnother"
import GasFee from "./GasFee"

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
      <CardContent className="grid gap-4">
        <GasFee totalGasSpent={totalGasSpent} />
      </CardContent>
      <CardFooter>
        <TrackAnother />
      </CardFooter>
    </Card>
  )
}
