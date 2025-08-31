import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "@/hooks/use-translate";
import { Earth } from "lucide-react";

export function VisibilityButton() {
  const t = useTranslation("pt");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex flex-row gap-2 font-bold align-center items-center">
          <Earth
            size={20}
            alignmentBaseline="middle"
            className="align-self-center"
          />
          <span>{t.home.postar.visibility.text}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-84">
        <DropdownMenuLabel>
          <div>
            <span className="font-bold">{t.home.postar.visibility.title}</span>
          </div>
          <div>
            <span className="break-words">
              {t.home.postar.visibility.description}
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>{t.home.postar.visibility.everyone}</DropdownMenuItem>
        <DropdownMenuItem>
          {t.home.postar.visibility.following}
        </DropdownMenuItem>
        <DropdownMenuItem>{t.home.postar.visibility.verified}</DropdownMenuItem>
        <DropdownMenuItem>{t.home.postar.visibility.mentions}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
