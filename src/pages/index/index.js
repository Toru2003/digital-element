import { getPage } from "../../shared/lib/index.js";
// eslint-disable-next-line no-unused-vars
import { metaTag } from "../../shared/lib/meta.js";

export default () => {

    return getPage({
        title: "Главная",
        body: `
            <h1>Главная</h1>
            
            <nav>
                <ul>
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/about.html">О Нас</a>
                    </li>
                </ul>
            </nav>
        `,
        meta: metaTag
    })
}