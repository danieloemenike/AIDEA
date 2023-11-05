import { Avatar, AvatarImage } from "@/components/ui/avatar"

interface AiAvatarProps {
  src: string;
};

export const AiAvatar = ({
  src
}: AiAvatarProps) => {
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={src} />
    </Avatar>
  );
};

