import { One_UI_Component_Five } from "./components/One_UI_Component_Five";
import { One_UI_Component_Four } from "./components/One_UI_Component_Four";
import { One_UI_Component_One } from "./components/One_UI_Component_One";
import One_UI_Component_Six from "./components/One_UI_Component_Six";
import { One_UI_Component_Three } from "./components/One_UI_Component_Three";
import { One_UI_Component_Two } from "./components/One_UI_Component_Two";

export default function page() {
    return (
        <div className="pt-24 pb-14 bg-black/50 space-y-16">
            {/* <One_UI_Component_One />
            <One_UI_Component_Two/>
            <One_UI_Component_Three/>
            <One_UI_Component_Four/>
            <One_UI_Component_Five/> */}
            <One_UI_Component_Six/>
        </div>
    )
}