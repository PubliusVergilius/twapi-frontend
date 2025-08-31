import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Item = {
  icon: string;
  label: string;
  link: string;
};

const items: Item[] = [
  {
    icon: "",
    label: "Home",
    link: "#",
  },
  {
    icon: "",
    label: "Explore",
    link: "#",
  },
  {
    icon: "",
    label: "Notifications",
    link: "#",
  },
  {
    icon: "",
    label: "Messages",
    link: "",
  },
  {
    icon: "",
    label: "Profile",
    link: "users",
  },
];

export function AppSidebar() {
  return (
    <nav className={` md:flex  !flex-col !justify-between h-full py-4 px-4`}>
      <div className="flex flex-col gap-8">
        <Button>Twapi</Button>
        <ul className="flex flex-col gap-8">
          {items.map((item) => (
            <li key={item.label}>
              <div>
                <Link href={item.link}>
                  <h3 className="text-2xl">{item.label}</h3>
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <Button className="w-64 h-16 rounded-full text-xl">Post</Button>
        </div>
      </div>
      <div className="flex flex-row justify-self-end">
        <ProfileSection />
      </div>
    </nav>
  );
}

function ProfileSection() {
  return (
    <Button className="flex gap-4 h-16">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <div>
          <span className="text-lg bold">Marcos Vinícius</span>
        </div>
        <div>
          <span className="text-gray-300">@marcosvinicius7773</span>
        </div>
      </div>
      <div className="text-lg bold">...</div>
    </Button>
  );
}
