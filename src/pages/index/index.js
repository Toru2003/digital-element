import { getPage } from "../../shared/lib/index.js";
import { Button } from "../../shared/ui/button/index.js";
import { Input } from "../../shared/ui/input/index.js";
import { metaTag } from "../../shared/lib/meta.js";
import { Header } from "../../widgets/header/index.js";

export default () => {
    return getPage({
        title: "Главная",
        body: `
        
            ${Header()}
            <h1>Главная</h1>
            <div class="forma">
                <h2 class="name">Как вас зовут:</h2>
                ${Input({
                    extraAttrs: {
                        "type": "text",
                        "id": "input",
                        "required minlength": "3",
                        "maxlength": "20"
                    }
                })}
                
                ${Button({
                    label: "Click",
                    extraAttrs: {
                        "id": "btn"
                    },
                    extraClasses: {
                        hidden: false,
                        disabled: true,
                    }
                })}
            </div>
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