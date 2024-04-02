import * as React from "react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Card } from "./ui/card"
import { Menu } from "lucide-react"

const QuickLinksSheet = () => {
  return (
    <Sheet>
      <SheetTrigger><Menu size={34} /></SheetTrigger>
      <SheetContent side={"left"} className="dark">
        <SheetHeader>
          <SheetTitle>Release Guardian Info</SheetTitle>
          <SheetDescription>
            Onboarding Resources For Release Guardian
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-8">
            <Card className=" text-white p-8 ">
              <p className="font-audimat text-2xl"><a target="_blank" href="https://docs.launchdarkly.com/home/release-guardian">Release Guardian Documentation</a></p>
            </Card>
            <Card className=" text-white p-8 ">
              <p className="font-audimat text-2xl"><a target="_blank" href="https://docs.launchdarkly.com/guides/flags/metrics">Understanding LaunchDarkly metrics</a></p>
            </Card>
            <Card className=" text-white p-8 ">
              <p className="font-audimat text-2xl"><a target="_blank" href="https://docs-stg.launchdarkly.com/4106/guides/experimentation/example-metrics">Example Metric Configurations</a></p>
            </Card>
            </div>
      </SheetContent>
    </Sheet>
  )
}

export default QuickLinksSheet
