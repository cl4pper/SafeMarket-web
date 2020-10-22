import React from 'react';

// STYLE
import './Section.scss';

// TYPES
import * as Types from './types';

const Section = (props: Types.SectionProps) => {
    const { title } = props;

    return (
        <section className="Section">
            <h1 className="Section__title">{title}</h1>
        </section>
    )
}

export {
    Section
}