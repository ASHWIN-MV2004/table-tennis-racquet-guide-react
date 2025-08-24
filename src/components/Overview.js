import React from 'react';
import './Overview.css'; 
const Overview = () => {
    return (
        <section id="overview" className="overview-section">
            <h2 className="overview-title">Overview</h2>
            <p className="overview-intro">
                Choosing the right table tennis racquet is essential for your game. The racquet you select can significantly influence your performance, comfort, and overall enjoyment of the sport. Here are some key factors to consider:
            </p>
            <ul className="overview-list">
                <li>
                    <strong>Weight: </strong> 
                    The weight of a racquet is one of the first considerations for any player. Generally, racquets weigh between 70 to 100 grams. 
                    <ul>
                        <li><strong>Lightweight Racquets (70-85 grams):</strong> Ideal for players who prioritize speed and quick reflexes.</li>
                        <li><strong>Mid-Weight Racquets (85-95 grams):</strong> A balanced option that offers a good compromise between speed and power.</li>
                        <li><strong>Heavyweight Racquets (95-100 grams):</strong> These racquets provide more stability and power.</li>
                    </ul>
                </li>
                <li>
                    <strong>Grip Size: </strong> 
                    The grip size is crucial for comfort and control during play. An improper grip can lead to fatigue and lack of precision. 
                    <ul>
                        <li><strong>Small Grip:</strong> Allows for quick wrist movements.</li>
                        <li><strong>Medium Grip:</strong> A versatile option that balances control and power.</li>
                        <li><strong>Large Grip:</strong> Provides a stable hold for powerful strokes.</li>
                    </ul>
                </li>
                <li>
                    <strong>Blade Material: </strong>
                    The blade is the core of your racquet and significantly influences its performance. 
                    <ul>
                        <li><strong>Wood Types:</strong> Affects the feel and response of the racquet.</li>
                        <li><strong>Composite Blades:</strong> Enhance speed and stiffness.</li>
                    </ul>
                </li>
                <li>
                    <strong>Rubber Type: </strong>
                    The type and quality of rubber on your racquet can drastically affect your game. 
                    <ul>
                        <li><strong>Inverted Rubber:</strong> Allows for maximum spin and control.</li>
                        <li><strong>Pips-Out Rubber:</strong> Disrupts opponent's spin.</li>
                    </ul>
                </li>
            </ul>
            <p className="overview-conclusion">
                In conclusion, selecting the right table tennis racquet involves careful consideration of your playing style, preferences, and skill level. Each component plays a crucial role in performance. Take the time to explore various options and seek advice to find the perfect match for your style and needs.
            </p>
        </section>
    );
};

export default Overview;