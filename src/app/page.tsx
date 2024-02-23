"use client";

import Image from "next/image";
import ButtonTsx from "@/components/Button";
import Footer from "@/components/Footer";

import InputField from "@/components/InputField";
import Header from "@/components/Header";
import { handleBeginCalculation } from "@/utils/calculate";
import { useState } from "react";
import { Results } from "@/interfaces";

export default function Home() {
  const [heroData, setHeroData] = useState<Results | string>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = handleBeginCalculation(formData);
    console.log(data);
    setHeroData(data);
  };

  return (
    <>
      <Header />
      <main className="bg-sky-950 pb-24 pt-2">
        <div className="container mx-auto my-5">
          <form className="flex flex-col lg:flex-row" id="form" onSubmit={handleSubmit}>
            <div className="basis-1/4">
              <ButtonTsx value="beginner" name="mapDifficulty" buttonAmber={true} checked={true} required={true} showValue="Beginner (x1.0)">
                <span className="mx-auto">
                  <Image
                    width={100}
                    height={100}
                    className="w-auto h-full max-w-full max-h-full mx-auto"
                    alt="Beginner_map"
                    src="/maps/MapBeginnerBtn.webp"
                  />
                </span>
              </ButtonTsx>
              <ButtonTsx value="intermediate" name="mapDifficulty" buttonAmber={true} showValue="Intermediate (x1.1)">
                <span className="mx-auto">
                  <Image
                    width={100}
                    height={100}
                    className="w-auto h-full max-w-full max-h-full mx-auto"
                    alt="Intermidiate_map"
                    src="/maps/MapIntermediateBtn.webp"
                  />
                </span>
              </ButtonTsx>
              <ButtonTsx value="advanced" name="mapDifficulty" buttonAmber={true} showValue="Advanced (x1.2)">
                <span className="mx-auto">
                  <Image
                    width={100}
                    height={100}
                    className="w-auto h-full max-w-full max-h-full mx-auto"
                    alt="Advanced_map"
                    src="/maps/MapAdvancedBtn.webp"
                  />
                </span>
              </ButtonTsx>
              <ButtonTsx value="expert" name="mapDifficulty" buttonAmber={true} showValue="Expert (x1.3)">
                <span className="mx-auto">
                  <Image
                    width={100}
                    height={100}
                    className="w-auto h-full max-w-full max-h-full mx-auto"
                    alt="Expert_map"
                    src="/maps/MapExpertBtn.webp"
                  />
                </span>
              </ButtonTsx>
            </div>
            <div className="basis-1/4 mx-2">
              <ButtonTsx value={1.0} name="heroTier" buttonAmber={false} checked={true} required={true} showValue="Base Heroes">
                <div className="h-full flex-inline flex">
                  <Image
                    width={100}
                    height={100}
                    src="/heroes/base/StrikerJonesPortrait.webp"
                    className="w-auto h-full max-w-full max-h-full mx-auto"
                    alt="Striker_Jones"
                  />
                  <Image
                    width={100}
                    height={100}
                    src="/heroes/base/ObynGreenFootPortrait.webp"
                    className="w-auto h-full max-w-full max-h-full mx-auto"
                    alt="Obyn_green"
                  />
                  <Image
                    width={100}
                    height={100}
                    src="/heroes/base/QuincyPortrait.webp"
                    className="w-auto h-full max-w-full max-h-full mx-auto"
                    alt="Quincy"
                  />
                  <Image
                    width={100}
                    height={100}
                    src="/heroes/base/GwendolinPortrait.webp"
                    className="w-auto h-full max-w-full max-h-full mx-auto"
                    alt="Gwendolin"
                  />
                  <Image
                    width={100}
                    height={100}
                    src="/heroes/base/EtiennePortrait.webp"
                    className="w-auto h-full max-w-full max-h-full mx-auto"
                    alt="Etienne"
                  />
                </div>
              </ButtonTsx>
              <ButtonTsx value={1.425} name="heroTier" buttonAmber={false} showValue="Heroes (1.425)">
                <div className="h-full flex-inline flex">
                  <Image
                    width={100}
                    height={100}
                    src="/heroes/1425/AdmiralBrickellPortrait.webp"
                    className="w-auto h-full max-w-full max-h-full mx-auto"
                    alt="Admiral_Brickell"
                  />
                  <Image
                    width={100}
                    height={100}
                    src="/heroes/1425/EziliPortrait.webp"
                    className="w-auto h-full max-w-full max-h-full mx-auto"
                    alt="Ezili"
                  />
                  <Image
                    width={100}
                    height={100}
                    src="/heroes/1425/PatFustyPortrait.webp"
                    className="w-auto h-full max-w-full max-h-full mx-auto"
                    alt="Pat_Fusty"
                  />
                  <Image
                    width={100}
                    height={100}
                    src="/heroes/1425/SaudaPortrait.webp"
                    className="w-auto h-full max-w-full max-h-full mx-auto"
                    alt="Sauda"
                  />
                </div>
              </ButtonTsx>
              <ButtonTsx value={1.5} name="heroTier" buttonAmber={false} showValue="Heroes (1.5)">
                <div className="h-full flex-inline flex">
                  <Image
                    width={100}
                    height={100}
                    src="/heroes/1500/BenjaminPortrait.webp"
                    className="w-auto h-full max-w-full max-h-full mx-auto"
                    alt="Benjamin"
                  />
                  <Image
                    width={100}
                    height={100}
                    src="/heroes/1500/PsiPortrait.webp"
                    className="w-auto h-full max-w-full max-h-full mx-auto"
                    alt="Psi"
                  />
                </div>
              </ButtonTsx>
              <ButtonTsx value={1.71} name="heroTier" buttonAmber={false} showValue="Heroes (1.71)">
                <div className="h-full flex-inline flex">
                  <Image
                    width={100}
                    height={100}
                    src="/heroes/1710/AdoraPortrait.webp"
                    className="w-auto h-full max-w-full max-h-full mx-auto"
                    alt="Adora"
                  />
                  <Image
                    width={100}
                    height={100}
                    src="/heroes/1710/CaptainChurchillPortrait.webp"
                    className="w-auto h-full max-w-full max-h-full mx-auto"
                    alt="CaptainChurchill"
                  />
                  <Image
                    width={100}
                    height={100}
                    src="/heroes/1710/CorvusPortrait.webp"
                    className="w-auto h-full max-w-full max-h-full mx-auto"
                    alt="CaptainChurchill"
                  />
                </div>
              </ButtonTsx>
            </div>
            <div className="basis-1/4 mx-2 mb-2 bg-amber-500 rounded-lg shadow">
              <div className=" px-5 py-2">
                <div className="flex">
                  <InputField label="Begin:" placeholder="1-119" min="1" max="119" id="begin-round" inputName="startingRound" />
                  <InputField label="End:" placeholder="2-120" min="2" max="120" id="end-round" inputName="untilRound" />
                </div>
                <div className="flex">
                  <InputField label="Players:" placeholder="1-4" min="1" max="4" id="amount-players" inputName="playerAmount" />
                  <InputField label="Starting hero level:" placeholder="1-19" min="1" max="19" id="hero-level" inputName="startingLevel" />
                </div>
                <div className="rounded-lg flex items-center ps-4 border border-amber-200 w-full bg-amber-700">
                  <input
                    id="monkey-knowledge"
                    type="checkbox"
                    name="allMonkeyKnowledge"
                    defaultChecked
                    className="w-4 h-4 text-white mt-1 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                  />
                  <label className="w-full py-4 ms-2 text-white">Enable all monkey knowledge</label>
                </div>
                <button
                  type="submit"
                  className="rounded-lg w-full py-2.5 px-5 me-2 my-5 text-white focus:outline-none bg-amber-700 border border-amber-200 hover:bg-amber-900"
                >
                  Calculate
                </button>
              </div>
            </div>
            <div className="basis-1/4 mb-2 w-full shadow bg-blue-400 rounded-lg">
              {heroData instanceof Object ? (
                <div className="basis-1/4 mb-2 w-full bg-blue-400 rounded-lg">
                  <p className="tracking-tight text-white text-center pt-2">Calculated hero level</p>
                  <p className="text-white text-center font-bold text-lg pb-3">{heroData.heroLevel}</p>
                  <table className="text-left w-full">
                    <thead className="bg-blue-900 flex text-white w-full">
                      <tr className="flex w-full mt-1 mb-2">
                        <th className="pl-2 w-1/2 text-center">Hero Level</th>
                        <th className="pl-2 w-1/2 text-center">Round</th>
                      </tr>
                    </thead>
                    <tbody className="scrollbar flex flex-col overflow-y-scroll w-full h-56 ">
                      {heroData.listOfLevelup.map((levelInfo) => (
                        <tr key={levelInfo.round} className="flex w-full border-solid border-b border-blue-900 odd:bg-blue-500">
                          <td className="text-white pl-2 w-1/2 text-center">{levelInfo.heroLevel}</td>
                          <td className="text-white pl-2 w-1/2 text-center">{levelInfo.round}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center text-white py-5">
                  <h1 className="text-2xl font-bold pb-5">Welcome</h1>
                  <p className="px-5">
                    Welcome to the BTD6 Heroes Calculator! Simply complete the form and click &apos;Calculate&apos; to generate a list of rounds and
                    levels at which your hero will level up.
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
