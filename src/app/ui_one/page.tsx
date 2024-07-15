import { One_UI_Component_One } from "./components/One_UI_Component_One";
import { One_UI_Component_Two } from "./components/One_UI_Component_Two";

export default function page() {
    return (
        <div className="pt-24 pb-14 bg-black/50 space-y-16">
            <One_UI_Component_One />
            <One_UI_Component_Two/>
        </div>
    )
}