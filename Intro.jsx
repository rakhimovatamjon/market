import css from './Intro.module.css'
import cssDark from './IntroDark.module.css'

export default function Intro({lang, mode}) {
    return (
        <>
            <div className={css.intromain}>
                <div className={(mode) ? css.introcard : cssDark.introcard}>
                    <span>{lang[lang.lang].technology}</span>
                    <h1>
                        {lang[lang.lang].introdesc}
                        </h1>
                    <div>
                        {/* <img src="" alt="" /> */}
                        <span>Jason Francisco</span>
                        <span>August 20, 2022</span>
                    </div>
                </div>
            </div>
        </>
    )
}