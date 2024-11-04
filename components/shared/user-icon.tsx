import Image from "next/image";
const avatarPlaceholder = "https://i.pravatar.cc/150?u=a042581f4e29026704d";

const UserIcon = () => {
  return (
    <Image
      src={avatarPlaceholder}
      alt="User profile picture"
      width={50}
      height={50}
      className="h-6 w-6 rounded-full object-cover"
    />
  );
};
export default UserIcon;
