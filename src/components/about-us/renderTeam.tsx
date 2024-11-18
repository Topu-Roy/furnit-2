import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type props = {
  teamMembers: {
    id: number;
    role: string;
    name: string;
    imageUrl: string;
  }[];
  className?: string;
};

export default function Team(props: props) {
  const { teamMembers, className } = props;
  return (
    <div className={cn("pb-10 md:pb-14 lg:pb-16", className)}>
      <h2 className="py-10 text-center md:py-14 lg:py-16">Meet Our Talented Team Members</h2>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2">
        {teamMembers.map(member => (
          <Card key={`${member.id}-member-card`} className="w-[45%] p-2 md:w-[31%]">
            <Image className="aspect-square rounded-md" src={member.imageUrl} height={400} width={400} alt={member.name + " " + member.role} />
            <div className="flex items-center justify-start gap-2 py-2 md:flex-col lg:flex-row">
              <h2 className="font-semibold">{member.name}</h2>
              <h2>({member.role})</h2>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
