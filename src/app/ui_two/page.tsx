'use client'
import { useEffect } from "react";
import Two_UI_Component_Eight from "./components/Two_UI_Component_Eight";
import Two_UI_Component_Eighteen from "./components/Two_UI_Component_Eighteen";
import Two_UI_Component_Eleven from "./components/Two_UI_Component_Eleven";
import Two_UI_Component_Fifteen from "./components/Two_UI_Component_Fifteen";
import Two_UI_Component_Five from "./components/Two_UI_Component_Five";
import Two_UI_Component_Four from "./components/Two_UI_Component_Four";
import Two_UI_Component_Fourteen from "./components/Two_UI_Component_Fourteen";
import Two_UI_Component_Nine from "./components/Two_UI_Component_Nine";
import Two_UI_Component_Nineteen from "./components/Two_UI_Component_Nineteen";
import Two_UI_Component_One from "./components/Two_UI_Component_One";
import Two_UI_Component_Seven from "./components/Two_UI_Component_Seven";
import Two_UI_Component_Seventeen from "./components/Two_UI_Component_Seventeen";
import Two_UI_Component_Six from "./components/Two_UI_Component_Six";
import Two_UI_Component_Sixteen from "./components/Two_UI_Component_Sixteen";
import Two_UI_Component_Ten from "./components/Two_UI_Component_Ten";
import Two_UI_Component_Thirteen from "./components/Two_UI_Component_Thirteen";
import Two_UI_Component_Three from "./components/Two_UI_Component_Three";
import Two_UI_Component_Twelve from "./components/Two_UI_Component_Twelve";
import Two_UI_Component_Twenty from "./components/Two_UI_Component_Twenty";
import Two_UI_Component_Two from "./components/Two_UI_Component_Two";
import Two_UI_Component_Twenty_One from "./components/Two_UI_Component_Twenty_One";
import Two_UI_Component_Twenty_Two from "./components/Two_UI_Component_Twenty_Two";
import Two_UI_Component_Twenty_Three from "./components/Two_UI_Component_Twenty_Three";
import Two_UI_Component_Twenty_Four from "./components/Two_UI_Component_Twenty_Four";
import Two_UI_Component_Twenty_Five from "./components/Two_UI_Component_Twenty_Five";
import Two_UI_Component_Twenty_Six from "./components/Two_UI_Component_Twenty_Six";
import Two_UI_Component_Twenty_Eight from "./components/Two_UI_Component_Twenty_Eight";
import Two_UI_Component_Twenty_Seven from "./components/Two_UI_Component_Twenty_Seven";
import Two_UI_Component_Twenty_Nine from "./components/Two_UI_Component_Twenty_Nine";
import Two_UI_Component_Twenty_Thirty from "./components/Two_UI_Component_Twenty_Thirty";
import Two_UI_Component_Twenty_Thirty_One from "./components/Two_UI_Component_Twenty_Thirty_One";
import Two_UI_Component_Twenty_Thirty_Two from "./components/Two_UI_Component_Twenty_Thirty_Two";
import Two_UI_Component_Twenty_Thirty_Three from "./components/Two_UI_Component_Twenty_Thirty_Three";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    const initAos = async () => {
      await import('aos')
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-center'
      })
    };
    initAos();
  }, [])

  return (
    <div className= "pt-24 pb-14 bg-black/50 space-y-16" >
    <Two_UI_Component_One />
    < Two_UI_Component_Two />
    <Two_UI_Component_Three />
    < Two_UI_Component_Four />
    <Two_UI_Component_Five />
    < Two_UI_Component_Six />
    <Two_UI_Component_Seven />
    < Two_UI_Component_Eight />
    <Two_UI_Component_Nine />
    < Two_UI_Component_Ten />
    <Two_UI_Component_Eleven />
    < Two_UI_Component_Twelve />
    <Two_UI_Component_Thirteen />
    < Two_UI_Component_Fourteen />
    <Two_UI_Component_Fifteen />
    < Two_UI_Component_Sixteen />
    <Two_UI_Component_Seventeen />
    < Two_UI_Component_Eighteen />
    <Two_UI_Component_Nineteen />
    < Two_UI_Component_Twenty />
    <Two_UI_Component_Twenty_One />
    < Two_UI_Component_Twenty_Two />
    <Two_UI_Component_Twenty_Three />
    < Two_UI_Component_Twenty_Four />
    <Two_UI_Component_Twenty_Five />
    < Two_UI_Component_Twenty_Six />
    <Two_UI_Component_Twenty_Seven />
    < Two_UI_Component_Twenty_Eight />
    <Two_UI_Component_Twenty_Nine />
    < Two_UI_Component_Twenty_Thirty />
    <Two_UI_Component_Twenty_Thirty_One />
    < Two_UI_Component_Twenty_Thirty_Two />
    <Two_UI_Component_Twenty_Thirty_Three/>
    </div>
  );
}
