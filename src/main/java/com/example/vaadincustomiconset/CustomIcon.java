package com.example.vaadincustomiconset;

import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.IconFactory;

import java.util.Locale;

public enum CustomIcon implements IconFactory {
    SAMPLE1, SAMPLE2;
    @Override
    public Icon create() {
        return new Icon("custom", name().toLowerCase(Locale.ENGLISH));
    }
}
