class Menu extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <ul lang="en" class="sidebar__lista">
            <li class="sidebar__elemento">
                <a href="index.html" class="sidebar__enlace">Home</a>
            </li>
            <li class="sidebar__elemento">
                <a href="general-information.html" class="sidebar__enlace">General information</a>
            </li>
            <li class="sidebar__elemento">
                <a class="sidebar__enlace" href="unit-1.html">Unit 1. Defining discourse analysis</a>
            </li>
            <li class="sidebar__elemento">
                <a class="sidebar__enlace" href="unit-2.html">Unit 2. Exploring discourse analysis methods</a>
            </li>
            <li class="sidebar__elemento">
                <a class="sidebar__enlace" href="unit-3.html">Unit 3. Discourse analysis applied to language aspects</a>
            </li>
            <li class="sidebar__elemento">
                <a class="sidebar__enlace" href="unit-4.html">Unit 4. Discourse analysis in ELT</a>
            </li>
        </ul>
        `;
    }
}

customElements.define('menu-component', Menu);