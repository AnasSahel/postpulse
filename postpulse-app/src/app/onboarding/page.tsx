import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-col items-center">
          <span className="text-4xl">👋</span>
          <h4 className="mt-4 text-2xl font-semibold">{"Let's Get Started"}</h4>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Separator className="w-full h-1 bg-primary mb-8" />
        <form className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Enter a Topic
            </label>
            <input
              type="text"
              id="topic"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Topic (e.g. Cyber attack, data breach, AI, etc.)"
            />
          </div>
          <Button type="submit" className="w-full">
            {"Let's Post!"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
