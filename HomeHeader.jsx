import { NavLink } from 'react-router-dom'
import logo from './../../Images/logo.png'
import search from './../../Images/searchicon.png'
import sun from './../../Images/sunny.png'
import css from './HomeHeader.module.css'
import cssDark from './HomeHeaderDark.module.css'

export default function HomeHeader({lang, mode, setMode}) {
    return (
        <>
            <header className={(mode) ? css.head : cssDark.head} style={{
                }}>
                <div className={(mode) ? css.logo : cssDark.menu}>
                    <img src={logo} alt="" />
                </div>
                <nav className={ (mode) ? css.menu : cssDark.menu}>
                    <NavLink to='/'>{lang[lang.lang].home}</NavLink>
                    <NavLink to='/blog'>{lang[lang.lang].blog}</NavLink>
                    <NavLink to='/about'>{lang[lang.lang].about}</NavLink>
                    <NavLink to='/contact'>{lang[lang.lang].contact}</NavLink>
                    
                </nav>
                <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                    <button onClick={()=>lang.setLang('en')}>English</button>
                    <button onClick={()=>lang.setLang('ru')}>Русский</button>
                    <button onClick={()=>lang.setLang('uz')}>O'zbekcha</button>
                    <div className={(mode) ? css.search : cssDark.search}>
                        <input type="text" />
                        <button><img src={search} alt="" /></button>
                    </div>
                    <div 
                    onClick={()=>setMode(!mode)} 
                    className={(mode) ? css.lightdark : cssDark.lightdark}>
                        <div className={(mode) ? css.round : cssDark.round}>
                            <img src={sun} alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}