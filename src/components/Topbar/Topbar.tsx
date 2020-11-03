import React from 'react';

// STYLE
import './Topbar.scss';

// COMPONENTS
import { Button } from '@lib';

const Topbar = (): JSX.Element => {
    const logo: JSX.Element = <svg role="img" className="Topbar__logo" />

    return (
        <header className="Topbar" role="banner" data-testid="Topbar">
            { logo }
            <div className="Topbar__right">
                <div className="Topbar__filters"
                    id="topbar-filters"
                    data-testid="topbar-filters">
                </div>
                <Button
                    id="register-button"
                    label="Cadastre-se"
                    onClick={() => console.log('Pressed!')} />
            </div>
        </header>
    )
}

export {
    Topbar
}