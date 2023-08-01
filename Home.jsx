import Intro from "../../Components/Intro/Intro";

export default function Home({lang, mode, setMode}) {
    return (
        <>
            <Intro lang={lang} setMode={setMode} mode={mode} />
        </>
    )
}