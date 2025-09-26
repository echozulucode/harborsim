import React, { useState } from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import './HealthStatus.css';

type HealthItem = {
  name: string;
  isOk: boolean;
};

type HealthCategory = {
  name: string;
  items: HealthItem[];
};

const HealthStatus = ({ categories }: { categories: HealthCategory[] }) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryName: string) => {
    if (expandedCategories.includes(categoryName)) {
      setExpandedCategories(expandedCategories.filter((c) => c !== categoryName));
    } else {
      setExpandedCategories([...expandedCategories, categoryName]);
    }
  };

  return (
    <div className="health-status-container">
      <h2>System Health</h2>
      {categories.map((category) => {
        const isCategoryOk = category.items.every((item) => item.isOk);
        const isExpanded = expandedCategories.includes(category.name);

        return (
          <div key={category.name} className="health-category">
            <div className="category-header" onClick={() => toggleCategory(category.name)}>
              <div className="category-title">
                {isCategoryOk ? (
                  <FaCheckCircle className="icon-ok" />
                ) : (
                  <FaExclamationTriangle className="icon-warning" />
                )}
                <span>{category.name}</span>
              </div>
              {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
            </div>
            {isExpanded && (
              <ul className="health-items-list">
                {category.items.map((item) => (
                  <li key={item.name}>
                    {item.isOk ? (
                      <FaCheckCircle className="icon-ok" />
                    ) : (
                      <FaExclamationTriangle className="icon-warning" />
                    )}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HealthStatus;
