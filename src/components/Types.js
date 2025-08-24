import React from 'react';
import './Types.css'; 

const Types = () => {
    return (
        <section id="types" className="types-section">
            <h2 className="types-title">Types of Racquets</h2>
            <table className="types-table">
                <thead>
                    <tr>
                        <th className="types-header">Type</th>
                        <th className="types-header">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="types-row">
                        <td className="types-cell">Beginner</td>
                        <td className="types-cell">
                            Lightweight and easy to handle. Ideal for those just starting out, these racquets provide a larger sweet spot for better hitting.
                        </td>
                    </tr>
                    <tr className="types-row">
                        <td className="types-cell">Intermediate</td>
                        <td className="types-cell">
                            Offers better control and spin. Suitable for players who have developed their skills and are looking to improve their game.
                        </td>
                    </tr>
                    <tr className="types-row">
                        <td className="types-cell">Advanced</td>
                        <td className="types-cell">
                            Customized racquets designed for speed and power. These are typically used by competitive players who require precision and performance.
                        </td>
                    </tr>
                    <tr className="types-row">
                        <td className="types-cell">Specialty</td>
                        <td className="types-cell">
                            Designed for specific styles of play, such as doubles or singles. These racquets often feature unique designs or technologies to enhance performance.
                        </td>
                    </tr>
                    <tr className="types-row">
                        <td className="types-cell">Hybrid</td>
                        <td className="types-cell">
                            Combines features from different types of racquets to offer versatility. Suitable for players who like to switch up their style during play.
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Types;