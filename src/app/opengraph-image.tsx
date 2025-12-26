import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SkipIt Digital - AI-Powered Digital Marketing';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#0b1020',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 40,
                    }}
                >
                    {/* Logo Circle */}
                    <div
                        style={{
                            display: 'flex',
                            width: 120,
                            height: 120,
                            borderRadius: '50%',
                            background: 'linear-gradient(to top right, #06b6d4, #2563eb)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 40px rgba(6,182,212,0.3)',
                            marginRight: 30,
                        }}
                    >
                        <svg
                            width="70"
                            height="70"
                            viewBox="0 0 24 24"
                            fill="white"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M4 5L12 12L4 19V5Z" />
                            <path d="M12 5L20 12L12 19V5Z" />
                        </svg>
                    </div>
                    {/* Text */}
                    <div style={{ display: 'flex', fontSize: 100, fontWeight: 900, fontFamily: 'sans-serif' }}>
                        skip it<span style={{ color: '#22d3ee' }}>.</span>
                    </div>
                </div>
                <div style={{ fontSize: 40, color: '#94a3b8', maxWidth: 800, textAlign: 'center', fontFamily: 'sans-serif' }}>
                    Result-Driven Digital Marketing with AI Mastery
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
