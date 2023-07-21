import Chat from "@/components/Chat/Chat";
import Select from "@/components/GameSection/Select";
import style from '@/styles/pages/home/page.module.css'

export default function Page() {
    return (
        <main className={style.main}>
            <div className={style.title}>
                <h1>Cards Against Humanity</h1>
            </div>
            <div className={style.container}>
                <Chat channel="Global"/>
                <Select/>
            </div>

        </main>
    )
}