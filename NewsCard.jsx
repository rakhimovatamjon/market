import css from './NewsCard.module.css'
import img from './../../Images/Image.png'
export default function NewsCard() {
    return (
        <div className={css.card}>
            <img src={img} alt="" />
            <span style={{
                backgroundColor: '#4B6BFB40', 
                color: '#4B6BFB',
                padding: '5px',
                borderRadius: '3px',
                marginTop:'25px'
                }}>Technology</span>
            <h2>The Impact of Technology on the Workplace: 
                How Technology is Changing</h2>
            <div className={css.cardfoot}>
                <img src={img} alt="" />
                <span>Elizabeth Sourn</span>
                <span>August 28 2023</span>
            </div>
        </div>
    )
}