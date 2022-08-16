import { Container } from "./Integrations";

export default function Automation() {
  return (
    <>
      <Container>
        <div className="flex flex-row mb-8 text-center">
          <p className="text-4xl font-semibold">Automate the flow</p>
        </div>
        <div className="text-zinc-400 text-center items-center w-[70%]">
          Lorem Epsum
        </div>
        <div>
          <img src="/automate.svg" className="h-[25rem]"/>
        </div>
      </Container>
    </>
  );
}