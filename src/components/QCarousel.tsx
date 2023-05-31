import React, { useEffect, useState } from "react";

export type Item = {
  id: number;
  created_at: string;
  stars: string;
  review: string;
  platform: string;
};

export type Props = {
  items: Item[];
  interval?: number;
  margin?: number;
};

export default function QCarousel({ items, interval = 3000, margin = 1.1 }: Props) {
  const [currentItem, setCurrentItem] = useState(0);
  const [lastItem, setLastItem] = useState(-1);

  useEffect(() => {
    const i = setInterval(() => {
      setCurrentItem((current) => {
        const value = (current + 1) % items.length;

        setLastItem(current);

        return value;
      });
    }, interval);

    return () => {
      clearInterval(i);
    };
  }, [items, interval]);

  return (
    <div id="q-carousel">
      <div className="holder">
        {items.map((item, i) => {
          const life = i === currentItem ? 0 : i === lastItem ? 1 : -1;

          return (
            <div
              className="item"
              key={item.id}
              style={{
                left: `${-life * margin * 100}%`,
                opacity: life === -1 ? 0 : 1,
              }}
            >
              {item.review}

              <div className="platform">- {item.platform}</div>

              <img
                className="stars"
                alt={item.stars}
                src={`../svgs/${item.stars}`}
                // src={`/imgs/${item.stars}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
