import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import ShareButton from "../ShareButton"
import TrackAnother from "../TrackAnother"
import { Button } from "../ui/button"
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
      className={cn("w-[380px] bg-transparent xs:w-[320px]", className)}
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
      <CardFooter className="flex flex-col gap-4">
        <TrackAnother />
        <ShareButton />
      </CardFooter>
    </Card>
  )
}
