import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const visitorData = await request.json();

        const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

        if (!webhookUrl) {
            console.error('Discord webhook URL not configured');
            return NextResponse.json(
                { error: 'Webhook not configured' },
                { status: 500 }
            );
        }

        // Format data for Discord embed
        const embed = {
            embeds: [{
                title: visitorData.visitorType === 'New Visitor' ? '🆕 New Visitor!' : '🔄 Returning Visitor',
                description: visitorData.visitorType === 'Returning Visitor'
                    ? `**Visit #${visitorData.visitCount}** • Last visit: ${visitorData.lastVisit}`
                    : '**First time visiting the site!**',
                color: visitorData.visitorType === 'New Visitor' ? 0x10B981 : 0xD97706, // Green for new, Amber for returning
                timestamp: new Date().toISOString(),
                fields: [
                    {
                        name: '👤 Visitor Type',
                        value: `${visitorData.visitorType} (Visit #${visitorData.visitCount})`,
                        inline: true
                    },
                    {
                        name: '📍 Location',
                        value: visitorData.location
                            ? `${visitorData.location.city || 'Unknown'}, ${visitorData.location.country || 'Unknown'}`
                            : 'Unknown',
                        inline: true
                    },
                    {
                        name: '💻 Device',
                        value: `${visitorData.device || 'Unknown'}`,
                        inline: true
                    },
                    {
                        name: '🌐 Browser',
                        value: `${visitorData.browser || 'Unknown'}`,
                        inline: true
                    },
                    {
                        name: '🖥️ OS',
                        value: `${visitorData.os || 'Unknown'}`,
                        inline: true
                    },
                    {
                        name: '📱 Screen',
                        value: `${visitorData.screen || 'Unknown'}`,
                        inline: true
                    },
                    {
                        name: '🌍 IP Address',
                        value: `${visitorData.ip || 'Unknown'}`,
                        inline: true
                    },
                    {
                        name: '📡 Connection',
                        value: `${visitorData.connection || 'Unknown'}`,
                        inline: true
                    },
                    {
                        name: '🔗 Referrer',
                        value: visitorData.referrer || 'Direct',
                        inline: true
                    },
                    {
                        name: '⚡ Load Time',
                        value: `${visitorData.loadTime || 'N/A'}`,
                        inline: true
                    },
                    {
                        name: '🕒 Visit Time',
                        value: visitorData.timestamp || new Date().toLocaleString(),
                        inline: false
                    }
                ],
                footer: {
                    text: 'CHIAROSCURO Website Tracker'
                }
            }]
        };

        // Send to Discord webhook
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(embed)
        });

        if (!response.ok) {
            throw new Error(`Discord API error: ${response.statusText}`);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending to Discord:', error);
        return NextResponse.json(
            { error: 'Failed to send notification' },
            { status: 500 }
        );
    }
}
