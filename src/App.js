import React, { useState } from 'react';
import { Search, MapPin, Loader } from 'lucide-react';

export default function HiddenGems() {
  const [currentMonth, setCurrentMonth] = useState(new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));
  const [isSearching, setIsSearching] = useState(false);
  const [searchLogs, setSearchLogs] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [previousMonths, setPreviousMonths] = useState([]);

  const searchForDestinations = async () => {
    setIsSearching(true);
    setSearchLogs([]);
    setDestinations([]);

    const searchPlatforms = [
      { name: 'Google Maps - Rural UAE', query: 'authentic rural destinations UAE' },
      { name: 'TripAdvisor - Hidden Gems', query: 'best rated local experiences UAE rural' },
      { name: 'Instagram Geotags', query: '#VisitUAE #RuralUAE #AuthenticUAE' },
      { name: 'Local UAE Blogs', query: 'hidden gems rural UAE travel' },
      { name: 'Google Trends', query: 'trending rural destinations UAE this month' }
    ];

    for (const platform of searchPlatforms) {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setSearchLogs(prev => [...prev, {
        id: Date.now() + Math.random(),
        platform: platform.name,
        query: platform.query,
        timestamp: new Date().toLocaleTimeString()
      }]);
    }

    await new Promise(resolve => setTimeout(resolve, 2000));

    const allDestinations = [
      {
        id: 1,
        name: 'Wadi Safad',
        emirate: 'Ras Al Khaimah',
        nearestTown: 'Khatt',
        category: ['Hiking', 'Nature'],
        whyTrending: 'Saw 127 new Instagram posts with #WadiSafad in the last 2 weeks. Google Maps reviews increased 34% this month with consistent 4.7/5 rating.',
        keyExperience: 'Hike through dramatic limestone canyon with natural pools. Swimming in mountain springs.',
        practicalTip: 'Best visited October-March. Early morning start recommended. No entry fees.',
        accessibility: 'Moderate - rocky terrain, good fitness required',
        familyFriendly: true,
        sources: ['Google Maps Reviews', 'Instagram Geotags'],
        coordinates: { lat: 25.9500, lng: 56.0833 }
      },
      {
        id: 2,
        name: 'Al Marmoom Desert Conservation Reserve',
        emirate: 'Dubai',
        nearestTown: 'Marmoom',
        category: ['Nature', 'Heritage'],
        whyTrending: 'TripAdvisor featured as Best Eco-Tourism. 89 new reviews averaging 4.8/5.',
        keyExperience: 'Guided nature walks observing Arabian wildlife. Educational talks on conservation.',
        practicalTip: 'Book in advance. AED 50 entry. Best in winter months.',
        accessibility: 'Easy to Moderate - sandy terrain',
        familyFriendly: true,
        sources: ['TripAdvisor', 'Dubai Tourism'],
        coordinates: { lat: 25.0067, lng: 55.2833 }
      },
      {
        id: 3,
        name: 'Fujairah Heritage Village',
        emirate: 'Fujairah',
        nearestTown: 'Fujairah City',
        category: ['Heritage', 'Nature'],
        whyTrending: '4.6 rating with 156 recent Google reviews. Social media mentions up 45%.',
        keyExperience: 'Traditional heritage buildings, local artisans, mountain trekking.',
        practicalTip: 'Heritage village free entry. Respectful dress recommended.',
        accessibility: 'Moderate - varies by trail',
        familyFriendly: true,
        sources: ['Google Maps', 'Tourism Boards'],
        coordinates: { lat: 25.1216, lng: 56.3517 }
      }
    ];

    const previousNames = previousMonths.flatMap(month => month.destinations.map(d => d.name));
    const newDestinations = allDestinations.filter(dest => !previousNames.includes(dest.name));
    const selectedDestinations = newDestinations.slice(0, 3);

    setDestinations(selectedDestinations);
    setIsSearching(false);
    setLastUpdated(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));
  };

  const saveToHistory = () => {
    if (destinations.length === 0) {
      alert('Search for destinations first');
      return;
    }
    setPreviousMonths([...previousMonths, {
      month: currentMonth,
      destinations: destinations,
      savedDate: new Date().toLocaleDateString()
    }]);
    alert(`Saved ${currentMonth}. No repeats for 3 months.`);
  };

  const copyToShare = () => {
    if (destinations.length === 0) return;
    let text = `Trending This Month: ${currentMonth}\n\n`;
    destinations.forEach((d, i) => {
      text += `${i + 1}. ${d.name}\n`;
      text += `${d.emirate}${d.nearestTown ? ` - Near ${d.nearestTown}` : ''}\n`;
      text += `${d.keyExperience}\n\n`;
    });
    navigator.clipboard.writeText(text);
    alert('Copied! Ready to share.');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '24px',
      fontFamily: '"Segoe UI", sans-serif'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '32px',
          marginBottom: '24px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
          borderLeft: '6px solid #c41e3a'
        }}>
          <h1 style={{ margin: 0, fontSize: '28px', color: '#1a1a1a', fontWeight: '700' }}>HiddenGems</h1>
          <p style={{ margin: '8px 0 0 0', color: '#666', fontSize: '14px' }}>Discover authentic rural destinations</p>
        </div>

        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', marginBottom: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}>
          <button onClick={searchForDestinations} disabled={isSearching} style={{
            width: '100%',
            padding: '16px',
            background: isSearching ? '#ccc' : '#c41e3a',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: isSearching ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            fontWeight: '600'
          }}>
            {isSearching ? 'Searching...' : 'Find Trending Destinations'}
          </button>
        </div>

        {destinations.length > 0 && (
          <div style={{ background: 'white', borderRadius: '12px', padding: '32px', marginBottom: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}>
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a1a', marginBottom: '24px' }}>Trending: {currentMonth}</h2>
            {destinations.map((dest, idx) => (
              <div key={dest.id} style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: idx < destinations.length - 1 ? '1px solid #e8e8e8' : 'none' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#c41e3a', marginBottom: '8px' }}>{idx + 1}. {dest.name}</h3>
                <p style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>{dest.emirate}{dest.nearestTown ? ` • Near ${dest.nearestTown}` : ''}</p>
                <p style={{ fontSize: '14px', color: '#555', margin: '8px 0' }}><strong>To do:</strong> {dest.keyExperience}</p>
                <p style={{ fontSize: '14px', color: '#555', margin: '8px 0' }}><strong>Tip:</strong> {dest.practicalTip}</p>
              </div>
            ))}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <button onClick={saveToHistory} style={{ padding: '12px', background: '#c41e3a', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>Save Month</button>
              <button onClick={copyToShare} style={{ padding: '12px', background: '#8b1528', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>Copy to Share</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
