'use client';

interface DMPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DMPopup({ isOpen, onClose }: DMPopupProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Toast */}
      <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-5 duration-300">
        <div className="bg-primary text-primary-foreground rounded-xl px-6 py-4 shadow-lg max-w-sm">
          <div className="flex items-start gap-3">
            <div className="text-2xl mt-1">💌</div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Check your DM!</h3>
              <p className="text-primary-foreground/90 text-sm">
                We've sent you the product link. Check your messages!
              </p>
            </div>
            <button
              onClick={onClose}
              className="ml-2 p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
