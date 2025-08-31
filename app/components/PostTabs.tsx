import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  recommendedPosts: React.ReactNode;
  followingPosts: React.ReactNode;
};
export default function PostTabs({ recommendedPosts, followingPosts }: Props) {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="flex space-around">
        <TabsTrigger value="recommended-posts">Posts</TabsTrigger>
        <TabsTrigger value="following-posts">Following</TabsTrigger>
      </TabsList>
      <TabsContent value="recommended-posts">{recommendedPosts}</TabsContent>
      <TabsContent value="following-posts">{followingPosts}</TabsContent>
    </Tabs>
  );
}
