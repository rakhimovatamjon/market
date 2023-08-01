import NewsCard from "../../Components/Cards/NewsCard";
import css from './Newses.module.css'
export default function Newses() {
    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Newses</h2>
            <div className={css.content}>
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </>
    )
}