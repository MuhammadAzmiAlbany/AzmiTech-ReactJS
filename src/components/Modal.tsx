import { useEffect } from 'react';

// 1. Define the props contract
interface ModalProps {
  isOpen: boolean;        // Controls whether the modal is visible
  onClose: () => void;    // The function to run when closing
}

export default function Modal({ isOpen, onClose }: ModalProps) {

  // Optional but highly recommended: Close the modal if the user presses 'Escape'
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // 2. If the modal is set to closed, render absolutely nothing
  if (!isOpen) return null;

  return (
    // 3. The Dark Backdrop / Overlay
    <div
      onClick={onClose} // Clicking the dark background closes the modal
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999, // Ensures it sits on top of your Topbar and Sidebar
      }}
    >
      {/* 4. The Content Wrapper */}
      <div
        onClick={(e) => e.stopPropagation()} // CRITICAL: Stops clicks on your card from bubbling to the background
      >
        {/* Your custom card will be injected right here */}
        <div className="col-12 col-lg-12">
          <div className="stat-card">
            <div
              className="stat-icon"
              style={{ background: "rgba(99,102,241,.12)" }}
            >
              <svg
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6366f1"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx={9} cy={7} r={4} />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="stat-body">
              <div className="stat-num">8,291</div>
              <div className="stat-lbl">Active Users</div>
              <span className="stat-trend up">↑ 8.1% vs last month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}