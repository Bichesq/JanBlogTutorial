import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import Link from "next/dist/client/link";

export default function CreatePost() {
    return (
      <div>
        <Card className="max-w-lg mx-auto mt-10">
          <CardHeader>
            <CardTitle>Create Post</CardTitle>
            <CardDescription>
              Create a new post to share with the world
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action="">
              <div className="flex flex-col gap-2 mb-4">
                <Label>Title</Label>
                <Input name='title' required type="text"/>
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <Label>Content</Label>
                <Textarea name='content' required />
              </div>
                <div className="flex flex-col gap-2 mb-4">
                    <Label>Image URL</Label>
                    <Input name='imageUrl' required type="url"/>
              </div>
               <Button>Create Post</Button>           
            </form>
          </CardContent>
        </Card>
      </div>
    );
}