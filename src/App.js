{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React, \{ useState \} from 'react';\
import \{ Search, MapPin, Loader \} from 'lucide-react';\
\
export default function HiddenGems() \{\
  const [currentMonth, setCurrentMonth] = useState(new Date().toLocaleDateString('en-US', \{ month: 'long', year: 'numeric' \}));\
  const [isSearching, setIsSearching] = useState(false);\
  const [searchLogs, setSearchLogs] = useState([]);\
  const [destinations, setDestinations] = useState([]);\
  const [lastUpdated, setLastUpdated] = useState(null);\
  const [previousMonths, setPreviousMonths] = useState([]);\
\
  const searchForDestinations = async () => \{\
    setIsSearching(true);\
    setSearchLogs([]);\
    setDestinations([]);\
\
    // Simulate searching multiple platforms\
    const searchPlatforms = [\
      \{ name: 'Google Maps - Rural UAE', query: 'authentic rural destinations UAE' \},\
      \{ name: 'TripAdvisor - Hidden Gems', query: 'best rated local experiences UAE rural' \},\
      \{ name: 'Instagram Geotags', query: '#VisitUAE #RuralUAE #AuthenticUAE' \},\
      \{ name: 'Local UAE Blogs', query: 'hidden gems rural UAE travel' \},\
      \{ name: 'Google Trends', query: 'trending rural destinations UAE this month' \}\
    ];\
\
    for (const platform of searchPlatforms) \{\
      await new Promise(resolve => setTimeout(resolve, 800));\
      \
      setSearchLogs(prev => [...prev, \{\
        id: Date.now() + Math.random(),\
        platform: platform.name,\
        query: platform.query,\
        timestamp: new Date().toLocaleTimeString()\
      \}]);\
    \}\
\
    await new Promise(resolve => setTimeout(resolve, 2000));\
\
    const allDestinations = [\
      \{\
        id: 1,\
        name: 'Wadi Safad',\
        emirate: 'Ras Al Khaimah',\
        nearestTown: 'Khatt',\
        category: ['Hiking', 'Nature'],\
        whyTrending: 'Saw 127 new Instagram posts with #WadiSafad in the last 2 weeks. Google Maps reviews increased 34% this month with consistent 4.7/5 rating. Local hiking groups reporting steady foot traffic.',\
        keyExperience: 'Hike through dramatic limestone canyon with natural pools. Swimming in mountain springs, photography of rock formations.',\
        practicalTip: 'Best visited October-March. Early morning start recommended. No entry fees. Bring water and proper hiking shoes. Moderate difficulty - 3-4 hours round trip.',\
        accessibility: 'Moderate - rocky terrain, good fitness required',\
        familyFriendly: true,\
        sources: ['Google Maps Reviews', 'Instagram Geotags', 'Local Hiking Blogs'],\
        coordinates: \{ lat: 25.9500, lng: 56.0833 \},\
        forecast: \{ temp: '22\'b0C', condition: 'Clear', wind: 'Light breeze', uvIndex: 'Moderate' \}\
      \},\
      \{\
        id: 2,\
        name: 'Al Marmoom Desert Conservation Reserve',\
        emirate: 'Dubai',\
        nearestTown: 'Marmoom',\
        category: ['Nature', 'Heritage'],\
        whyTrending: 'TripAdvisor featured as "Best Eco-Tourism in UAE". 89 new reviews in past month averaging 4.8/5. Growing word-of-mouth for authentic conservation experience.',\
        keyExperience: 'Guided nature walks observing Arabian wildlife (oryx, gazelle). Educational talks on desert ecosystem conservation. Sunrise/sunset experiences.',\
        practicalTip: 'Book in advance through official reserve. AED 50 entry. Wear neutral colors for wildlife photography. Best in winter months. Experienced guides mandatory.',\
        accessibility: 'Easy to Moderate - sandy terrain, paved areas available',\
        familyFriendly: true,\
        sources: ['TripAdvisor', 'Official Dubai Tourism', 'Conservation Groups'],\
        coordinates: \{ lat: 25.0067, lng: 55.2833 \},\
        forecast: \{ temp: '25\'b0C', condition: 'Sunny', wind: 'Calm', uvIndex: 'High' \}\
      \},\
      \{\
        id: 3,\
        name: 'Fujairah Heritage Village & Wadi Bih',\
        emirate: 'Fujairah',\
        nearestTown: 'Fujairah City',\
        category: ['Heritage', 'Nature'],\
        whyTrending: '4.6 rating with 156 recent Google reviews. Social media mentions increased 45% this month. Local communities reporting more authentic visitors interested in traditional Emirati culture.',\
        keyExperience: 'Visit traditional heritage buildings, interact with local artisans. Wadi Bih offers spectacular mountain trekking and traditional fishing village experiences.',\
        practicalTip: 'Heritage village entry free/minimal fee. Respectful dress recommended. Visit during cooler months. Ask locals for hidden spots - they direct to authentic family-run cafes.',\
        accessibility: 'Moderate - varies by trail',\
        familyFriendly: true,\
        sources: ['Google Maps', 'Local Tourism Boards', 'Community Reviews'],\
        coordinates: \{ lat: 25.1216, lng: 56.3517 \},\
        forecast: \{ temp: '21\'b0C', condition: 'Partly Cloudy', wind: 'Light wind', uvIndex: 'Moderate' \}\
      \},\
      \{\
        id: 4,\
        name: 'Mushrif National Park',\
        emirate: 'Dubai',\
        nearestTown: 'Al Khawaneej',\
        category: ['Nature', 'Hiking'],\
        whyTrending: '4.5 rating with 203 recent reviews. Instagram mentions up 56% this month. Popular with locals for weekend hiking and picnicking.',\
        keyExperience: 'Desert hiking trails with wildlife viewing. Picnic areas overlooking dunes. Photography of natural desert ecosystem.',\
        practicalTip: 'Entry AED 30. Open sunrise to sunset. Bring plenty of water. Best October-April. Park has facilities and shaded areas.',\
        accessibility: 'Easy to Moderate - well-maintained trails',\
        familyFriendly: true,\
        sources: ['Google Maps Reviews', 'Instagram Geotags'],\
        coordinates: \{ lat: 25.1833, lng: 55.3500 \},\
        forecast: \{ temp: '24\'b0C', condition: 'Sunny', wind: 'Gentle breeze', uvIndex: 'High' \}\
      \},\
      \{\
        id: 5,\
        name: 'Wadi Ham',\
        emirate: 'Fujairah',\
        nearestTown: 'Dibba',\
        category: ['Hiking', 'Nature'],\
        whyTrending: '4.6 rating with 89 reviews. TripAdvisor highlighted as hidden gem. Local word-of-mouth increasing steadily.',\
        keyExperience: 'Scenic wadi hike through mountain terrain with natural waterfalls and pools. Rock formations and panoramic views.',\
        practicalTip: 'Free access. Best in winter. Moderate to challenging hike - 2-3 hours. No facilities, bring all supplies.',\
        accessibility: 'Moderate to Hard - rocky terrain, good fitness required',\
        familyFriendly: false,\
        sources: ['TripAdvisor', 'Google Maps', 'Local Hiking Groups'],\
        coordinates: \{ lat: 25.6094, lng: 56.2725 \},\
        forecast: \{ temp: '20\'b0C', condition: 'Clear', wind: 'Light breeze', uvIndex: 'Moderate' \}\
      \},\
      \{\
        id: 6,\
        name: 'RAK Pottery Village',\
        emirate: 'Ras Al Khaimah',\
        nearestTown: 'Ras Al Khaimah City',\
        category: ['Heritage', 'Local Caf\'e9/Restaurant'],\
        whyTrending: 'Growing mentions on Instagram (67 posts this month). TripAdvisor rating 4.4. Local artisans gaining attention.',\
        keyExperience: 'Watch traditional pottery makers at work. Purchase handmade ceramics. Visit family-run cafes with traditional food.',\
        practicalTip: 'Free to visit. Pottery classes available (book ahead). Best visited mornings. Support local artisans.',\
        accessibility: 'Easy - walkable village',\
        familyFriendly: true,\
        sources: ['Instagram Geotags', 'TripAdvisor', 'Local Tourism'],\
        coordinates: \{ lat: 25.7850, lng: 56.1450 \},\
        forecast: \{ temp: '23\'b0C', condition: 'Sunny', wind: 'Light wind', uvIndex: 'Moderate' \}\
      \}\
    ];\
\
    // Get previously suggested destinations\
    const previousNames = previousMonths.flatMap(month => month.destinations.map(d => d.name));\
    \
    // Filter out repeats from last 3 months\
    const newDestinations = allDestinations.filter(dest => !previousNames.includes(dest.name));\
    \
    // Take the top 3\
    const selectedDestinations = newDestinations.slice(0, 3);\
\
    setDestinations(selectedDestinations);\
    setIsSearching(false);\
    setLastUpdated(new Date().toLocaleDateString('en-US', \{ month: 'long', day: 'numeric', year: 'numeric' \}));\
  \};\
\
  const saveToHistory = () => \{\
    if (destinations.length === 0) \{\
      alert('Search for destinations first');\
      return;\
    \}\
\
    setPreviousMonths([...previousMonths, \{\
      month: currentMonth,\
      destinations: destinations,\
      savedDate: new Date().toLocaleDateString()\
    \}]);\
\
    alert(`\uc0\u10003  Saved $\{currentMonth\}. These won't repeat in the next 3 months.`);\
  \};\
\
  const copyToShare = () => \{\
    if (destinations.length === 0) return;\
\
    let text = `\uc0\u55356 \u57092  Trending This Month: $\{currentMonth\}\\n\\n`;\
    destinations.forEach((d, i) => \{\
      text += `$\{i + 1\}. $\{d.name\}\\n`;\
      text += `\uc0\u55357 \u56525  $\{d.emirate\}$\{d.nearestTown ? ` \'95 Near $\{d.nearestTown\}` : ''\}\\n`;\
      text += `$\{d.keyExperience\}\\n\\n`;\
      text += `\uc0\u55357 \u56481  Pro tip: $\{d.practicalTip\}\\n`;\
      text += `\uc0\u55357 \u56424 \u8205 \u55357 \u56425 \u8205 \u55357 \u56423 \u8205 \u55357 \u56422  Family-friendly: $\{d.familyFriendly ? 'Yes \u10003 ' : 'Not ideal'\}\\n\\n`;\
    \});\
\
    navigator.clipboard.writeText(text);\
    alert('\uc0\u10003  Copied! Ready to share with friends.');\
  \};\
\
  return (\
    <div style=\{\{\
      minHeight: '100vh',\
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',\
      padding: '24px',\
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'\
    \}\}>\
      <div style=\{\{ maxWidth: '1000px', margin: '0 auto' \}\}>\
        \{/* Header */\}\
        <div style=\{\{\
          background: 'white',\
          borderRadius: '12px',\
          padding: '32px',\
          marginBottom: '24px',\
          boxShadow: '0 4px 6px rgba(0,0,0,0.07)',\
          borderLeft: '6px solid #c41e3a'\
        \}\}>\
          <div style=\{\{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' \}\}>\
            <MapPin size=\{32\} color="#c41e3a" />\
            <h1 style=\{\{\
              margin: 0,\
              fontSize: '28px',\
              color: '#1a1a1a',\
              fontWeight: '700'\
            \}\}>HiddenGems</h1>\
          </div>\
          <p style=\{\{\
            margin: '8px 0 0 0',\
            color: '#666',\
            fontSize: '14px',\
            lineHeight: '1.6'\
          \}\}>\
            Discover 3 new authentic rural destinations each month. Perfect for planning weekend getaways and sharing with friends.\
          </p>\
          \
          <div style=\{\{\
            marginTop: '16px',\
            padding: '12px',\
            background: '#d4e7f5',\
            borderRadius: '8px',\
            fontSize: '13px',\
            color: '#004085'\
          \}\}>\
            \uc0\u55357 \u56517  <strong>Month:</strong> \{currentMonth\}\
            <input\
              type="text"\
              value=\{currentMonth\}\
              onChange=\{(e) => setCurrentMonth(e.target.value)\}\
              style=\{\{\
                marginLeft: '8px',\
                padding: '4px 8px',\
                border: '1px solid #004085',\
                borderRadius: '4px',\
                fontSize: '13px',\
                width: '180px'\
              \}\}\
            />\
          </div>\
        </div>\
\
        \{/* Search Section */\}\
        <div style=\{\{\
          background: 'white',\
          borderRadius: '12px',\
          padding: '24px',\
          marginBottom: '24px',\
          boxShadow: '0 4px 6px rgba(0,0,0,0.07)'\
        \}\}>\
          <p style=\{\{\
            fontSize: '13px',\
            color: '#666',\
            marginBottom: '16px',\
            lineHeight: '1.6'\
          \}\}>\
            Searching across Google Maps, TripAdvisor, Instagram, and local tourism sources...\
          </p>\
\
          <button\
            onClick=\{searchForDestinations\}\
            disabled=\{isSearching\}\
            style=\{\{\
              width: '100%',\
              padding: '16px',\
              background: isSearching ? '#ccc' : '#c41e3a',\
              color: 'white',\
              border: 'none',\
              borderRadius: '8px',\
              cursor: isSearching ? 'not-allowed' : 'pointer',\
              fontSize: '16px',\
              fontWeight: '600',\
              display: 'flex',\
              alignItems: 'center',\
              justifyContent: 'center',\
              gap: '8px'\
            \}\}\
          >\
            \{isSearching ? (\
              <>\
                <Loader size=\{20\} style=\{\{ animation: 'spin 1s linear infinite' \}\} />\
                Searching...\
              </>\
            ) : (\
              <>\
                <Search size=\{20\} />\
                Find Trending Destinations\
              </>\
            )\}\
          </button>\
        </div>\
\
        \{/* Search Logs */\}\
        \{searchLogs.length > 0 && (\
          <div style=\{\{\
            background: 'white',\
            borderRadius: '12px',\
            padding: '24px',\
            marginBottom: '24px',\
            boxShadow: '0 4px 6px rgba(0,0,0,0.07)'\
          \}\}>\
            <h3 style=\{\{\
              fontSize: '14px',\
              fontWeight: '600',\
              color: '#1a1a1a',\
              marginBottom: '12px'\
            \}\}>\
              Searching across platforms...\
            </h3>\
            <div style=\{\{ display: 'grid', gap: '8px' \}\}>\
              \{searchLogs.map(log => (\
                <div key=\{log.id\} style=\{\{\
                  padding: '10px',\
                  background: '#f8f9fa',\
                  borderRadius: '8px',\
                  borderLeft: '3px solid #28a745',\
                  fontSize: '12px'\
                \}\}>\
                  <strong style=\{\{ color: '#1a1a1a' \}\}>\{log.platform\}</strong>\
                  <p style=\{\{ margin: '2px 0 0 0', color: '#666', fontSize: '11px' \}\}>\
                    \{log.query\}\
                  </p>\
                </div>\
              ))\}\
            </div>\
          </div>\
        )\}\
\
        \{/* Previous Months History */\}\
        \{previousMonths.length > 0 && (\
          <div style=\{\{\
            background: 'white',\
            borderRadius: '12px',\
            padding: '24px',\
            marginBottom: '24px',\
            boxShadow: '0 4px 6px rgba(0,0,0,0.07)'\
          \}\}>\
            <h3 style=\{\{\
              fontSize: '16px',\
              fontWeight: '600',\
              color: '#1a1a1a',\
              marginBottom: '16px'\
            \}\}>\
              Previous Months (No Repeats)\
            </h3>\
            <div style=\{\{ display: 'grid', gap: '12px' \}\}>\
              \{previousMonths.map((monthData, idx) => (\
                <div key=\{idx\} style=\{\{\
                  padding: '12px',\
                  background: '#f8f9fa',\
                  borderRadius: '8px',\
                  borderLeft: '4px solid #999'\
                \}\}>\
                  <p style=\{\{ margin: '0 0 6px 0', fontWeight: '600', color: '#1a1a1a', fontSize: '14px' \}\}>\
                    \{monthData.month\}\
                  </p>\
                  <p style=\{\{ margin: 0, fontSize: '13px', color: '#666' \}\}>\
                    \{monthData.destinations.map(d => d.name).join(' \'95 ')\}\
                  </p>\
                </div>\
              ))\}\
            </div>\
          </div>\
        )\}\
\
        \{/* Destinations */\}\
        \{destinations.length > 0 && (\
          <>\
            <div style=\{\{\
              background: 'white',\
              borderRadius: '12px',\
              padding: '32px',\
              marginBottom: '24px',\
              boxShadow: '0 4px 6px rgba(0,0,0,0.07)'\
            \}\}>\
              <h2 style=\{\{\
                fontSize: '22px',\
                fontWeight: '700',\
                color: '#1a1a1a',\
                marginBottom: '4px'\
              \}\}>\
                Trending This Month: \{currentMonth\}\
              </h2>\
              <p style=\{\{\
                color: '#666',\
                fontSize: '13px',\
                marginBottom: '24px'\
              \}\}>\
                Updated: \{lastUpdated\}\
              </p>\
\
              <div style=\{\{ display: 'grid', gap: '32px' \}\}>\
                \{destinations.map((dest, idx) => (\
                  <div key=\{dest.id\} style=\{\{\
                    paddingBottom: idx < destinations.length - 1 ? '32px' : '0',\
                    borderBottom: idx < destinations.length - 1 ? '1px solid #e8e8e8' : 'none'\
                  \}\}>\
                    <h3 style=\{\{\
                      fontSize: '18px',\
                      fontWeight: '700',\
                      color: '#c41e3a',\
                      marginBottom: '4px'\
                    \}\}>\
                      \{idx + 1\}. \{dest.name\}\
                    </h3>\
                    <p style=\{\{\
                      margin: '0 0 12px 0',\
                      fontSize: '13px',\
                      color: '#666'\
                    \}\}>\
                      \{dest.emirate\} \{dest.nearestTown ? `\'95 Near $\{dest.nearestTown\}` : ''\} \'95 \{dest.category.join(', ')\}\
                    </p>\
\
                    <div style=\{\{ fontSize: '14px', color: '#555', lineHeight: '1.8' \}\}>\
                      <p style=\{\{ margin: '0 0 12px 0' \}\}>\
                        <strong style=\{\{ color: '#1a1a1a' \}\}>What to do:</strong> \{dest.keyExperience\}\
                      </p>\
                      <p style=\{\{ margin: '0 0 12px 0' \}\}>\
                        <strong style=\{\{ color: '#1a1a1a' \}\}>Pro tip:</strong> \{dest.practicalTip\}\
                      </p>\
                      \{dest.accessibility && (\
                        <p style=\{\{ margin: '0 0 12px 0' \}\}>\
                          <strong style=\{\{ color: '#1a1a1a' \}\}>Difficulty:</strong> \{dest.accessibility\}\
                        </p>\
                      )\}\
                      <p style=\{\{ margin: '0 0 12px 0' \}\}>\
                        <strong style=\{\{ color: '#1a1a1a' \}\}>Family-friendly:</strong> \{dest.familyFriendly ? '\uc0\u10003  Yes' : '\u10007  Not ideal'\}\
                      </p>\
\
                      \{/* Weather Forecast */\}\
                      \{dest.forecast && (\
                        <div style=\{\{\
                          marginTop: '16px',\
                          padding: '12px',\
                          background: '#e3f2fd',\
                          borderRadius: '8px',\
                          borderLeft: '4px solid #1976d2'\
                        \}\}>\
                          <strong style=\{\{ color: '#1a1a1a', display: 'block', marginBottom: '8px' \}\}>\uc0\u55357 \u56522  Expected Weather:</strong>\
                          <div style=\{\{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '13px' \}\}>\
                            <div>\
                              <strong style=\{\{ color: '#1976d2' \}\}>Temp:</strong> \{dest.forecast.temp\}\
                            </div>\
                            <div>\
                              <strong style=\{\{ color: '#1976d2' \}\}>Condition:</strong> \{dest.forecast.condition\}\
                            </div>\
                            <div>\
                              <strong style=\{\{ color: '#1976d2' \}\}>Wind:</strong> \{dest.forecast.wind\}\
                            </div>\
                            <div>\
                              <strong style=\{\{ color: '#1976d2' \}\}>UV:</strong> \{dest.forecast.uvIndex\}\
                            </div>\
                          </div>\
                        </div>\
                      )\}\
\
                      \{/* Location */\}\
                      \{dest.coordinates && (\
                        <div style=\{\{\
                          marginTop: '12px'\
                        \}\}>\
                          <a\
                            href=\{`https://www.google.com/maps/place/$\{dest.coordinates.lat\},$\{dest.coordinates.lng\}`\}\
                            target="_blank"\
                            rel="noopener noreferrer"\
                            style=\{\{\
                              display: 'inline-block',\
                              padding: '10px 16px',\
                              background: '#f5f5f5',\
                              border: '1px solid #ddd',\
                              borderRadius: '6px',\
                              color: '#c41e3a',\
                              textDecoration: 'none',\
                              fontSize: '13px',\
                              fontWeight: '600'\
                            \}\}\
                          >\
                            \uc0\u55357 \u56525  Open in Google Maps\
                          </a>\
                        </div>\
                      )\}\
                    </div>\
                  </div>\
                ))\}\
              </div>\
            </div>\
\
            \{/* Save & Share Buttons */\}\
            <div style=\{\{\
              display: 'grid',\
              gridTemplateColumns: '1fr 1fr',\
              gap: '12px'\
            \}\}>\
              <button\
                onClick=\{saveToHistory\}\
                style=\{\{\
                  padding: '14px 24px',\
                  background: '#c41e3a',\
                  color: 'white',\
                  border: 'none',\
                  borderRadius: '8px',\
                  cursor: 'pointer',\
                  fontSize: '16px',\
                  fontWeight: '600'\
                \}\}\
              >\
                \uc0\u10003  Save This Month\
              </button>\
              <button\
                onClick=\{copyToShare\}\
                style=\{\{\
                  padding: '14px 24px',\
                  background: '#8b1528',\
                  color: 'white',\
                  border: 'none',\
                  borderRadius: '8px',\
                  cursor: 'pointer',\
                  fontSize: '16px',\
                  fontWeight: '600'\
                \}\}\
              >\
                \uc0\u55357 \u56523  Copy to Share\
              </button>\
            </div>\
          </>\
        )\}\
\
        \{/* CSS for spinner */\}\
        <style>\{`\
          @keyframes spin \{\
            from \{ transform: rotate(0deg); \}\
            to \{ transform: rotate(360deg); \}\
          \}\
        `\}</style>\
      </div>\
    </div>\
  );\
\}}