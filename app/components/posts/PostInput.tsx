import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "@/hooks/use-translate";
import { Earth, WholeWord } from "lucide-react";
import { VisibilityButton } from "./VisibilityButton";
import { Separator } from "@/components/ui/separator";

export function PostInput() {
  const t = useTranslation("pt");
  return (
    <div className="flex flex-row gap-1 border-b-1">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2 w-full">
        <Textarea placeholder={t.home.postar.placeholder} />
        <VisibilityButton />
        <Separator />
        <div className="flex flex-row gap-2">
          <span>img</span>
          <span>img</span>
          <span>img</span>
        </div>
      </div>
    </div>
  );
}
