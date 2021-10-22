import '@vaadin/vaadin-icon/vaadin-iconset.js';
import '@vaadin/vaadin-icon/vaadin-icon.js';

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<vaadin-iconset name="custom" size="24">
<svg><defs>
<g id="custom:sample1"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"/></g>
<g id="custom:sample2"><path d="M7 17L8.4 15.6L5.8 13L16 13L16 11L5.8 11L8.4 8.4L7 7L2 12L7 17Z" /><path d="M19 19H11V21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H11V5H19V19Z" /></g>
</defs></svg>
</vaadin-iconset>`;

document.head.appendChild($_documentContainer.content);
