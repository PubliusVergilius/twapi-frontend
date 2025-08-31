import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { ChartNoAxesColumn, Heart, MessageCircle, Repeat2 } from "lucide-react";

export function Post() {
  return (
    <div className="flex flex-row gap-2 border-b-1 py-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col w-full">
        <div className="flex flex-row gap-2">
          <div>Marcos Vinícios</div>
          <div>@{"marcosvinicius7773"}</div>
          <span>.</span>
          <div>{"15h"}</div>
        </div>
        <Textarea readOnly value="Olá" className="mb-2 border-none" />
        <div className="flex flex-row gap-16">
          <div className="flex gap-1">
            <MessageCircle />
            <span>204</span>
          </div>
          <div className="flex gap-1">
            <Repeat2 />
            <span>117</span>
          </div>
          <div className="flex gap-1">
            <Heart />
            <span>301</span>
          </div>
          <div className="flex gap-1">
            <ChartNoAxesColumn />
            <span>2.4K</span>
          </div>
        </div>
      </div>
    </div>
  );
}
