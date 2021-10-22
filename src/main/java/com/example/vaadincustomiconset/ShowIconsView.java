package com.example.vaadincustomiconset;

import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.Route;

@Route(value = "")
@JsModule("icons/custom-iconset.js")
public class ShowIconsView extends Div {
    public ShowIconsView() {
        for (CustomIcon customIcon : CustomIcon.values()) {
            add(customIcon.create());
        }
    }
}
