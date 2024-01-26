import { useRouter } from "next/navigation"

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "./ui/button"

export type CustomError = {
  title: string
  message: string
}
type DetailsErrorProps = {
  error: CustomError
}

export default function DetailsError({ error }: DetailsErrorProps) {
  const router = useRouter()
  return (
    <Card className="xs:w-[340px] w-[380px] rounded-lg">
      <CardHeader>
        <CardTitle>{error.title}</CardTitle>
        <CardDescription>{error.message}</CardDescription>
      </CardHeader>
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
