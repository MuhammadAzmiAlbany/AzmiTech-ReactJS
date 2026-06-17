export default function LoadingScreen() {
    return (
        <>
            <div id="splash">
                <div className="splash-ring-wrap">
                    <div className="splash-ring"></div>
                    <div className="splash-logo">
                        <span>dev<b>.</b></span>
                    </div>
                </div>
                <p className="splash-label">Loading</p>
            </div>
        </>
    );
}