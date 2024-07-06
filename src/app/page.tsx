import { CardComponentOne } from "@/components/CardComponentOne";
import { ComponentEight } from "@/components/ComponentEight";
import { ComponentLeven } from "@/components/ComponentLeven";
import { ComponentFive } from "@/components/ComponentFive";
import { ComponentFour } from "@/components/ComponentFour";
import { ComponentNine } from "@/components/ComponentNine";
import { ComponentOne } from "@/components/ComponentOne";
import { ComponentSeven } from "@/components/ComponentSeven";
import { ComponentSix } from "@/components/ComponentSix";
import { ComponentTen } from "@/components/ComponentTen";
import { ComponentThree } from "@/components/ComponentThree";
import { ComponentTwo } from "@/components/ComponentTwo";
import { ComponentTwelve } from "@/components/ComponentTwelve";

export default function Home() {
  return (
    <div className="pt-24 pb-14 bg-black/50 space-y-16">
      <ComponentFour />
      <CardComponentOne />
      <ComponentOne />
      <ComponentTwo/>
      <ComponentThree/>
      <ComponentFive/>
      <ComponentSix/>
      <ComponentSeven />
      <ComponentEight/>
      <ComponentNine/>
      <ComponentTen/>
      <ComponentLeven/>
      <ComponentTwelve/>
    </div>

  );
}
