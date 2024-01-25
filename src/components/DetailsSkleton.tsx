import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function DetailsSkleton() {
  return (
    <Card className="w-[380px] rounded-lg">
      <CardHeader>
        <Skeleton className="mb-2 h-8 w-48" />
        <Skeleton className="mb-4 h-6 w-64" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div>
              <Skeleton className="mb-2 h-6 w-36" />
              <Skeleton className="h-4 w-64" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-4 flex justify-between">
        <Skeleton className="h-12 w-full rounded-md" />
      </CardFooter>
    </Card>
  )
}
