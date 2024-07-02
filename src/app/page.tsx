import { CardComponentOne } from "@/components/CardComponentOne";
import { ComponentFive } from "@/components/ComponentFive";
import { ComponentFour } from "@/components/ComponentFour";
import { ComponentOne } from "@/components/ComponentOne";
import { ComponentSix } from "@/components/ComponentSix";
import { ComponentThree } from "@/components/ComponentThree";
import { ComponentTwo } from "@/components/ComponentTwo";

export default function Home() {
  return (
    <div className="pt-24 pb-14 bg-black/50 space-y-16">
      <ComponentFour/>
      <CardComponentOne />
      <ComponentOne />
      <ComponentTwo/>
      <ComponentThree/>
      <ComponentFive/>
      <ComponentSix/>
    </div>

  );
}
