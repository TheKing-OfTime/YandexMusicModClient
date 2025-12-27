import TitleBarButton from '../../ui/TitleBarButton/TitleBarButton.jsx';

import './TitleBar.css';

export default function TitleBar() {
    return (
        <header className="TitleBar">
            <div className="TitleBar_button_container">
                <TitleBarButton variant="pin"/>
                <TitleBarButton variant="quit"/>
            </div>
        </header>
    )
}
