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
      <h2 className="py-10 text-center text-3xl font-bold md:py-14 lg:py-16">Meet Our Talented Team Members</h2>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2">
        {teamMembers.map(member => (
          <Card key={`${member.id}-member-card`} className="w-[45%] p-2 md:w-[31%]">
            <Image className="aspect-square rounded-md" src={member.imageUrl} height={400} width={400} alt={member.name + " " + member.role} />
            <div className="flex items-center justify-start gap-2 py-2 md:flex-col lg:flex-row">
              <h3 className="text-center text-lg font-semibold">{member.name}</h3>
              <h4 className="text-base">({member.role})</h4>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
