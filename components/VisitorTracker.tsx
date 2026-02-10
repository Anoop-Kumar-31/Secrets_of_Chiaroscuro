'use client';

import { useEffect, useState } from 'react';

/* This is strictly for analytical purpose only publically avaliable info is collected */

export default function VisitorTracker() {
    const [tracked, setTracked] = useState(false);

    useEffect(() => {
        // Only track once per session
        if (tracked || typeof window === 'undefined') return;

        const trackVisitor = async () => {
            try {
                // Collect device and browser information
                const deviceInfo = {
                    device: getDeviceType(),
                    browser: getBrowserInfo(),
                    os: getOSInfo(),
                    screen: `${window.screen.width}x${window.screen.height}`,
                    viewport: `${window.innerWidth}x${window.innerHeight}`,
                    language: navigator.language,
                    platform: navigator.platform,
                    cookiesEnabled: navigator.cookieEnabled,
                    referrer: document.referrer || 'Direct',
                    userAgent: navigator.userAgent,
                    timestamp: new Date().toLocaleString(),
                };

                // Get connection info if available
                const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
                const connectionInfo = connection
                    ? `${connection.effectiveType || 'Unknown'} (${connection.downlink || 'N/A'} Mbps)`
                    : 'Unknown';

                // Get performance metrics
                const loadTime = getPageLoadTime();

                // Get location data from IP geolocation service
                let locationData = null;
                try {
                    const locationResponse = await fetch('https://ipapi.co/json/');
                    if (locationResponse.ok) {
                        locationData = await locationResponse.json();
                    }
                } catch (error) {
                    console.log('Location fetch failed:', error);
                }

                // Prepare tracking data
                const trackingData = {
                    ...deviceInfo,
                    connection: connectionInfo,
                    loadTime: loadTime,
                    location: locationData ? {
                        city: locationData.city,
                        region: locationData.region,
                        country: locationData.country_name,
                        timezone: locationData.timezone,
                        org: locationData.org,
                    } : null,
                    ip: locationData?.ip || 'Unknown',
                };

                // Send to API route
                await fetch('/api/track', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(trackingData),
                });

                setTracked(true);
            } catch (error) {
                console.error('Tracking error:', error);
            }
        };

        // Add small delay to ensure page is loaded
        const timer = setTimeout(trackVisitor, 1000);
        return () => clearTimeout(timer);
    }, [tracked]);

    return null; // No UI needed
}

// Helper functions
function getDeviceType(): string {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return 'Tablet';
    }
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return 'Mobile';
    }
    return 'Desktop';
}

function getBrowserInfo(): string {
    const ua = navigator.userAgent;
    let browserName = 'Unknown';
    let browserVersion = '';

    if (ua.indexOf('Firefox') > -1) {
        browserName = 'Firefox';
        browserVersion = ua.match(/Firefox\/([0-9.]+)/)?.[1] || '';
    } else if (ua.indexOf('SamsungBrowser') > -1) {
        browserName = 'Samsung';
        browserVersion = ua.match(/SamsungBrowser\/([0-9.]+)/)?.[1] || '';
    } else if (ua.indexOf('Opera') > -1 || ua.indexOf('OPR') > -1) {
        browserName = 'Opera';
        browserVersion = ua.match(/(?:Opera|OPR)\/([0-9.]+)/)?.[1] || '';
    } else if (ua.indexOf('Trident') > -1) {
        browserName = 'IE';
        browserVersion = ua.match(/rv:([0-9.]+)/)?.[1] || '';
    } else if (ua.indexOf('Edge') > -1) {
        browserName = 'Edge';
        browserVersion = ua.match(/Edge\/([0-9.]+)/)?.[1] || '';
    } else if (ua.indexOf('Edg') > -1) {
        browserName = 'Edge Chromium';
        browserVersion = ua.match(/Edg\/([0-9.]+)/)?.[1] || '';
    } else if (ua.indexOf('Chrome') > -1) {
        browserName = 'Chrome';
        browserVersion = ua.match(/Chrome\/([0-9.]+)/)?.[1] || '';
    } else if (ua.indexOf('Safari') > -1) {
        browserName = 'Safari';
        browserVersion = ua.match(/Version\/([0-9.]+)/)?.[1] || '';
    }

    return `${browserName} ${browserVersion}`;
}

function getOSInfo(): string {
    const ua = navigator.userAgent;
    let os = 'Unknown';

    if (ua.indexOf('Win') > -1) os = 'Windows';
    else if (ua.indexOf('Mac') > -1) os = 'MacOS';
    else if (ua.indexOf('X11') > -1) os = 'UNIX';
    else if (ua.indexOf('Linux') > -1) os = 'Linux';
    else if (/Android/.test(ua)) os = 'Android';
    else if (/iPhone|iPad|iPod/.test(ua)) os = 'iOS';

    return os;
}

function getPageLoadTime(): string {
    if (typeof window !== 'undefined' && window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        if (pageLoadTime > 0) {
            return `${(pageLoadTime / 1000).toFixed(2)}s`;
        }
    }
    return 'N/A';
}
