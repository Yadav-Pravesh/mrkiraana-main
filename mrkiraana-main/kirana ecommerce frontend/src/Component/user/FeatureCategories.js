import React, { useState } from 'react';

const categories = [
  {
    title: "Fruit & Vegetable",
    icon: "🥕",
    subs: ["Fresh Vegetables", "Fresh Fruits", "Foreign Fruits"],
  },
  {
    title: "Meat & Fish",
    icon: "🍗",
    subs: ["Frozen Fish", "Frozen Chicken & Poultry", "Frozen Meat"],
  },
  {
    title: "Cooking Essentials",
    icon: "🍲",
    subs: ["Dal or Lentil", "Oil", "Rice"],
  },
  {
    title: "Dairy & Eggs",
    icon: "🥛",
    subs: ["Liquid & UHT Milk", "Cheese & Butter", "Condensed Milk & Cream"],
  },
  {
    title: "Breakfast & Cereals",
    icon: "🍞",
    subs: ["Jams & Jellies", "Breads", "Tea & Coffee"],
  },
  {
    title: "Snacks & Beverages",
    icon: "🥤",
    subs: ["Noodles, Pasta & Soups", "Chips & Pretzels", "Cookies"],
  },
  {
    title: "Pet Care",
    icon: "🐶",
    subs: ["Cat Food", "Dog Food", "Grooming & Cleaning"],
  },
  {
    title: "Cleaning & Household",
    icon: "🧹",
    subs: ["Dishwashing Supplies", "Toilet Cleaners & Detergents", "Freshners & Repellents"],
  },
  {
    title: "Baby Care",
    icon: "👶",
    subs: ["Diapers", "Baby Accessories", "Wipes"],
  },
  {
    title: "Sauces & Pickles",
    icon: "🥫",
    subs: ["Tomato Sauces", "Cooking & Others Sauces", "Pickles"],
  },
  {
    title: "Candy & Chocolate",
    icon: "🍬",
    subs: ["Jellies & Marshmallows", "Gums, Mints & Mouth Fresheners", "Candies"],
  },
  {
    title: "ETC",
    icon: "❔",
    subs: ["Beauty", "Dybatics Food", "Cat Foods"],
  },
];

// Styles
const containerStyle = {
  maxWidth: 1200,
  margin: '30px auto',
  padding: '30px',
  background: '#fff',
  boxSizing: 'border-box',
};

const titleStyle = {
  textAlign: 'flex-start',
  fontSize: 36,
  fontWeight: 600,
  marginBottom: 35,
};

const cardStyle = {
  background: '#fff',
  borderRadius: 12,
  padding: 12,
  minHeight: 90,
  boxShadow: '0 2px 10px 0 rgba(0,0,0,0.06)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  boxSizing: 'border-box',
  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
};

const catTitleStyle = {
  fontSize: 15,
  fontWeight: 'bold',
  marginBottom: 8,
  textAlign: 'left',
  width: '100%',
  paddingLeft: 58,
};

const bottomRowStyle = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
};

const iconBlockStyle = {
  width: '20%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
};

const iconStyle = {
  fontSize: 30,
};

const subsBlockStyle = {
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
};

const subStyle = {
  color: "#17223b",
  fontSize: 12,
  marginBottom: 4,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
};

const viewAllButtonStyle = {
  background: '#1e90ff',
  color: '#fff',
  border: 'none',
  padding: '8px 16px',
  borderRadius: 25,
  cursor: 'pointer',
  fontSize: 14,
  fontWeight: 500,
  transition: 'background 0.3s ease, transform 0.2s ease',
  display: 'flex',
  alignItems: 'center',
};

export default function FeatureCategories({ columns = 4 }) {
  const [hoverIndex, setHoverIndex] = useState(null);

  // Split categories into rows of 'columns' length
  const rows = [];
  for (let i = 0; i < categories.length; i += columns) {
    rows.push(categories.slice(i, i + columns));
  }

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>Featured Categories</div>
      {rows.map((row, rowIndex) => {
        const isThirdRow = rowIndex === 2;
        return (
          <div key={rowIndex} style={{ marginBottom: 30 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                gap: 15,
                overflowX: row.length > columns ? 'auto' : 'visible',
              }}
            >
              {row.map((cat, index) => {
                const isHover = hoverIndex === rowIndex * columns + index;
                return (
                  <div
                    key={cat.title}
                    style={{
                      ...cardStyle,
                      boxShadow: isHover
                        ? '0 8px 20px 0 rgba(0,0,0,0.2)'
                        : '0 2px 10px 0 rgba(0,0,0,0.06)',
                      transform: isHover ? 'translateY(-5px)' : 'translateY(0)',
                      minWidth: 0,
                    }}
                    onMouseEnter={() => setHoverIndex(rowIndex * columns + index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    <div style={catTitleStyle}>{cat.title}</div>
                    <div style={bottomRowStyle}>
                      <div style={iconBlockStyle}>
                        <span style={iconStyle}>{cat.icon}</span>
                      </div>
                      <div style={subsBlockStyle}>
                        {cat.subs.map(sub => (
                          <div style={subStyle} key={sub}>
                            <span style={{ marginRight: 6, fontSize: 10 }}>●</span>
                            {sub}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Add View All button below last card of third row */}
            {isThirdRow && (
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
                <button
                  style={{
                    ...viewAllButtonStyle,
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#ff6f00'}
                  onMouseLeave={e => e.currentTarget.style.background = '#1e90ff'}
                >
                  View All &rarr;
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
