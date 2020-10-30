import React from 'react';

// STYLE
import './Topbar.scss';

// COMPONENTS
import { Button } from '@lib';

const Topbar = (): JSX.Element => {
    const logo: JSX.Element = <svg role="img" className="Topbar__logo" />

    return (
        <header role="banner" data-testid="Topbar" className="Topbar">
            { logo }
            <Button
                id="register-button"
                label="Cadastre-se"
                onClick={() => console.log('Pressed!')} />
        </header>
    )
}

export {
    Topbar
}