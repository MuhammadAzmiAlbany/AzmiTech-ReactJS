export default function LoadingScreen() {
    return (
        <>
            <div id="splash">
                <div className="splash-ring-wrap">
                    <div className="splash-ring"></div>
                    <img src="your-logo.png" alt="Logo"></img>
                    <div className="splash-logo">
                        <span>dev<b>.</b></span>
                        <img src="assets/logo.png" alt="Your Logo"></img>
                    </div>

                </div>
                <p className="splash-label">Loading</p>
            </div>
        </>
    );
}