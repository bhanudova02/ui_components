import { CardComponentOne } from "@/components/CardComponentOne";
import { ComponentOne } from "@/components/ComponentOne";
import { ComponentThree } from "@/components/ComponentThree";
import { ComponentTwo } from "@/components/ComponentTwo";

export default function Home() {
  return (
    <div className="pt-24 pb-14 bg-black/50 space-y-16">
      <CardComponentOne />
      <ComponentOne />
      <ComponentTwo/>
      <ComponentThree/>
    </div>

  );
}
